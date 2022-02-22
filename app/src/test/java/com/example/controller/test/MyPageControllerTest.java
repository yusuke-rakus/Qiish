package com.example.controller.test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import com.example.controller.MyPageController;
import com.example.form.UserPageForm;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest
@AutoConfigureMockMvc
@ExtendWith(MockitoExtension.class)
class MyPageControllerTest {
	
	@Autowired
	private MockMvc mockMVC;
	
	@Mock
	private MyPageController controller;
	

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		System.out.println("テストを開始します");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		System.out.println("テストを終了します");
	}

	@Test
	public void myPageのレスポンスがあるかを確認() throws Exception {
		//formに値をセット
		UserPageForm form = new UserPageForm();
		form.setGuestId(1);
		form.setUserInfoId(3);
		
		ObjectMapper mapper = new ObjectMapper();
		String json = mapper.writeValueAsString(form);
		
		mockMVC.perform(post("/userPage")
				.contentType(MediaType.APPLICATION_JSON)
				.content(json));
	}

	@Test
	public void MyPageResponseがerrorの際に200を返すかを確認() throws Exception {
		UserPageForm form = new UserPageForm();
		form.setGuestId(1);
		form.setUserInfoId(6);
		ObjectMapper mapper = new ObjectMapper();
		String json = mapper.writeValueAsString(form);
		
		ResultActions results = mockMVC.perform(post("/userPage")
				.contentType(MediaType.APPLICATION_JSON)
				.content(json));
		results.andExpect(status().isOk());
		
	}

}

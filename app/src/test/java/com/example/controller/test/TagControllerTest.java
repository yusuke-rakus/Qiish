package com.example.controller.test;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
class TagControllerTest {
	
	@Autowired
	MockMvc mockMvc;

	@Test
	void 正常にタグ情報が取得できる() throws Exception{		
		mockMvc.perform(get("/getTag")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.status").value("success"))
				.andExpect(jsonPath("$.tags[0].id").value(1))
				.andExpect(jsonPath("$.tags[0].skill").value("HTML"))
				.andExpect(jsonPath("$.tags[59].id").value(60))
				.andExpect(jsonPath("$.tags[59].skill").value("API"));
	}
	
	@Test
	void 正常にタグランキングを取得する() throws Exception{		
		mockMvc.perform(get("/getTag/tagCount")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.status").value("success"))
				.andExpect(jsonPath("$.monthly[0].id").value(24))
				.andExpect(jsonPath("$.monthly[0].skill").value("Ubuntu"))
				.andExpect(jsonPath("$.monthly[19].id").value(29))
				.andExpect(jsonPath("$.monthly[19].skill").value("Xcode"))
				.andExpect(jsonPath("$.annual[0].id").value(24))
				.andExpect(jsonPath("$.annual[0].skill").value("Ubuntu"))
				.andExpect(jsonPath("$.annual[19].id").value(29))
				.andExpect(jsonPath("$.annual[19].skill").value("Xcode"))
				.andExpect(jsonPath("$.whole[0].id").value(24))
				.andExpect(jsonPath("$.whole[0].skill").value("Ubuntu"))
				.andExpect(jsonPath("$.whole[19].id").value(29))
				.andExpect(jsonPath("$.whole[19].skill").value("Xcode"));
	}
	

}

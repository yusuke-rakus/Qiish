package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.form.UserPageForm;
import com.example.response.MyPageResponse;
import com.example.service.MyPageService;

@RestController
@RequestMapping("/userPage")
public class MyPageController {

	@Autowired
	private MyPageService myPageService;

	@PostMapping("")
	public MyPageResponse myPage(@RequestBody UserPageForm form) {
		return myPageService.myPage(form);
	}

}

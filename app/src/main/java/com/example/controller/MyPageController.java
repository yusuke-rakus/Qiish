package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.response.MyPageResponse;
import com.example.service.MyPageService;

@RestController
@RequestMapping("/userPage")
public class MyPageController {
	
	@Autowired
	private MyPageService myPageService;
	
	@GetMapping("")
	public MyPageResponse myPage(Integer userInfoId) {
		return myPageService.myPage(userInfoId);
	}

}

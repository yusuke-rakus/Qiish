package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.response.TopPageResponse;
import com.example.service.TopPageService;

@RestController
@RequestMapping("")
public class TopPageController {
	@Autowired
	private TopPageService topPageService;

	@GetMapping("")
	public TopPageResponse topPage(Integer userInfoId) {
		return topPageService.topPage(userInfoId);
	}
}

package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.response.TagResponse;
import com.example.response.TagCountListResponse;
import com.example.service.TagService;

@RestController
@RequestMapping("/getTag")
public class TagControler {

	@Autowired
	private TagService service;
	
	@GetMapping("")
	public TagResponse getTags() {
		return service.getTags();
	}
	
	@GetMapping("/tagCount")
	public TagCountListResponse getTagCount() {
		return service.getTagCount();
	}
}

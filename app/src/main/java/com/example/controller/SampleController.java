package com.example.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@CrossOrigin(origins = {"http://localhost:8081"})
@CrossOrigin
@RequestMapping("/user")
public class SampleController {
	
	@PostMapping("/login")
	public Map<String, String> login(String email, String password) {
		Map<String, String> sample = new HashMap<>();
		sample.put("sample", "sample");
		return sample;
	}
	
	@GetMapping("/login")
	public String smple(String email, String password) {
		System.out.println(email);
		System.out.println(password);
		return "sample";
	}

}

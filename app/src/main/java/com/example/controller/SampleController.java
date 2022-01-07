package com.example.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.form.LoginForm;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
//@CrossOrigin(origins = "http://localhost:8000")
@RequestMapping("/user")
public class SampleController {

	@PostMapping("/login")
	public Map<String, String> login(@RequestBody LoginForm form) {
		System.out.println(form);
		Map<String, String> sample = new HashMap<>();
		sample.put("sample", "sample");
		return sample;
	}

}

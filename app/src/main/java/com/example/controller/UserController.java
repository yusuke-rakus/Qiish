package com.example.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.User;
import com.example.form.LoginForm;
import com.example.service.LoginService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private LoginService loginService;

	// ログインしてIDのみ返却
	@PostMapping("/login")
	public Integer login(@RequestBody LoginForm form) {
		User user = loginService.userLogin(form);
		return user.getUserInfoId();
	}

	@PostMapping("/login2")
	public Map<Object, Object> login2(LoginForm form) {
		LoginForm l = new LoginForm();
		l.setEmail("sample@sample.com");
		l.setPassword("samep");
		Map<Object, Object> sample = new HashMap<>();
		sample.put("status", "success");
		sample.put("userId", 1);
		sample.put("l", l);
		return sample;
	}

}

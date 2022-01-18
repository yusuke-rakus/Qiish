package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.form.LoginForm;
import com.example.form.UserRegisterForm;
import com.example.response.LoginResponse;
import com.example.response.Response;
import com.example.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	// ログインしてIDのみ返却
	@PostMapping("/login")
	public LoginResponse loginUser(LoginForm form) { // @ResponseBody
		return userService.userLogin(form);
	}
	
	@PostMapping("/register")
	public Response registerUser(UserRegisterForm form) { // @ResponseBody
		return userService.userRegister(form);
	}

}

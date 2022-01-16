package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.User;
import com.example.form.LoginForm;
import com.example.mapper.LoginMapper;

@Service
public class LoginService {
	
	@Autowired
	private LoginMapper loginMapper;
	
	public User userLogin(LoginForm form) {
		return loginMapper.userLogin(form);
	}
	

}

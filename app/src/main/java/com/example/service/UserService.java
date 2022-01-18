package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.common.Status;
import com.example.form.LoginForm;
import com.example.form.UserRegisterForm;
import com.example.mapper.UserMapper;
import com.example.response.LoginResponse;
import com.example.response.Response;

@Service
public class UserService {

	@Autowired
	private UserMapper userMapper;

	public LoginResponse userLogin(LoginForm form) {
		Integer userInfoId = null;
		LoginResponse res = new LoginResponse();
		try {
			userInfoId = userMapper.userLogin(form).getUserInfoId();
		} catch (NullPointerException e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		res.setUserId(userInfoId);
		return res;
	}

	public Response userRegister(UserRegisterForm form) {
		Response res = new Response();
		try {
			Integer userInfoId = userMapper.userInfoRegister(form);
			form.setUserInfoId(userInfoId);
			System.out.println(form);
			userMapper.userRegister(form);
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

}

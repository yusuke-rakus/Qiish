package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.common.Status;
import com.example.form.ResetPasswordForm;
import com.example.mapper.UserMapper;
import com.example.response.Response;

@Service
public class ResetPasswordService {

	@Autowired
	private UserMapper userMapper;
	
	//パスワード更新（ユーザー検索）
	public Response ResetRequest(String email) {
		Response res = new Response();
		try {
			userMapper.resetRequest(email).getUserInfoId();
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}
	
	//パスワード更新
	public Response passwordReset(ResetPasswordForm form) {
		Response res = new Response();
		try {
			userMapper.resetPassword(form);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}
	
}

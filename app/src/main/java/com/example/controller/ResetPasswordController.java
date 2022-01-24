package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.form.ResetPasswordForm;
import com.example.response.ResetPasswordResponse;
import com.example.response.Response;
import com.example.service.ResetPasswordService;

@RestController
@RequestMapping("")
public class ResetPasswordController {
	
	@Autowired
	private ResetPasswordService resetPasswordService;

	@PostMapping("/resetRequest")
	public ResetPasswordResponse resetRequest(String email) {
		return resetPasswordService.ResetRequest(email);
	}
	
	@PostMapping("/reset")
	public Response passwordReset(ResetPasswordForm form) {
		return resetPasswordService.passwordReset(form);
	}
	
	
}
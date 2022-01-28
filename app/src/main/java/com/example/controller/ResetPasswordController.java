package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.form.ResetPasswordForm;
import com.example.response.Response;
import com.example.service.ResetPasswordService;

@RestController
@RequestMapping("")
public class ResetPasswordController {

	@Autowired
	private ResetPasswordService resetPasswordService;

	@PostMapping("/resetRequest")
	public Response resetRequest(@RequestBody @Validated ResetPasswordForm form, BindingResult result) {
		if (result.hasErrors()) {
			return new Response(result.hasErrors());
		}
		return resetPasswordService.ResetRequest(form.getEmail());
	}

	@PostMapping("/reset")
	public Response passwordReset(@RequestBody @Validated ResetPasswordForm form, BindingResult result) {
		if (result.hasErrors()) {
			return new Response(result.hasErrors());
		}
		return resetPasswordService.passwordReset(form);
	}
}

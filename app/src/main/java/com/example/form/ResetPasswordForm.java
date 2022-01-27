package com.example.form;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class ResetPasswordForm {
	
	@NotBlank
	@Email
	private String email;
	@Pattern(regexp = "^(?=.*?[a-zA-Z])(?=.*?\\d)[a-zA-Z\\d]{8,}$")
	private String password;
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "ResetPasswordForm [email=" + email + ", password=" + password + "]";
	}
	
	
}

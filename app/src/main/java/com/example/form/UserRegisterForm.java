package com.example.form;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

/**
 * ユーザー登録フォーム
 */

public class UserRegisterForm {

	private Integer id;
	@NotBlank
	@Size(min=1, max=18)
	private String userName;
	@NotBlank
	@Email
	private String email;
	@Pattern(regexp = "^(?=.*?[a-zA-Z])(?=.*?\\d)[a-zA-Z\\d]{8,}$")
	private String password;
	@NotBlank
	private String engineerType;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

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

	public String getEngineerType() {
		return engineerType;
	}

	public void setEngineerType(String engineerType) {
		this.engineerType = engineerType;
	}

	@Override
	public String toString() {
		return "UserRegisterForm [id=" + id + ", userName=" + userName + ", email=" + email + ", password=" + password
				+ ", engineerType=" + engineerType + "]";
	}

}

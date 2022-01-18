package com.example.form;

public class UserRegisterForm {

	private Integer userInfoId;
	private String userName;
	private String email;
	private String password;
	private String engineerType;

	public Integer getUserInfoId() {
		return userInfoId;
	}

	public void setUserInfoId(Integer userInfoId) {
		this.userInfoId = userInfoId;
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
		return "UserRegisterForm [userInfoId=" + userInfoId + ", userName=" + userName + ", email=" + email
				+ ", password=" + password + ", engineerType=" + engineerType + "]";
	}

}

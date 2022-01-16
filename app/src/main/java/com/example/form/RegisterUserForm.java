package com.example.form;

public class RegisterUserForm {

	private String userName;
	private String email;
	private String password;
	private String engineerType;

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
		return "RegisterUserForm [userName=" + userName + ", email=" + email + ", password=" + password
				+ ", engineerType=" + engineerType + "]";
	}

}

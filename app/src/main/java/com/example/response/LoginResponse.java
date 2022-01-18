package com.example.response;

public class LoginResponse extends Response {

	private Integer userId;

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "LoginResponse [userId=" + userId + "]";
	}

}

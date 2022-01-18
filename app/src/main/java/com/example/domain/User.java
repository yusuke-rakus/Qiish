package com.example.domain;

public class User {

	private Integer userInfoId;

	public Integer getUserInfoId() {
		return userInfoId;
	}

	public void setUserInfoId(Integer userInfoId) {
		this.userInfoId = userInfoId;
	}

	@Override
	public String toString() {
		return "User [userInfoId=" + userInfoId + "]";
	}

}

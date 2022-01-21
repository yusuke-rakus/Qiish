package com.example.response;

import com.example.domain.UserInfo;

public class MyPageResponse extends Response{
	
	private UserInfo userInfo;

	public UserInfo getUserInfo() {
		return userInfo;
	}

	public void setUserInfo(UserInfo userInfo) {
		this.userInfo = userInfo;
	}

	@Override
	public String toString() {
		return "MyPageResponse [userInfo=" + userInfo + "]";
	}
}

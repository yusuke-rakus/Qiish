package com.example.response;

import java.util.List;

import com.example.domain.UserInfo;

public class LikedResponse extends Response {

	private List<UserInfo> likesUserList;

	public List<UserInfo> getLikesUserList() {
		return likesUserList;
	}

	public void setLikesUserList(List<UserInfo> likesUserList) {
		this.likesUserList = likesUserList;
	}

}

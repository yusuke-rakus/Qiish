package com.example.response;

import java.util.List;

import com.example.domain.UserInfo;
/**
 * フォロー、フォロワー表示用responde
 * @author matsunagadai
 *
 */
public class FollowResponse extends Response{
	
	private List<UserInfo> userList;

	public List<UserInfo> getUserList() {
		return userList;
	}

	public void setUserList(List<UserInfo> userList) {
		this.userList = userList;
	}

	@Override
	public String toString() {
		return "FollowResponse [userList=" + userList + "]";
	}
}

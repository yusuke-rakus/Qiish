package com.example.form;

/**
 * フォロー
 */

public class UserFollowForm {

	private Integer userInfoId;
	
	private Integer followUserInfoId;

	public Integer getUserInfoId() {
		return userInfoId;
	}

	public void setUserInfoId(Integer userInfoId) {
		this.userInfoId = userInfoId;
	}

	public Integer getFollowUserInfoId() {
		return followUserInfoId;
	}

	public void setFollowUserInfoId(Integer followUserInfoId) {
		this.followUserInfoId = followUserInfoId;
	}

	@Override
	public String toString() {
		return "UserFollowForm [userInfoId=" + userInfoId + ", followUserInfoId=" + followUserInfoId + "]";
	}
	
}

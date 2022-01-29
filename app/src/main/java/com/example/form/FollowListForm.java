package com.example.form;

public class FollowListForm {

	private Integer userInfoId;
	
	private Integer guestId;

	public Integer getUserInfoId() {
		return userInfoId;
	}

	public void setUserInfoId(Integer userInfoId) {
		this.userInfoId = userInfoId;
	}

	public Integer getGuestId() {
		return guestId;
	}

	public void setGuestId(Integer guestId) {
		this.guestId = guestId;
	}

	@Override
	public String toString() {
		return "FollowListForm [userInfoId=" + userInfoId + ", guestId=" + guestId + "]";
	}	
}

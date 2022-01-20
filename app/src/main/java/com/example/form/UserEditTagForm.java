package com.example.form;

public class UserEditTagForm {

	private Integer userInfoId;
	private Integer tagId;

	public Integer getUserInfoId() {
		return userInfoId;
	}

	public void setUserInfoId(Integer userInfoId) {
		this.userInfoId = userInfoId;
	}

	public Integer getTagId() {
		return tagId;
	}

	public void setTagId(Integer tagId) {
		this.tagId = tagId;
	}

	@Override
	public String toString() {
		return "UserEditTagForm [userInfoId=" + userInfoId + ", tagId=" + tagId + "]";
	}

}

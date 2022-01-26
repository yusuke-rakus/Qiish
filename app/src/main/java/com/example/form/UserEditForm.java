package com.example.form;

import java.util.List;

/**
 * ユーザー情報を編集するフォーム
 */

public class UserEditForm {

	private Integer userInfoId;
	private String userName;
	private String image;
	private String email;
	private String engineerType;
	private String password;
	private String description;
	private List<Integer> tag;

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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEngineerType() {
		return engineerType;
	}

	public void setEngineerType(String engineerType) {
		this.engineerType = engineerType;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Integer> getTag() {
		return tag;
	}

	public void setTag(List<Integer> tag) {
		this.tag = tag;
	}

	@Override
	public String toString() {
		return "UserEditForm [userInfoId=" + userInfoId + ", userName=" + userName + ", image=" + image + ", email="
				+ email + ", engineerType=" + engineerType + ", password=" + password + ", description=" + description
				+ ", tag=" + tag + "]";
	}

}

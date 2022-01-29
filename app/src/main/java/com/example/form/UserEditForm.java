package com.example.form;

import java.util.List;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

/**
 * ユーザー情報を編集するフォーム
 */

public class UserEditForm {

	private Integer userInfoId;
	@NotBlank
	@Size(min = 1, max = 18)
	private String userName;
	private String image;
	@NotBlank
	@Email
	private String email;
	@NotBlank
	private String engineerType;
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
				+ email + ", engineerType=" + engineerType + ", description=" + description + ", tag=" + tag + "]";
	}

}

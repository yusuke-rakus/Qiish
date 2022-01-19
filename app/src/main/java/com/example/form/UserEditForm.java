package com.example.form;

import java.util.List;

import com.example.domain.Tags;

/**
 * ユーザー情報を編集するフォーム
 * 
 * @author YusukeMatsumoto
 *
 */
public class UserEditForm {

	private Integer userId;
	private String userName;
	private String image;
	private String email;
	private String engineerType;
	private String password;
	private String description;
	private List<Tags> tags;

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
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

	public List<Tags> getTags() {
		return tags;
	}

	public void setTags(List<Tags> tags) {
		this.tags = tags;
	}

	@Override
	public String toString() {
		return "UserEditForm [userId=" + userId + ", userName=" + userName + ", image=" + image + ", email=" + email
				+ ", engineerType=" + engineerType + ", password=" + password + ", description=" + description
				+ ", tags=" + tags + "]";
	}

}

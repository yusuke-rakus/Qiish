package com.example.domain;

import java.util.List;

public class UserInfo {

	private Integer userId;
	private String userName;
	private String email;
	private String engineerType;
	private Integer follow;
	private Integer follower;
	private List<String> tags;
	private List<Article> articles;

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

	public Integer getFollow() {
		return follow;
	}

	public void setFollow(Integer follow) {
		this.follow = follow;
	}

	public Integer getFollower() {
		return follower;
	}

	public void setFollower(Integer follower) {
		this.follower = follower;
	}

	public List<String> getTags() {
		return tags;
	}

	public void setTags(List<String> tags) {
		this.tags = tags;
	}

	public List<Article> getArticles() {
		return articles;
	}

	public void setArticles(List<Article> articles) {
		this.articles = articles;
	}

	@Override
	public String toString() {
		return "UserInfo [userId=" + userId + ", userName=" + userName + ", email=" + email + ", engineerType="
				+ engineerType + ", follow=" + follow + ", follower=" + follower + ", tags=" + tags + ", articles="
				+ articles + "]";
	}

}

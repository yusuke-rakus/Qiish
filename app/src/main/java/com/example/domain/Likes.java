package com.example.domain;

public class Likes {

	private Integer id;
	
	private Integer userInfoId;
	
	private Integer articleId;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getUserInfoId() {
		return userInfoId;
	}

	public void setUserInfoId(Integer userInfoId) {
		this.userInfoId = userInfoId;
	}

	public Integer getArticleId() {
		return articleId;
	}

	public void setArticleId(Integer articleId) {
		this.articleId = articleId;
	}

	@Override
	public String toString() {
		return "Likes [id=" + id + ", userInfoId=" + userInfoId + ", articleId=" + articleId + "]";
	}
	
	
}

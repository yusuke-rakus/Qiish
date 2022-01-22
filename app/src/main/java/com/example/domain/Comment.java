package com.example.domain;

import java.sql.Timestamp;

public class Comment {

	private Integer id;

	private Integer articleId;

	private Integer userInfoId;

	private String comment;

	private Timestamp commentDate;

	private UserInfo userInfo;

	private Integer likesCount;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getArticleId() {
		return articleId;
	}

	public void setArticleId(Integer articleId) {
		this.articleId = articleId;
	}

	public Integer getUserInfoId() {
		return userInfoId;
	}

	public void setUserInfoId(Integer userInfoId) {
		this.userInfoId = userInfoId;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Timestamp getCommentDate() {
		return commentDate;
	}

	public void setCommentDate(Timestamp commentDate) {
		this.commentDate = commentDate;
	}

	public UserInfo getUserInfo() {
		return userInfo;
	}

	public void setUserInfo(UserInfo userInfo) {
		this.userInfo = userInfo;
	}

	public Integer getLikesCount() {
		return likesCount;
	}

	public void setLikesCount(Integer likesCount) {
		this.likesCount = likesCount;
	}

	@Override
	public String toString() {
		return "Comment [id=" + id + ", articleId=" + articleId + ", userInfoId=" + userInfoId + ", comment=" + comment
				+ ", commentDate=" + commentDate + ", userInfo=" + userInfo + ", likesCount=" + likesCount + "]";
	}

}

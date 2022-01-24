package com.example.domain;

import java.sql.Timestamp;
import java.util.List;

public class Article {

	private Integer id;
	private Integer userInfoId;
	private String title;
	private String content;
	private Timestamp postedDate;
	private List<Tag> articleTags;
	private List<UserInfo> lieksUserList;
	private Integer likesCount;
	private List<Comment> comments;

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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Timestamp getPostedDate() {
		return postedDate;
	}

	public void setPostedDate(Timestamp postedDate) {
		this.postedDate = postedDate;
	}

	public List<Tag> getArticleTags() {
		return articleTags;
	}

	public void setArticleTags(List<Tag> articleTags) {
		this.articleTags = articleTags;
	}

	public List<UserInfo> getLieksUserList() {
		return lieksUserList;
	}

	public void setLieksUserList(List<UserInfo> lieksUserList) {
		this.lieksUserList = lieksUserList;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public Integer getLikesCount() {
		return likesCount;
	}
	public void setLikesCount(Integer likesCount) {
		this.likesCount = likesCount;
	}
	
	@Override
	public String toString() {
		return "Article [id=" + id + ", userInfoId=" + userInfoId + ", title=" + title + ", content=" + content
				+ ", postedDate=" + postedDate + ", articleTags=" + articleTags + ", lieksUserList=" + lieksUserList
				+ ", likesCount=" + likesCount + ", comments=" + comments + "]";
	}

}

package com.example.domain;

import java.sql.Timestamp;
import java.util.List;

public class Article {

	private Integer id;
	private Integer userInfoId;
	private String title;
	private String content;
	private Integer likesCount;
	private Timestamp postedDate;
	private Timestamp updateDate;
	private List<Tag> articleTags;
	private List<UserInfo> lieksUserList;
	private List<Comment> comments;
	private Integer likeStatus;
	private UserInfo userInfo;
	private Integer visitedCount;

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

	public Integer getLikesCount() {
		return likesCount;
	}

	public void setLikesCount(Integer likesCount) {
		this.likesCount = likesCount;
	}

	public Timestamp getPostedDate() {
		return postedDate;
	}

	public void setPostedDate(Timestamp postedDate) {
		this.postedDate = postedDate;
	}

	public Timestamp getUpdateDate() {
		return updateDate;
	}

	public void setUpdateDate(Timestamp updateDate) {
		this.updateDate = updateDate;
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

	public Integer getLikeStatus() {
		return likeStatus;
	}

	public void setLikeStatus(Integer likeStatus) {
		this.likeStatus = likeStatus;
	}

	public UserInfo getUserInfo() {
		return userInfo;
	}

	public void setUserInfo(UserInfo userInfo) {
		this.userInfo = userInfo;
	}

	public Integer getVisitedCount() {
		return visitedCount;
	}

	public void setVisitedCount(Integer visitedCount) {
		this.visitedCount = visitedCount;
	}

	@Override
	public String toString() {
		return "Article [id=" + id + ", userInfoId=" + userInfoId + ", title=" + title + ", content=" + content
				+ ", likesCount=" + likesCount + ", postedDate=" + postedDate + ", updateDate=" + updateDate
				+ ", articleTags=" + articleTags + ", lieksUserList=" + lieksUserList + ", comments=" + comments
				+ ", likeStatus=" + likeStatus + ", userInfo=" + userInfo + ", visitedCount=" + visitedCount + "]";
	}



}
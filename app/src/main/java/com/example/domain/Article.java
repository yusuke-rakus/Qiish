package com.example.domain;

import java.sql.Timestamp;
import java.util.List;

public class Article {

	private Integer articleId;
	private Integer userInfoId;
	private String title;
	private String content;
	private Timestamp postedDate;
	private List<String> articleTags;
	
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
	public List<String> getArticleTags() {
		return articleTags;
	}
	public void setArticleTags(List<String> articleTags) {
		this.articleTags = articleTags;
	}
	@Override
	public String toString() {
		return "Article [articleId=" + articleId + ", userInfoId=" + userInfoId + ", title=" + title + ", content="
				+ content + ", postedDate=" + postedDate + ", articleTags=" + articleTags + "]";
	}



}

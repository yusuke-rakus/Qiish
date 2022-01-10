package com.example.domain;

import java.time.LocalDate;
import java.util.List;

public class Article {

	private Integer articleId;
	private String userName;
	private String title;
	private List<String> articleTags;
	private LocalDate postedDate;

	public Integer getArticleId() {
		return articleId;
	}

	public void setArticleId(Integer articleId) {
		this.articleId = articleId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<String> getArticleTags() {
		return articleTags;
	}

	public void setArticleTags(List<String> articleTags) {
		this.articleTags = articleTags;
	}

	public LocalDate getPostedDate() {
		return postedDate;
	}

	public void setPostedDate(LocalDate postedDate) {
		this.postedDate = postedDate;
	}

	@Override
	public String toString() {
		return "Article [articleId=" + articleId + ", userName=" + userName + ", title=" + title + ", articleTags="
				+ articleTags + ", postedDate=" + postedDate + "]";
	}

}

package com.example.form;

import java.util.List;

public class ArticleEditForm {

	private Integer articleId;
	
	private String title;
	
	private String content;
	
	private List<Integer> tags;

	public Integer getArticleId() {
		return articleId;
	}

	public void setArticleId(Integer articleId) {
		this.articleId = articleId;
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

	public List<Integer> getTags() {
		return tags;
	}

	public void setTags(List<Integer> tags) {
		this.tags = tags;
	}

	@Override
	public String toString() {
		return "ArticleEditForm [articleId=" + articleId + ", title=" + title + ", content=" + content + ", tags="
				+ tags + "]";
	}
	
	
}

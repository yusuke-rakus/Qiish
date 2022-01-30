package com.example.form;

import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/**
 * 記事編集フォーム
 */

public class ArticleEditForm {

	private Integer articleId;
	@NotBlank
	@Size(min = 1, max = 50)
	private String title;
	@NotBlank
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

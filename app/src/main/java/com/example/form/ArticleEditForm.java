package com.example.form;

import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * 記事編集フォーム
 */

public class ArticleEditForm {
	@NotNull
	private Integer articleId;
	@NotNull
	private Integer guestId;
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

	public Integer getGuestId() {
		return guestId;
	}

	public void setGuestId(Integer guestId) {
		this.guestId = guestId;
	}

	@Override
	public String toString() {
		return "ArticleEditForm [articleId=" + articleId + ", guestId=" + guestId + ", title=" + title + ", content="
				+ content + ", tags=" + tags + "]";
	}



}

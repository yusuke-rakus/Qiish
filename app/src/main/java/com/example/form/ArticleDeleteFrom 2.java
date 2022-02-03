package com.example.form;

import javax.validation.constraints.NotNull;

public class ArticleDeleteFrom {

	@NotNull
	private Integer articleId;
	@NotNull
	private Integer guestId;

	public Integer getArticleId() {
		return articleId;
	}

	public void setArticleId(Integer articleId) {
		this.articleId = articleId;
	}

	public Integer getGuestId() {
		return guestId;
	}

	public void setGuestId(Integer guestId) {
		this.guestId = guestId;
	}

	@Override
	public String toString() {
		return "ArticleDeleteFrom [articleId=" + articleId + ", guestId=" + guestId + "]";
	}



}

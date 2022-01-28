package com.example.form;

public class ArticleDetailForm {

	private Integer articleId;
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
		return "ArticleDetailForm [articleId=" + articleId + ", guestId=" + guestId + "]";
	}

}

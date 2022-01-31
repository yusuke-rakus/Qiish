package com.example.form;

public class ArticleIdFrom {

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
		return "ArticleIdFrom [articleId=" + articleId + ", guestId=" + guestId + "]";
	}



}

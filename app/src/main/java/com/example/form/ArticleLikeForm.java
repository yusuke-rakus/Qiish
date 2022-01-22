package com.example.form;

/**
 * 記事にLIKE
 */

public class ArticleLikeForm {

	private Integer userId;
	private Integer articleId;

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getArticleId() {
		return articleId;
	}

	public void setArticleId(Integer articleId) {
		this.articleId = articleId;
	}

	@Override
	public String toString() {
		return "ArticleLikeForm [userId=" + userId + ", articleId=" + articleId + "]";
	}

}

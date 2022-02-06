package com.example.form;

/**
 * 記事にLIKE
 */

public class ArticleLikeForm {

	private Integer userInfoId;
	private Integer articleId;

	public Integer getUserInfoId() {
		return userInfoId;
	}

	public void setUserInfoId(Integer userInfoId) {
		this.userInfoId = userInfoId;
	}

	public Integer getArticleId() {
		return articleId;
	}

	public void setArticleId(Integer articleId) {
		this.articleId = articleId;
	}

}

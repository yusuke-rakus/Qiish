package com.example.form;

/**
 * コメント投稿フォーム
 */

public class ArticleCommentForm {

	private Integer articleId;
	private Integer userInfoId;
	private String comment;

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

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	@Override
	public String toString() {
		return "ArticleCommentForm [articleId=" + articleId + ", userInfoId=" + userInfoId + ", comment=" + comment
				+ "]";
	}

}

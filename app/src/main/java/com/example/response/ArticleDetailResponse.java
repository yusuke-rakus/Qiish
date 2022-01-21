package com.example.response;

import com.example.domain.Article;
import com.example.domain.UserInfo;

public class ArticleDetailResponse extends Response {

	private Article article;
	private UserInfo postedUser;

	public Article getArticle() {
		return article;
	}

	public void setArticle(Article article) {
		this.article = article;
	}

	public UserInfo getPostedUser() {
		return postedUser;
	}

	public void setPostedUser(UserInfo postedUser) {
		this.postedUser = postedUser;
	}

	@Override
	public String toString() {
		return "PostedUserResponse [article=" + article + ", postedUser=" + postedUser + "]";
	}

}

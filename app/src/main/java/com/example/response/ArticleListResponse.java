package com.example.response;

import java.util.List;

import com.example.domain.Article;
import com.example.domain.UserInfo;

public class ArticleListResponse extends Response {

	private List<Article> articleList;

	private UserInfo userInfo;

	public List<Article> getArticleList() {
		return articleList;
	}

	public void setArticleList(List<Article> articleList) {
		this.articleList = articleList;
	}

	public UserInfo getUserInfo() {
		return userInfo;
	}

	public void setUserInfo(UserInfo userInfo) {
		this.userInfo = userInfo;
	}

}

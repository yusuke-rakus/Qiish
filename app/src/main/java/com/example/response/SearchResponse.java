package com.example.response;

import java.util.List;

import com.example.domain.Article;
import com.example.domain.UserInfo;

/**
 * 検索結果を格納
 */

public class SearchResponse extends Response {

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

	@Override
	public String toString() {
		return "SearchResponse [articleList=" + articleList + ", userInfo=" + userInfo + "]";
	}



}

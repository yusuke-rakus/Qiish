package com.example.response;

import java.util.List;

import com.example.domain.Article;

public class ArticleListResponse extends Response {

	private List<Article> articleList;

	public List<Article> getArticleList() {
		return articleList;
	}

	public void setArticleList(List<Article> articleList) {
		this.articleList = articleList;
	}

}

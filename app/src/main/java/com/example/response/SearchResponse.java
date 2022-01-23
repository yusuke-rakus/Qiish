package com.example.response;

import java.util.List;

import com.example.domain.Article;

/**
 * 検索結果を格納
 */

public class SearchResponse extends Response {

	List<Article> articleList;

	public List<Article> getArticleList() {
		return articleList;
	}

	public void setArticleList(List<Article> articleList) {
		this.articleList = articleList;
	}

	@Override
	public String toString() {
		return "SearchResponse [articleList=" + articleList + "]";
	}

}

package com.example.response;

import java.util.List;

import com.example.domain.Article;
import com.example.domain.Tag;
import com.example.domain.UserInfo;

public class TopPageResponse extends Response{
	
	private List<Article> articleList;
	
	private UserInfo userInfo;
	
	private List<Tag> tags;

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

	public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}

	@Override
	public String toString() {
		return "TopPageResponse [articleList=" + articleList + ", userInfo=" + userInfo + ", tags=" + tags + "]";
	}
	
	
}

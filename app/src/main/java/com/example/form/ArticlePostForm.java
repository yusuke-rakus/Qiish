package com.example.form;
/**
 * 記事投稿用フォーム
 */
import java.util.List;

public class ArticlePostForm {

	private Integer userInfoId;
	
	private String title;
	
	private String content;
	
	private List<Integer> tags;

	public Integer getUserInfoId() {
		return userInfoId;
	}

	public void setUserInfoId(Integer userInfoId) {
		this.userInfoId = userInfoId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public List<Integer> getTags() {
		return tags;
	}

	public void setTags(List<Integer> tags) {
		this.tags = tags;
	}

	@Override
	public String toString() {
		return "ArticlePostForm [userInfoId=" + userInfoId + ", title=" + title + ", content=" + content + ", tags="
				+ tags + "]";
	}
}

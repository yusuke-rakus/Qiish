package com.example.response;

import java.util.List;

public class KeywordRankResponse extends Response {

	private List<String> keywordList;

	public List<String> getKeywordList() {
		return keywordList;
	}

	public void setKeywordList(List<String> keywordList) {
		this.keywordList = keywordList;
	}

}

package com.example.form;

import java.util.List;

public class TopPageForm {

	private List<String> keyword;

	private Integer tagId;

	private Integer guestId;

	public List<String> getKeyword() {
		return keyword;
	}

	public void setKeyword(List<String> keyword) {
		this.keyword = keyword;
	}

	public Integer getTagId() {
		return tagId;
	}

	public void setTagId(Integer tagId) {
		this.tagId = tagId;
	}

	public Integer getGuestId() {
		return guestId;
	}

	public void setGuestId(Integer guestId) {
		this.guestId = guestId;
	}

	@Override
	public String toString() {
		return "SearchKeywordForm [keyword=" + keyword + ", tagId=" + tagId + ", guestId=" + guestId + "]";
	}

}

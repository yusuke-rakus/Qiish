package com.example.response;

import java.util.List;

import com.example.domain.Tag;

public class TagResponse extends Response{

	private List<Tag> tags;

	public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}

	@Override
	public String toString() {
		return "TagResponse [tags=" + tags + "]";
	}
}

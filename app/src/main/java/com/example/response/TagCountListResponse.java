package com.example.response;

import java.util.List;

import com.example.domain.Tag;


/**
 * タグ投稿数を集計したデータ
 * @author naramasato
 *
 */
public class TagCountListResponse extends Response{

	private List<List<Tag>> tagCountList;

	public List<List<Tag>> getTagCountList() {
		return tagCountList;
	}

	public void setTagCountList(List<List<Tag>> tagCountList) {
		this.tagCountList = tagCountList;
	}

	@Override
	public String toString() {
		return "TagResponseList [tagCountList=" + tagCountList + "]";
	}

	
}

package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Tag;

@Mapper
public interface TagMapper {

	/** タグ情報取得 */
	public List<Tag> getTags();
	
	/** タグの投稿数を集計して取得*/
	public List<Tag> getTagsCount(String value);
}

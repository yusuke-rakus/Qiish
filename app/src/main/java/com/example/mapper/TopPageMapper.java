package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Article;
import com.example.domain.Tag;
import com.example.domain.UserInfo;

@Mapper
public interface TopPageMapper {

	/** 記事一覧 */
	public List<Article> getArticleList();
	
	/** タグ一覧 */
	public List<Tag> getTags();
	
	/** ユーザー情報取得（画像のみ） */
	public UserInfo getUserInfoImage(Integer userInfoId);
	
}

package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

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

	/** タイトルからキーワード検索 */
	public List<Article> searchKeywordFromTitle(@Param("wordList") List<String> wordList);

	/** コンテンツからキーワード検索 */
	public List<Article> searchKeywordFromContent(@Param("wordList") List<String> wordList);

}

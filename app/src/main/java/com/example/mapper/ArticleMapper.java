package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.domain.Article;
import com.example.form.ArticleCommentForm;
import com.example.form.ArticleLikeForm;

@Mapper
public interface ArticleMapper {

	/** コメント */
	public void ArticleComment(ArticleCommentForm form);

	/** LIKE */
	public void ArticleLike(ArticleLikeForm form);

	/** LIKE解除 */
	public void ArticleRemoveLike(ArticleLikeForm form);

	/** 記事投稿 */
	public void ArticlePost(Article article);
	
	/** 記事投稿(タグ情報) */
	public void ArticleTagsPost(@Param("articleId") Integer articleId, @Param("tagId") List<Integer> tagId);
	
}

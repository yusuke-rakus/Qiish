package com.example.mapper;

import org.apache.ibatis.annotations.Mapper;

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

}

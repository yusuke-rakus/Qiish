package com.example.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.form.ArticleCommentForm;
@Mapper
public interface ArticleMapper {

	/** コメント */
	public void ArticleComment(ArticleCommentForm form);

}

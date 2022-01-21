package com.example.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.form.ArticleCommentForm;
import com.example.form.ArticleLikeForm;
import com.example.form.CommentLikeForm;

@Mapper
public interface ArticleMapper {

	/** コメント */
	public void articleComment(ArticleCommentForm form);

	/** コメントLIKE */
	public void commentLike(CommentLikeForm form);

	/** コメントLIKE解除 */
	public void removeCommentLike(CommentLikeForm form);

	/** LIKE */
	public void articleLike(ArticleLikeForm form);

	/** LIKE解除 */
	public void articleRemoveLike(ArticleLikeForm form);


}

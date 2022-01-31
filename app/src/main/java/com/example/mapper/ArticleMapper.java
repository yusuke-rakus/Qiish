package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.domain.Article;
import com.example.domain.Comment;
import com.example.form.ArticleCommentForm;
import com.example.form.ArticleEditForm;
import com.example.form.ArticleLikeForm;
import com.example.form.CommentLikeForm;

@Mapper
public interface ArticleMapper {

	/** コメント */
	public void articleComment(ArticleCommentForm form);

	/** コメントリスト取得 */
	public List<Comment> getComment(@Param("articleId") Integer articleId, @Param("guestId") Integer guestId);

	/** コメントLIKE */
	public void commentLike(CommentLikeForm form);

	/** コメントLIKE解除 */
	public void removeCommentLike(CommentLikeForm form);

	/** LIKE */
	public void articleLike(ArticleLikeForm form);

	/** LIKE解除 */
	public void articleRemoveLike(ArticleLikeForm form);

	/** 記事投稿 */
	public void articlePost(Article article);

	/** 記事投稿(タグ情報) */
	public void articleTagsPost(@Param("articleId") Integer articleId, @Param("tagId") List<Integer> tagId);

	/** 記事削除 */
	public void articleDelete(Integer articleId);

	/** 記事更新 */
	public void articleEdit(ArticleEditForm form);

	/** 記事更新（タグ情報削除） */
	public void articleTagsDelete(Integer articleId);

	/** 記事詳細 */
	public Article articleDetail(@Param("articleId") Integer articleId, @Param("guestId") Integer guestId);

	/** 訪問回数更新 */
	public void updateVisitedCount(Integer articleId);

}

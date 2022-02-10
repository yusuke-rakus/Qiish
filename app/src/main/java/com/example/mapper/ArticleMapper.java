package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.domain.Article;
import com.example.domain.Comment;
import com.example.domain.UserInfo;
import com.example.form.ArticleCommentForm;
import com.example.form.ArticleEditForm;
import com.example.form.ArticleDeleteFrom;
import com.example.form.ArticleLikeForm;
import com.example.form.CommentDeleteForm;
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

	public void commentDelete(CommentDeleteForm form);

	/** LIKE */
	public void articleLike(ArticleLikeForm form);

	/** LIKE解除 */
	public void articleRemoveLike(ArticleLikeForm form);

	/** 記事投稿 */
	public void articlePost(Article article);

	/** 記事投稿(タグ情報) */
	public void articleTagsPost(@Param("articleId") Integer articleId, @Param("tagId") List<Integer> tagId);

	/** 記事削除 */
	public void articleDelete(ArticleDeleteFrom form);

	/** 記事更新 */
	public void articleEdit(ArticleEditForm form);

	/** 記事更新（タグ情報削除） */
	public void articleTagsDelete(Integer articleId);

	/** 記事詳細 */
	public Article articleDetail(@Param("articleId") Integer articleId, @Param("guestId") Integer guestId);

	/** いいねユーザーリスト */
	public List<UserInfo> likesUserList(@Param("articleId") Integer articleId, @Param("userInfoId") Integer userInfoId);

	/** コメントいいねユーザーリスト */
	public List<UserInfo> commentLikesUserList(@Param("commentId") Integer commentId,
			@Param("userInfoId") Integer userInfoId);

	/** 訪問回数更新 */
	public void updateVisitedCount(Integer articleId);

	/** 投稿記事一覧 */
	public List<Article> postedArticles(@Param("userInfoId") Integer userInfoId, @Param("guestId") Integer guestId);

	/** Like記事一覧取得 */
	public List<Article> likedArticles(@Param("userInfoId") Integer userInfoId, @Param("guestId") Integer guestId);

	/** 保存記事一覧 */
	public List<Article> savedArticles(Integer guestId);
	
	/** 投稿者確認（記事投稿者と一致を確認） */
	public Article checkGuest(@Param("articleId") Integer articleId, @Param("guestId") Integer guestId);

}

package com.example.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.common.Status;
import com.example.domain.Article;
import com.example.form.ArticleCommentForm;
import com.example.form.ArticleEditForm;
import com.example.form.ArticleLikeForm;

import com.example.form.ArticlePostForm;

import com.example.form.CommentLikeForm;

import com.example.mapper.ArticleMapper;
import com.example.response.ArticleDetailResponse;
import com.example.response.Response;

@Service
public class ArticleService {

	@Autowired
	private ArticleMapper articleMapper;

	/** コメント */
	public Response articleComment(ArticleCommentForm form) {
		Response res = new Response();
		try {
			articleMapper.articleComment(form);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** コメントLIKE */
	public Response commentLike(CommentLikeForm form) {
		Response res = new Response();
		try {
			articleMapper.commentLike(form);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** コメントLIKE解除 */
	public Response removeCommentLike(CommentLikeForm form) {
		Response res = new Response();
		try {
			articleMapper.removeCommentLike(form);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** LIKE */
	public Response articleLike(ArticleLikeForm form) {
		Response res = new Response();
		try {
			articleMapper.articleLike(form);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** LIKE解除 */
	public Response articleRemoveLike(ArticleLikeForm form) {
		Response res = new Response();
		try {
			articleMapper.articleRemoveLike(form);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** 記事投稿 */
	public Response ArticlePost(ArticlePostForm form) {
		Response res = new Response();
		Article article = new Article();
		BeanUtils.copyProperties(form, article);
		try {
			articleMapper.articlePost(article);
			articleMapper.articleTagsPost(article.getId(), form.getTags());
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** 記事削除 */
	public Response articleDelete(Integer articleId) {
		Response res = new Response();
		try {
			articleMapper.articleDelete(articleId);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** 記事更新 */
	public Response articleEdit(ArticleEditForm form) {
		Response res = new Response();
		try {
			articleMapper.articleEdit(form);
			articleMapper.articleTagsDelete(form.getArticleId());
			articleMapper.articleTagsPost(form.getArticleId(), form.getTags());
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** 記事詳細 */
	public ArticleDetailResponse articleDetail(Integer articleId) {
		ArticleDetailResponse res = new ArticleDetailResponse();
		res.setArticle(articleMapper.articleDetail(articleId));
		return res;
	}

}

package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.form.ArticleCommentForm;
import com.example.form.ArticleEditForm;
import com.example.form.ArticleIdFrom;
import com.example.form.ArticleLikeForm;
import com.example.form.ArticlePostForm;
import com.example.form.CommentLikeForm;
import com.example.response.ArticleDetailResponse;
import com.example.response.Response;
import com.example.service.ArticleService;

@RestController
@RequestMapping("/article")
public class ArticleController {

	@Autowired
	private ArticleService articleService;

	/** コメント投稿 */
	@PostMapping("/comment")
	public Response articleComment(@RequestBody ArticleCommentForm form) {
		return articleService.articleComment(form);
	}

	/** コメントにいいね */
	@PostMapping("/commentLike")
	public Response commentLike(@RequestBody CommentLikeForm form) {
		return articleService.commentLike(form);
	}

	/** コメントいいね解除 */
	@PostMapping("/removeCommentLike")
	public Response removeCommentLike(@RequestBody CommentLikeForm form) {
		return articleService.removeCommentLike(form);
	}

	/** 記事お気に入り */
	@PostMapping("/like")
	public Response articleLike(@RequestBody ArticleLikeForm form) {
		return articleService.articleLike(form);
	}

	/** 記事お気に入り解除 */
	@PostMapping("/removeLike")
	public Response articleRemoveLike(@RequestBody ArticleLikeForm form) {
		return articleService.articleRemoveLike(form);
	}

	/** 記事投稿 */
	@PostMapping("/add")
	public Response ArticlePost(@RequestBody ArticlePostForm form) {
		return articleService.ArticlePost(form);
	}

	/** 記事情報取得 */
	@GetMapping("")
	public ArticleDetailResponse ArticleDetail(Integer articleId) {
		return articleService.articleDetail(articleId);
	}

	/** 記事削除 */
	@PostMapping("/delete")
	public Response ArticleDelete(@RequestBody ArticleIdFrom form) {
		return articleService.articleDelete(form.getArticleId());
	}

	/** 記事編集 */
	@PostMapping("/edit")
	public Response ArticleEdit(@RequestBody ArticleEditForm form) {
		return articleService.articleEdit(form);
	}

}

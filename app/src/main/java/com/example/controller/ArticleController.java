package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.form.ArticleCommentForm;
import com.example.form.ArticleDetailForm;
import com.example.form.ArticleEditForm;
import com.example.form.ArticleDeleteFrom;
import com.example.form.ArticleLikeForm;
import com.example.form.ArticlePostForm;
import com.example.form.CommentLikeForm;
import com.example.response.ArticleDetailResponse;
import com.example.response.CommentResponse;
import com.example.response.Response;
import com.example.service.ArticleService;

@RestController
@RequestMapping("/article")
public class ArticleController {

	@Autowired
	private ArticleService articleService;

	/** コメント投稿 */
	@PostMapping("/comment")
	public Response articleComment(@RequestBody @Validated ArticleCommentForm form, BindingResult result) {
		if (result.hasErrors()) {
			return new Response(result.hasErrors());
		}
		return articleService.articleComment(form);
	}
	
	/** コメント取得 */
	@PostMapping("/getComment")
	public CommentResponse getComment(@RequestBody ArticleDetailForm form) {
		return articleService.getComment(form);
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
	public Response ArticlePost(@RequestBody @Validated ArticlePostForm form, BindingResult result) {
		if (result.hasErrors()) {
			return new Response(result.hasErrors());
		}
		return articleService.ArticlePost(form);
	}

	/** 記事情報取得 */
	@PostMapping("")
	public ArticleDetailResponse ArticleDetail(@RequestBody ArticleDetailForm form) {
		return articleService.articleDetail(form);
	}

	/** 記事削除 */
	@PostMapping("/delete")
	public Response ArticleDelete(@RequestBody ArticleDeleteFrom form) {
		return articleService.articleDelete(form);
	}

	/** 記事編集 */
	@PostMapping("/edit")
	public Response ArticleEdit(@RequestBody @Validated ArticleEditForm form, BindingResult result) {
		if (result.hasErrors()) {
			return new Response(result.hasErrors());
		}
		return articleService.articleEdit(form);
	}

}

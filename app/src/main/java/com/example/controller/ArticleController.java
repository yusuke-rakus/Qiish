package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.form.ArticleCommentForm;
import com.example.form.ArticleEditForm;
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
	public Response articleComment(ArticleCommentForm form) { // @RequestBody
		return articleService.articleComment(form);
	}

	/** コメントにいいね */
	@PostMapping("/commentLike")
	public Response commentLike(CommentLikeForm form) { // @RequestBody
		return articleService.commentLike(form);
	}

	/** コメントいいね解除 */
	@PostMapping("/removeCommentLike")
	public Response removeCommentLike(CommentLikeForm form) { // @RequestBody
		return articleService.removeCommentLike(form);
	}

	/** 記事お気に入り */
	@PostMapping("/like")
	public Response articleLike(ArticleLikeForm form) { // @RequestBody
		return articleService.articleLike(form);
	}

	/** 記事お気に入り解除 */
	@PostMapping("/removeLike")
	public Response articleRemoveLike(ArticleLikeForm form) { // @RequestBody
		return articleService.articleRemoveLike(form);
	}

	/** 記事投稿 */
	@PostMapping("/add")
	public Response ArticlePost(ArticlePostForm form) { // @RequestBody
		return articleService.ArticlePost(form);
	}

	/** 記事情報取得 */
	@GetMapping("")
	public ArticleDetailResponse ArticleDetail(Integer articleId) { // @RequestBody
		return articleService.articleDetail(articleId);
	}

	/** 記事削除 */
	@PostMapping("/delete")
	public Response ArticleDelete(Integer articleId) { // @RequestBody
		return articleService.articleDelete(articleId);
	}

	/** 記事編集 */
	@PostMapping("/edit")
	public Response ArticleEdit(ArticleEditForm form) { // @RequestBody
		return articleService.articleEdit(form);
	}

}

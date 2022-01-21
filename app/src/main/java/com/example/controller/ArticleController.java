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

	@PostMapping("/comment")
	public Response articleComment(ArticleCommentForm form) { // @RequestBody
		return articleService.articleComment(form);
	}

	@PostMapping("/commentLike")
	public Response commentLike(CommentLikeForm form) { // @RequestBody
		return articleService.commentLike(form);
	}

	@PostMapping("/removeCommentLike")
	public Response removeCommentLike(CommentLikeForm form) { // @RequestBody
		return articleService.removeCommentLike(form);
	}

	@PostMapping("/like")
	public Response articleLike(ArticleLikeForm form) { // @RequestBody
		return articleService.articleLike(form);
	}

	@PostMapping("/removeLike")
	public Response articleRemoveLike(ArticleLikeForm form) { // @RequestBody
		return articleService.articleRemoveLike(form);
	}

	@PostMapping("/add")
	public Response ArticlePost(ArticlePostForm form) {
		return articleService.ArticlePost(form);
	}


	@GetMapping("/articleId")
	public ArticleDetailResponse ArticleDetail(Integer articleId) {
		return articleService.ArticleDetail(articleId);
	}


	@PostMapping("/delete")
	public Response ArticleDelete(Integer articleId) {
		return articleService.articleDelete(articleId);
	}
	
	@PostMapping("/edit")
	public Response ArticleEdit(ArticleEditForm form) {
		return articleService.articleEdit(form);
	}

}

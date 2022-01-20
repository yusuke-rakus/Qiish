package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.form.ArticleCommentForm;
import com.example.form.ArticleLikeForm;
import com.example.response.Response;
import com.example.service.ArticleService;

@RestController
@RequestMapping("/article")
public class ArticleController {

	@Autowired
	private ArticleService articleService;

	@PostMapping("/comment")
	public Response ArticleComment(ArticleCommentForm form) { // @RequestBody
		return articleService.ArticleComment(form);
	}

	@PostMapping("/like")
	public Response ArticleLike(ArticleLikeForm form) {
		return articleService.ArticleLike(form);
	}

	@PostMapping("/removeLike")
	public Response ArticleRemoveLike(ArticleLikeForm form) {
		return articleService.ArticleRemoveLike(form);
	}

}

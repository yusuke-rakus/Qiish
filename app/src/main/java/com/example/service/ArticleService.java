package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.common.Status;
import com.example.form.ArticleCommentForm;
import com.example.form.ArticleLikeForm;
import com.example.mapper.ArticleMapper;
import com.example.response.Response;

@Service
public class ArticleService {

	@Autowired
	private ArticleMapper articleMapper;

	/** コメント */
	public Response ArticleComment(ArticleCommentForm form) {
		Response res = new Response();
		try {
			articleMapper.ArticleComment(form);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** LIKE */
	public Response ArticleLike(ArticleLikeForm form) {
		Response res = new Response();
		try {
			articleMapper.ArticleLike(form);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** LIKE解除 */
	public Response ArticleRemoveLike(ArticleLikeForm form) {
		Response res = new Response();
		try {
			articleMapper.ArticleRemoveLike(form);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;

	}

}

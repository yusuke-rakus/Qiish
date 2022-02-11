package com.example.service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import com.example.common.Status;
import com.example.domain.Article;
import com.example.domain.Comment;
import com.example.domain.UserInfo;
import com.example.form.ArticleCommentForm;
import com.example.form.ArticleDeleteFrom;
import com.example.form.ArticleDetailForm;
import com.example.form.ArticleEditForm;
import com.example.form.ArticleLikeForm;
import com.example.form.ArticlePostForm;
import com.example.form.CommentDeleteForm;
import com.example.form.CommentLikeForm;
import com.example.form.GuestArticlesForm;
import com.example.mapper.ArticleMapper;
import com.example.mapper.MyPageMapper;
import com.example.mapper.UserMapper;
import com.example.response.ArticleDetailResponse;
import com.example.response.ArticleListResponse;
import com.example.response.CommentResponse;
import com.example.response.LikedResponse;
import com.example.response.Response;

@Service
@Transactional
public class ArticleService {

	@Autowired
	private ArticleMapper articleMapper;

	@Autowired
	private MyPageMapper myPageMapper;

	@Autowired
	private UserMapper userMapper;

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

	/** コメント削除 */
	public Response commentDelete(CommentDeleteForm form) {
		Response res = new Response();
		try {
			articleMapper.commentDelete(form);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** コメントリスト取得 */
	public CommentResponse getComment(ArticleDetailForm form) {
		CommentResponse res = new CommentResponse();
		try {
			List<Comment> commentList = articleMapper.getComment(form.getArticleId(), form.getGuestId());
			res.setCommentList(commentList);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** コメントLIKE */
	public LikedResponse commentLike(CommentLikeForm form) {
		LikedResponse res = new LikedResponse();
		try {
			articleMapper.commentLike(form);
			res.setLikesUserList(articleMapper.commentLikesUserList(form.getCommentId(), form.getUserInfoId()));
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** コメントLIKE解除 */
	public LikedResponse removeCommentLike(CommentLikeForm form) {
		LikedResponse res = new LikedResponse();
		try {
			articleMapper.removeCommentLike(form);
			res.setLikesUserList(articleMapper.commentLikesUserList(form.getCommentId(), form.getUserInfoId()));
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** LIKE */
	public LikedResponse articleLike(ArticleLikeForm form) {
		LikedResponse res = new LikedResponse();
		try {
			articleMapper.articleLike(form);
			res.setLikesUserList(articleMapper.likesUserList(form.getArticleId(), form.getUserInfoId()));
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** LIKE解除 */
	public LikedResponse articleRemoveLike(ArticleLikeForm form) {
		LikedResponse res = new LikedResponse();
		try {
			articleMapper.articleRemoveLike(form);
			res.setLikesUserList(articleMapper.likesUserList(form.getArticleId(), form.getUserInfoId()));
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
			if (Objects.isNull(form.getArticleId())) {
				// 新規投稿
				article.setArticleStatus(true);
				articleMapper.articlePost(article);
				if (!CollectionUtils.isEmpty(form.getTags())) {
					articleMapper.articleTagsPost(article.getId(), form.getTags());
				}
			} else {
				// 保存済み記事の投稿
				article.setArticleStatus(true);
				article.setId(form.getArticleId());
				article.setPostedDate(new Timestamp(System.currentTimeMillis()));
				articleMapper.articleUpdate(article);
				articleMapper.articleTagsDelete(form.getArticleId());
				if (!CollectionUtils.isEmpty(form.getTags())) {
					articleMapper.articleTagsPost(article.getId(), form.getTags());
				}
			}
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
			e.printStackTrace();
		}
		return res;
	}

	/** 記事保存 */
	public Response ArticleSave(ArticlePostForm form) {
		Response res = new Response();
		Article article = new Article();
		BeanUtils.copyProperties(form, article);
		try {
			if (Objects.isNull(form.getArticleId())) {
				// 新規記事の保存
				article.setArticleStatus(false);
				articleMapper.articlePost(article);
				if (!CollectionUtils.isEmpty(form.getTags())) {
					articleMapper.articleTagsPost(article.getId(), form.getTags());
				}
			} else {
				// 保存済み記事を保存
				article.setArticleStatus(false);
				article.setId(form.getArticleId());
				article.setPostedDate(new Timestamp(System.currentTimeMillis()));
				articleMapper.articleUpdate(article);
				articleMapper.articleTagsDelete(form.getArticleId());
				if (!CollectionUtils.isEmpty(form.getTags())) {
					articleMapper.articleTagsPost(article.getId(), form.getTags());
				}
			}
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** 記事削除 */
	public Response articleDelete(ArticleDeleteFrom form) {
		Response res = new Response();
		try {
			articleMapper.articleDelete(form);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** 記事更新 */
	public Response articleEdit(ArticleEditForm form) {
		Response res = new Response();
		try {
			Article article = articleMapper.checkGuest(form.getArticleId(), form.getGuestId());
			// 暫定でちょっとカッコ悪い実装（投稿者と編集者の確認）
			if (Objects.isNull(article)) {
				res.setStatus(Status.ERROR.getStatus());
				return res;
			}
			articleMapper.articleEdit(form);
			articleMapper.articleTagsDelete(form.getArticleId());
			if (!CollectionUtils.isEmpty(form.getTags())) {
				articleMapper.articleTagsPost(form.getArticleId(), form.getTags());
			}
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** 記事詳細 */
	public ArticleDetailResponse articleDetail(ArticleDetailForm form) {
		ArticleDetailResponse res = new ArticleDetailResponse();
		try {
			Article article = articleMapper.articleDetail(form.getArticleId(), form.getGuestId());
			if (Objects.isNull(article)) {
				throw new NullPointerException();
			}
			res.setArticle(article);
			if (form.getArticleId() != form.getGuestId()) {
				articleMapper.updateVisitedCount(form.getArticleId());
			}
			UserInfo postedUser = userMapper.getPostedUser(form.getArticleId(), form.getGuestId());
			res.setPostedUser(postedUser);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** 投稿記事一覧 */
	public ArticleListResponse postedArticles(GuestArticlesForm form) {
		ArticleListResponse res = new ArticleListResponse();
		try {
			res.setArticleList(articleMapper.postedArticles(form.getUserInfoId(), form.getGuestId()));
			res.setUserInfo(myPageMapper.myPage(form.getUserInfoId(), form.getGuestId()));
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** Like記事一覧取得 */
	public ArticleListResponse likedArticles(GuestArticlesForm form) {
		ArticleListResponse res = new ArticleListResponse();
		try {
			res.setArticleList(articleMapper.likedArticles(form.getUserInfoId(), form.getGuestId()));
			res.setUserInfo(myPageMapper.myPage(form.getUserInfoId(), form.getGuestId()));
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** 保存記事一覧 */
	public ArticleListResponse savedArticles(GuestArticlesForm form) {
		ArticleListResponse res = new ArticleListResponse();
		try {
			res.setArticleList(articleMapper.savedArticles(form.getGuestId()));
			res.setUserInfo(myPageMapper.myPage(form.getGuestId(), null));
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

}

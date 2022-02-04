package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.common.Status;
import com.example.domain.Article;
import com.example.form.TopPageForm;
import com.example.mapper.TopPageMapper;
import com.example.response.SearchResponse;
import com.example.response.TopPageResponse;

@Service
@Transactional
public class TopPageService {

	@Autowired
	private TopPageMapper topPageMapper;

	/** 記事一覧取得 */
	public TopPageResponse topPage(TopPageForm form) {
		TopPageResponse res = new TopPageResponse();
		try {
			if (form.getGuestId() != null) {
				res.setUserInfo(topPageMapper.getUserInfoImage(form.getGuestId()));
			}
			res.setArticleList(topPageMapper.getArticleList(form.getGuestId()));
			res.setTags(topPageMapper.getTags());
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** キーワード検索 */
	public SearchResponse searchKeyword(TopPageForm form) {
		SearchResponse res = new SearchResponse();
		try {
			List<Article> articleList = topPageMapper.searchKeywordFromTitle(form.getKeyword(), form.getGuestId());
			if (articleList.isEmpty()) {
				throw new NullPointerException();
			}
			if (form.getGuestId() != null) {
				res.setUserInfo(topPageMapper.getUserInfoImage(form.getGuestId()));
			}
			res.setArticleList(articleList);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** タグ検索 */
	public SearchResponse searchTagId(TopPageForm form) {
		SearchResponse res = new SearchResponse();
		try {
			List<Article> articleList = topPageMapper.searchWidhTagId(form.getTagId(), form.getGuestId());
			if (articleList.isEmpty()) {
				throw new NullPointerException();
			}
			if (form.getGuestId() != null) {
				res.setUserInfo(topPageMapper.getUserInfoImage(form.getGuestId()));
			}
			res.setArticleList(articleList);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}
}

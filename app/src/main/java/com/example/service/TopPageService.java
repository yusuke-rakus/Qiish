package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.common.Status;
import com.example.domain.Article;
import com.example.mapper.TopPageMapper;
import com.example.response.SearchResponse;
import com.example.response.TopPageResponse;

@Service
@Transactional
public class TopPageService {

	@Autowired
	private TopPageMapper topPageMapper;

	/** 記事一覧取得 */
	public TopPageResponse topPage(Integer userInfoId) {
		TopPageResponse res = new TopPageResponse();
		try {
			if (userInfoId != null) {
				res.setUserInfo(topPageMapper.getUserInfoImage(userInfoId));
			}
			
			// 引数にguestId(ログインしていない、つまりCookieがnullの状態の場合likeStatusはnullで返却される)
			res.setArticleList(topPageMapper.getArticleList(1));
			res.setTags(topPageMapper.getTags());
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
			e.printStackTrace();
		}
		return res;
	}

	/** キーワード検索 */
	public SearchResponse searchKeyword(List<String> keywordList) {
		SearchResponse res = new SearchResponse();
		try {
			
			// 第２引数にguestId(ログインしていない、つまりCookieがnullの状態の場合likeStatusはnullで返却される)
			List<Article> articleList = topPageMapper.searchKeywordFromTitle(keywordList, null);
			res.setArticleList(articleList);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** タグ検索 */
	public SearchResponse searchTagId(Integer tagId) {
		SearchResponse res = new SearchResponse();
		try {
			// 第２引数にguestId(ログインしていない、つまりCookieがnullの状態の場合likeStatusはnullで返却される)
			List<Article> articleList = topPageMapper.searchWidhTagId(tagId, null);
			res.setArticleList(articleList);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
			e.printStackTrace();
		}
		return res;
	}
}

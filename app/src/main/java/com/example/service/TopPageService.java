package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.common.Status;
import com.example.domain.Article;
import com.example.mapper.TopPageMapper;
import com.example.response.SearchResponse;
import com.example.response.TopPageResponse;

@Service
public class TopPageService {

	@Autowired
	private TopPageMapper topPageMapper;

	public TopPageResponse topPage(Integer userInfoId) {
		TopPageResponse res = new TopPageResponse();
		try {
			if (userInfoId != null) {
				res.setUserInfo(topPageMapper.getUserInfoImage(userInfoId));
			}
			// 記事情報取得（いいね数以外）
			List<Article> articleList = topPageMapper.getArticleList();
			// 記事情報取得（いいね数）
			List<Integer> likesCount = topPageMapper.getArticleLikes();
			for (int i = 0; i < articleList.size(); i++) {
				articleList.get(i).setLikesCount(likesCount.get(i));
			}
			res.setArticleList(articleList);
			res.setTags(topPageMapper.getTags());
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** キーワード検索 */
	public SearchResponse searchKeyword(List<String> keywordList) {
		SearchResponse res = new SearchResponse();
		try {
			List<Article> articleList = topPageMapper.searchKeyword(keywordList);
			res.setArticleList(articleList);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
			e.printStackTrace();
		}
		return res;
	}
}

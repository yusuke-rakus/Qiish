package com.example.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

	/** 記事一覧取得 */
	public TopPageResponse topPage(Integer userInfoId) {
		TopPageResponse res = new TopPageResponse();
		try {
			if (userInfoId != null) {
				res.setUserInfo(topPageMapper.getUserInfoImage(userInfoId));
			}
			res.setArticleList(topPageMapper.getArticleList());
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
//			List<Article> articleList = Stream
//					.concat(topPageMapper.searchKeywordFromTitle(keywordList).stream(),
//							topPageMapper.searchKeywordFromContent(keywordList).stream())
//					.distinct().collect(Collectors.toList());
//			System.out.println(articleList);
			List<Article> articleList = topPageMapper.searchKeywordFromTitle(keywordList);
			res.setArticleList(articleList);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
			e.printStackTrace();
		}
		return res;
	}
}

package com.example.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.response.SearchResponse;
import com.example.response.TopPageResponse;
import com.example.service.TopPageService;

@RestController
@RequestMapping("")
public class TopPageController {
	@Autowired
	private TopPageService topPageService;
	
	/** 記事一覧取得 */
	@GetMapping("")
	public TopPageResponse topPage(Integer userInfoId) {
		return topPageService.topPage(userInfoId);
	}

	/** キーワード検索 */
	@GetMapping("/search")
	public SearchResponse searchKeyword(String keyword) {
		List<String> keywordList = Arrays.asList(keyword.split(" "));
		return topPageService.searchKeyword(keywordList);
	}
}

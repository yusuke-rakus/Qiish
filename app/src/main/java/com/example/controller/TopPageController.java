package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.form.TopPageForm;
import com.example.response.SearchResponse;
import com.example.response.TopPageResponse;
import com.example.service.TopPageService;

@RestController
@RequestMapping("")
public class TopPageController {
	@Autowired
	private TopPageService topPageService;

	/** 記事一覧取得 */
	@PostMapping("")
	public TopPageResponse topPage(@RequestBody TopPageForm form) {
		return topPageService.topPage(form);
	}

	/** キーワード検索 */
	@PostMapping("/search")
	public SearchResponse searchKeyword(@RequestBody TopPageForm form) {
		return topPageService.searchKeyword(form);
	}

	/** タグ検索 */
	@PostMapping("/searchTag")
	public SearchResponse searchTag(@RequestBody TopPageForm form) {
		return topPageService.searchTagId(form);
	}
}

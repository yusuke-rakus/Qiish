package com.example.controller;

import java.time.LocalDate;
import java.util.Arrays;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.Article;
import com.example.domain.UserInfo;
import com.example.form.LoginForm;

@RestController
@RequestMapping("/user")
public class SampleController {

	@PostMapping("/login")
	public UserInfo login(@RequestBody LoginForm form) {
		System.out.println(form);

		UserInfo userInfo = new UserInfo();
		LocalDate date = LocalDate.now();
		Article article = new Article();
		article.setArticleId(1);
		article.setArticleTags(Arrays.asList("Docker","springboot"));
		article.setPostedDate(date);
		article.setTitle("Docker+springbootで開発環境を整える");
		article.setUserName("Dockerマン");
		userInfo.setUserId(1);
		userInfo.setUserName("Yusuke");
		userInfo.setEmail("sample@sample.com");
		userInfo.setEngineerType("Java");
		userInfo.setFollow(4);
		userInfo.setFollower(2);
		userInfo.setTags(Arrays.asList("java", "python"));
		userInfo.setArticles(Arrays.asList(article));
		System.out.println(userInfo);
		return userInfo;
	}

}

package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.common.Status;
import com.example.mapper.TopPageMapper;
import com.example.response.TopPageResponse;

@Service
public class TopPageService {

	@Autowired
	private TopPageMapper topPageMapper;
	

	public TopPageResponse topPage(Integer userInfoId) {
		TopPageResponse res = new TopPageResponse();
		try {
			if(userInfoId != null) {
				res.setUserInfo(topPageMapper.getUserInfoImage(userInfoId));
			}
			res.setArticleList(topPageMapper.getArticleList());
			res.setTags(topPageMapper.getTags());
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}
}

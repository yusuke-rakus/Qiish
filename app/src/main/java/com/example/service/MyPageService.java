package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.common.Status;
import com.example.domain.UserInfo;
import com.example.mapper.MyPageMapper;
import com.example.response.MyPageResponse;

@Service
public class MyPageService {
	
	@Autowired
	private MyPageMapper myPageMapper;
	
	public MyPageResponse myPage(Integer userInfoId) {
		MyPageResponse res = new MyPageResponse();
		try {
			//タグ情報以外を取得
			UserInfo userInfo = myPageMapper.myPage(userInfoId);
			//タグ情報を取得
			userInfo.setTags(myPageMapper.getTagInfo(userInfoId));
			res.setUserInfo(userInfo);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;

	}

}

package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.common.Status;
import com.example.mapper.MyPageMapper;
import com.example.response.MyPageResponse;

@Service
@Transactional
public class MyPageService {
	
	@Autowired
	private MyPageMapper myPageMapper;
	
	public MyPageResponse myPage(Integer userInfoId) {
		MyPageResponse res = new MyPageResponse();
		try {
			res.setUserInfo(myPageMapper.myPage(userInfoId));
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;

	}

}

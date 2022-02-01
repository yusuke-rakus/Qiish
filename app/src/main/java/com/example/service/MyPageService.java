package com.example.service;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.common.Status;
import com.example.domain.UserInfo;
import com.example.form.UserPageForm;
import com.example.mapper.MyPageMapper;
import com.example.response.MyPageResponse;

@Service
@Transactional
public class MyPageService {

	@Autowired
	private MyPageMapper myPageMapper;

	public MyPageResponse myPage(UserPageForm form) {
		MyPageResponse res = new MyPageResponse();
		try {
			UserInfo user = myPageMapper.myPage(form);
			if (Objects.isNull(user)) {
				throw new NullPointerException();
			}
			res.setUserInfo(user);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;

	}

}

package com.example.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.example.common.Status;
import com.example.form.LoginForm;
import com.example.form.UserEditForm;
import com.example.form.UserEditTagForm;
import com.example.form.UserFollowForm;
import com.example.form.UserRegisterForm;
import com.example.mapper.UserMapper;
import com.example.response.LoginResponse;
import com.example.response.Response;

/**
 * ユーザー系処理を行うサービス
 */
@Service
public class UserService {

	@Autowired
	private UserMapper userMapper;

	/** ログイン処理 */
	public LoginResponse userLogin(LoginForm form) {
		Integer userInfoId = null;
		LoginResponse res = new LoginResponse();
		try {
			userInfoId = userMapper.userLogin(form).getUserInfoId();
		} catch (NullPointerException e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		res.setUserId(userInfoId);
		return res;
	}

	/** ユーザー登録 */
	public Response userRegister(UserRegisterForm form) {
		Response res = new Response();
		try {
			// user_info へ insert
			Integer userInfoId = userMapper.userInfoRegister(form);
			form.setUserInfoId(userInfoId);
			System.out.println(userInfoId);
			// user へ insert
			userMapper.userRegister(form);
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** ユーザー編集 */
	public Response userEdit(UserEditForm form) {
		Response res = new Response();
		try {
			if (!CollectionUtils.isEmpty(form.getTag())) {
				List<UserEditTagForm> tags = new ArrayList<>();
				UserEditTagForm tag = new UserEditTagForm();
				for (Integer tagId : form.getTag()) {
					tag.setUserInfoId(form.getUserId());
					tag.setTagId(tagId);
					tags.add(tag);
				}
				userMapper.userInfoTagsEdit(tags);
			}
			userMapper.userInfoEdit(form);
			userMapper.userEdit(form);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
			e.printStackTrace();
		}
		return res;
	}
	
	/** フォロー */
	public Response userFollow(UserFollowForm form) {
		Response res = new Response();
		try {
			userMapper.userFollow(form);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}
	
	/** フォロー解除 */
	public Response userRemove(UserFollowForm form) {
		Response res = new Response();
		try {
			userMapper.userRemove(form);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

}

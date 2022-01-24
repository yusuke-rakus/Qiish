package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.example.common.Status;
import com.example.domain.UserInfo;
import com.example.form.LoginForm;
import com.example.form.UserEditForm;
import com.example.form.UserFollowForm;
import com.example.form.UserRegisterForm;
import com.example.mapper.UserMapper;
import com.example.response.FollowResponse;
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
			userMapper.userInfoRegister(form);
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
			userMapper.userInfoEdit(form);
			userMapper.userEdit(form);
			if (!CollectionUtils.isEmpty(form.getTag())) {
				userMapper.deleteTags(form.getUserId());
				userMapper.userInfoTagsEdit(form.getUserId(), form.getTag());
			} else {
				userMapper.deleteTags(form.getUserId());
			}
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

	/** フォロー一覧表示 */
	public FollowResponse followList(Integer userInfoId) {
		FollowResponse res = new FollowResponse();
		try {
			List<UserInfo> followList = userMapper.followList(userInfoId);
			res.setUserList(followList);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/** フォロワー一覧表示 */
	public FollowResponse followerList(Integer userInfoId) {
		FollowResponse res = new FollowResponse();
		try {
			List<UserInfo> followerList = userMapper.followerList(userInfoId);
			res.setUserList(followerList);
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}
}

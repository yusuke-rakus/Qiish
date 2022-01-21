package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.form.LoginForm;
import com.example.form.UserEditForm;
import com.example.form.UserFollowForm;
import com.example.form.UserRegisterForm;
import com.example.response.FollowResponse;
import com.example.response.LoginResponse;
import com.example.response.Response;
import com.example.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	// ログイン
	@PostMapping("/login")

	public LoginResponse loginUser(LoginForm form) { // @RequestBody
		return userService.userLogin(form);
	}

	// ユーザー登録
	@PostMapping("/register")
	public Response userRegister(UserRegisterForm form) { // @RequestBody
		return userService.userRegister(form);
	}

	// ユーザー情報編集
	@PostMapping("/edit")
	public Response userEdit(UserEditForm form) { // @RequestBody
		return userService.userEdit(form);
	}

	// フォロー
	@PostMapping("/follow")
	public Response userFollow(UserFollowForm form) { // @RequestBody
		return userService.userFollow(form);
	}

	// フォロー解除
	@PostMapping("/remove")
	public Response userRemove(UserFollowForm form) { // @RequestBody
		return userService.userRemove(form);
	}
	
	// フォロー一覧表示
	@PostMapping("/followList")
	public FollowResponse followList(Integer userInfoId) { //@RequestBody 
		return userService.followList(userInfoId);
	}
	
	// フォロワー一覧表示
	@PostMapping("/followerList")
	public FollowResponse followerList(Integer userInfoId) { //@RequestBody 
		return userService.followerList(userInfoId);
	}

}

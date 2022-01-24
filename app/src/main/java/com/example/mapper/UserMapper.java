package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.domain.User;
import com.example.domain.UserInfo;
import com.example.form.LoginForm;
import com.example.form.ResetPasswordForm;
import com.example.form.UserEditForm;

import com.example.form.UserFollowForm;

import com.example.form.UserRegisterForm;

@Mapper
public interface UserMapper {
	/** ログイン */
	public User userLogin(LoginForm form);

	/** ユーザー登録 */
	public void userInfoRegister(UserRegisterForm form);

	/** ログイン情報の登録 */
	public void userRegister(UserRegisterForm form);

	/** ユーザー情報の編集 */
	public void userInfoEdit(UserEditForm form);

	/** ログイン情報の編集 */
	public void userEdit(UserEditForm form);

	/** ユーザータグの編集 */
	public void userInfoTagsEdit(@Param("userId") Integer userId, @Param("tagsList") List<Integer> tag);

	/** ユーザータグの編集 */
	public void deleteTags(Integer userId);

	/** フォロー */
	public void userFollow(UserFollowForm form);

	/** フォロー解除 */
	public void userRemove(UserFollowForm form);

	/** フォロー表示 */
	public List<UserInfo> followList(Integer userInfoId);

	/** フォロワー表示 */
	public List<UserInfo> followerList(Integer userInfoId);

	/** 投稿ユーザー */
	public UserInfo getPostedUser(Integer articleId);
	
	/** パスワード再設定(ユーザー検索) */
	public User resetRequest(String email);
	
	/** パスワード再設定 */
	public void resetPassword(ResetPasswordForm form);
	
}

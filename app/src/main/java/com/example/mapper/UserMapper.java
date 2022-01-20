package com.example.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.User;
import com.example.form.LoginForm;
import com.example.form.UserEditForm;
import com.example.form.UserRegisterForm;

@Mapper
public interface UserMapper {
	/** ログイン */
	public User userLogin(LoginForm form);

	/** ユーザー登録 */
	public Integer userInfoRegister(UserRegisterForm form);

	/** ユーザー登録 */
	public void userRegister(UserRegisterForm form);

	/** 編集 */
	public void userInfoEdit(UserEditForm form);

	/** 編集 */
	public void userEdit(UserEditForm form);

	/** 編集 */
	public void userInfoTagsEdit(UserEditForm form);

}

package com.example.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.User;
import com.example.form.LoginForm;
import com.example.form.UserRegisterForm;

@Mapper
public interface UserMapper {

	public User userLogin(LoginForm form);

	public Integer userInfoRegister(UserRegisterForm form);

	public void userRegister(UserRegisterForm form);

}

package com.example.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.User;
import com.example.form.LoginForm;

@Mapper
public interface LoginMapper {

	public User userLogin(LoginForm form);

}

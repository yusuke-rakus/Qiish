package com.example.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.domain.UserInfo;

@Mapper
public interface MyPageMapper {

	/** マイページ表示 */
	public UserInfo myPage(@Param("userInfoId") Integer userInfoId, @Param("guestId") Integer guestId);
}

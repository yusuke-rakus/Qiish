package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.domain.Tag;
import com.example.domain.UserInfo;

@Mapper
public interface MyPageMapper {
	
	/** マイページ */
	public UserInfo myPage(Integer userInfoId);
	
	/** マイページ(タグ情報) */
	public List<Tag> getTagInfo(Integer userInfoId);
}

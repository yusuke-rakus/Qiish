package com.example.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.example.domain.UserInfo;
import com.example.form.UserPageForm;

@Mapper
public interface MyPageMapper {
	
	/** マイページ表示 */
	public UserInfo myPage(UserPageForm form);
}

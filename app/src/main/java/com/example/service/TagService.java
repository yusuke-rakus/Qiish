package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.common.Status;
import com.example.domain.Tag;
import com.example.mapper.TagMapper;
import com.example.response.TagCountListResponse;
import com.example.response.TagResponse;

@Service
@Transactional
public class TagService {

	private static final String[] DAYKEYWORD = { "MONTH", "YEAR", "ALL" };

	@Autowired
	private TagMapper tagMapper;

	public TagResponse getTags() {
		TagResponse res = new TagResponse();
		try {
			res.setTags(tagMapper.getTags());
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

	/**
	 * タグの投稿集計をループ処理で行う
	 * 
	 * @return
	 */
	public TagCountListResponse getTagCount() {
		TagCountListResponse res = new TagCountListResponse();
		try {
			for (String day : DAYKEYWORD) {
				List<Tag> tag = tagMapper.getTagsCount(day);
				res.setList(tag);
			}
		} catch (Exception e) {
			res.setStatus(Status.ERROR.getStatus());
		}
		return res;
	}

}

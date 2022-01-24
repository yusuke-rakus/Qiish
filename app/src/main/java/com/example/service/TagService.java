package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.common.Status;
import com.example.mapper.TagMapper;
import com.example.response.TagResponse;

@Service
public class TagService {

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
}

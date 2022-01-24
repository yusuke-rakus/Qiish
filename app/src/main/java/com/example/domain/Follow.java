package com.example.domain;

public class Follow {

	private Integer id;
	private Integer userInfoId;
	private Integer followUserInfoId;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getUserInfoId() {
		return userInfoId;
	}
	public void setUserInfoId(Integer userInfoId) {
		this.userInfoId = userInfoId;
	}
	public Integer getFollowUserInfoId() {
		return followUserInfoId;
	}
	public void setFollowUserInfoId(Integer followUserInfoId) {
		this.followUserInfoId = followUserInfoId;
	}
	@Override
	public String toString() {
		return "Follow [id=" + id + ", userInfoId=" + userInfoId + ", followUserInfoId=" + followUserInfoId + "]";
	}
}

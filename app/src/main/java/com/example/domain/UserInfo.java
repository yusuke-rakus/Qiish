package com.example.domain;

import java.util.List;

public class UserInfo {

	private Integer id;
	private String userName;
	private String email;
	private String engineerType;
	private String description;
	private String image;
	private List<Integer> follow;
	private Integer followCount;
	private List<Integer> follower;
	private Integer followerCount;
	private List<Tag> tags;
	private List<Article> articles;
	private Integer articleCount;
	private List<Likes> likes;
	private List<Comment> comments;
	private Integer followStatus;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEngineerType() {
		return engineerType;
	}

	public void setEngineerType(String engineerType) {
		this.engineerType = engineerType;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public List<Integer> getFollow() {
		return follow;
	}

	public void setFollow(List<Integer> follow) {
		this.follow = follow;
	}

	public Integer getFollowCount() {
		return followCount;
	}

	public void setFollowCount(Integer followCount) {
		this.followCount = followCount;
	}

	public List<Integer> getFollower() {
		return follower;
	}

	public void setFollower(List<Integer> follower) {
		this.follower = follower;
	}

	public Integer getFollowerCount() {
		return followerCount;
	}

	public void setFollowerCount(Integer followerCount) {
		this.followerCount = followerCount;
	}

	public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}

	public List<Article> getArticles() {
		return articles;
	}

	public void setArticles(List<Article> articles) {
		this.articles = articles;
	}

	public Integer getArticleCount() {
		return articleCount;
	}

	public void setArticleCount(Integer articleCount) {
		this.articleCount = articleCount;
	}

	public List<Likes> getLikes() {
		return likes;
	}

	public void setLikes(List<Likes> likes) {
		this.likes = likes;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public Integer getFollowStatus() {
		return followStatus;
	}

	public void setFollowStatus(Integer followStatus) {
		this.followStatus = followStatus;
	}

	@Override
	public String toString() {
		return "UserInfo [id=" + id + ", userName=" + userName + ", email=" + email + ", engineerType=" + engineerType
				+ ", description=" + description + ", image=" + image + ", follow=" + follow + ", followCount="
				+ followCount + ", follower=" + follower + ", followerCount=" + followerCount + ", tags=" + tags
				+ ", articles=" + articles + ", articleCount=" + articleCount + ", likes=" + likes + ", comments="
				+ comments + ", followStatus=" + followStatus + "]";
	}



}

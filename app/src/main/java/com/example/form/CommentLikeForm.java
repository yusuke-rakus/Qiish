package com.example.form;

public class CommentLikeForm {

	private Integer userId;
	private Integer commentId;

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getCommentId() {
		return commentId;
	}

	public void setCommentId(Integer commentId) {
		this.commentId = commentId;
	}

	@Override
	public String toString() {
		return "CommentLikeForm [userId=" + userId + ", commentId=" + commentId + "]";
	}

}

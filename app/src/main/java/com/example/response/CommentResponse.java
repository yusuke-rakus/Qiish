package com.example.response;

import java.util.List;

import com.example.domain.Comment;

public class CommentResponse extends Response {

	private List<Comment> commentList;

	public List<Comment> getCommentList() {
		return commentList;
	}

	public void setCommentList(List<Comment> commentList) {
		this.commentList = commentList;
	}

	@Override
	public String toString() {
		return "CommentResponse [commentList=" + commentList + "]";
	}

}

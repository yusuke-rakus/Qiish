package com.example.form;

public class CommentDeleteForm {

	private Integer guestId;
	
	private Integer commentId;

	public Integer getGuestId() {
		return guestId;
	}

	public void setGuestId(Integer guestId) {
		this.guestId = guestId;
	}

	public Integer getCommentId() {
		return commentId;
	}

	public void setCommentId(Integer commentId) {
		this.commentId = commentId;
	}

	@Override
	public String toString() {
		return "CommentDeleteForm [guestId=" + guestId + ", commentId=" + commentId + "]";
	}
	
}

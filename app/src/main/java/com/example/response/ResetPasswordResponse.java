package com.example.response;

public class ResetPasswordResponse  extends Response{

	private String url;

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public String toString() {
		return "ResetPasswordResponse [url=" + url + "]";
	}
	
}

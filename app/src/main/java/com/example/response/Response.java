package com.example.response;

import com.example.common.Status;

/**
 * レスポンスの際にこのクラスを継承する
 * 
 * @author YusukeMatsumoto
 *
 */
public class Response {

	private String status = Status.SUCCESS.getStatus();

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}

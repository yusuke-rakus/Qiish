package com.example.response;

import java.util.List;
import java.util.Objects;

import com.example.domain.Tag;

/**
 * タグ投稿数を集計したデータ
 * 
 * @author naramasato
 *
 */
public class TagCountListResponse extends Response {

	private List<Tag> monthly;
	private List<Tag> annual;
	private List<Tag> whole;

	public void setList(List<Tag> tagList) {
		if (Objects.isNull(monthly)) {
			setMonthly(tagList);
		} else if (Objects.isNull(annual)) {
			setAnnual(tagList);
		} else if (Objects.isNull(whole)) {
			setWhole(tagList);
		}
	}

	public List<Tag> getMonthly() {
		return monthly;
	}

	public void setMonthly(List<Tag> monthly) {
		this.monthly = monthly;
	}

	public List<Tag> getAnnual() {
		return annual;
	}

	public void setAnnual(List<Tag> annual) {
		this.annual = annual;
	}

	public List<Tag> getWhole() {
		return whole;
	}

	public void setWhole(List<Tag> whole) {
		this.whole = whole;
	}

}

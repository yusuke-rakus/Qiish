package com.example.domain;

public class Tag {

	private Integer id;
	private String skill;
	private String image;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getSkill() {
		return skill;
	}

	public void setSkill(String skill) {
		this.skill = skill;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Tag [id=" + id + ", skill=" + skill + ", image=" + image + "]";
	}



}

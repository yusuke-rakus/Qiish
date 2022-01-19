package com.example.domain;

/**
 * タグのドメイン
 * 
 * @author YusukeMatsumoto
 *
 */
public class Tags {

	private String skill;
	private String image;

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
		return "Tags [skill=" + skill + ", image=" + image + "]";
	}

}

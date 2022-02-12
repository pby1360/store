package com.bb17.store.entity;

import java.time.LocalDateTime;
import java.util.Date;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.domain.Persistable;
import org.springframework.data.relational.core.mapping.Table;

//import lombok.Data;

//@Entity
//@Data
@Table("USERS")
public class Users implements Persistable<Long>{

	@Id
	private long userNo;
	private String userId;
	private String password;
	private String email;
	private String name;
	@CreatedDate
	private LocalDateTime crtDt;
	
	@Transient
	private boolean isNew = false;
	
	public long getUserNo() {
		return userNo;
	}
	public void setUserNo(long userNo) {
		this.userNo = userNo;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public LocalDateTime getCrtDt() {
		return crtDt;
	}
	public void setCrtDt(LocalDateTime crtDt) {
		this.crtDt = crtDt;
	}
	public void setNew(boolean isNew) {
		this.isNew = isNew;
	}
	@Override
	public Long getId() {
		// TODO Auto-generated method stub
		return userNo;
	}
	@Override
	public boolean isNew() {
		// TODO Auto-generated method stub
		return isNew;
	}
}

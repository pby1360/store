package com.bb17.store.entity;

import java.time.LocalDateTime;
import java.util.Date;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.annotation.Transient;
import org.springframework.data.domain.Persistable;
import org.springframework.data.relational.core.mapping.Table;

@Table("CUSTOMER")
public class Customer implements Persistable<CustomerKey>{
	
//	@Id
	private long cusNo;
	private String name;
//	@Id
	private long userNo;
	private String phoneNumber;	
	private Date birth;	
	private String jibunAddress;
	private String roadAddress;
	private String detailAddress;
	private String email;
	private String memo;
	@CreatedDate
	private LocalDateTime crtDt;
	@LastModifiedDate
	private LocalDateTime updDt;
	
	@Transient
	private boolean isNew = false;

	public long getCusNo() {
		return cusNo;
	}
	public void setCusNo(long cusNo) {
		this.cusNo = cusNo;
	}
	public long getUserNo() {
		return userNo;
	}
	public void setUserNo(long userNo) {
		this.userNo = userNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public Date getBirth() {
		return birth;
	}
	public void setBirth(Date birth) {
		this.birth = birth;
	}
	public String getJibunAddress() {
		return jibunAddress;
	}
	public void setJibunAddress(String jibunAddress) {
		this.jibunAddress = jibunAddress;
	}
	public String getRoadAddress() {
		return roadAddress;
	}
	public void setRoadAddress(String roadAddress) {
		this.roadAddress = roadAddress;
	}
	public String getDetailAddress() {
		return detailAddress;
	}
	public void setDetailAddress(String detailAddress) {
		this.detailAddress = detailAddress;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMemo() {
		return memo;
	}
	public void setMemo(String memo) {
		this.memo = memo;
	}
	public LocalDateTime getCrtDt() {
		return crtDt;
	}
	public void setCrtDt(LocalDateTime crtDt) {
		this.crtDt = crtDt;
	}
	public LocalDateTime getUpdDt() {
		return updDt;
	}
	public void setUpdDt(LocalDateTime updDt) {
		this.updDt = updDt;
	}
	@Override
	public CustomerKey getId() {
		return new CustomerKey(cusNo, userNo);
	}
	@Override
	public boolean isNew() {
		return isNew;
	}
	public void setNew(boolean isNew) {
		this.isNew = isNew;
	}
	
	
	
}

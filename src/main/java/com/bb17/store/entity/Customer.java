package com.bb17.store.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "CUSTOMER")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CUS_NO")
	private long cusNo;
	@Column(name = "USER_NO")
	private long userNo;
	private String name;
	@Column(name = "PHONE_NUMBER")
	private String phoneNumber;	
	private Date birth;	
	@Column(name = "JIBUN_ADDRESS")
	private String jibunAddress;
	@Column(name = "ROAD_ADDRESS")
	private String roadAddress;
	@Column(name = "DETAIL_ADDRESS")
	private String detailAddress;
	private String email;
	private String memo;
	@Column(name = "CRT_DT")
	private Date crtDt;
}

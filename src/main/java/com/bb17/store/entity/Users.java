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
@Table(name = "USERS")
public class Users {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "USER_NO")
	private long userNo;
	@Column(name = "USER_ID")
	private String userId;
	private String password;
	private String email;
	private String name;
	@Column(name = "CRT_DT")
	private Date crtDt;
}

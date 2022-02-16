package com.bb17.store.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.persistence.Transient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "CUSTOMER")
@IdClass(CustomerId.class)
public class Customer {
	
	@Id
	@Column(name = "CUS_NO")
	private long cusNo;
	@Column(name = "USER_NO")
	private long userNo;
	
//	@EmbeddedId
//	private CustomerId customerId;

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

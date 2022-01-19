package com.bb17.store.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
//@Embeddable
public class CustomerId implements Serializable {
//	@Column(name = "CUS_NO")
	private long cusNo;
//	@Column(name = "USER_NO")
	private long userNo;
}

package com.bb17.store.entity;

public class CustomerKey {
	
	private final long cusNo;
	private final long userNo;
	
	public static CustomerKey of(final long cusNo, final long userNo) {
		return new CustomerKey(cusNo, userNo);
	}

		
	public CustomerKey(long cusNo, long userNo) {
		this.cusNo = cusNo;
		this.userNo = userNo;
	}

	public long getCusno() {
		return cusNo;
	}

	public long getUserno() {
		return userNo;
	}
	

}

package com.bb17.store.repository;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.bb17.store.entity.Customer;
import com.bb17.store.entity.CustomerId;

public interface CustomerRepository extends JpaRepository<Customer, CustomerId> {

	List<Customer> findByUserNo(long userNo);
	
	Customer findByCusNoAndUserNo(long cusNo, long userNo);

//	Customer findByCustomerId(CustomerId customerId);

	@Query("SELECT (IFNULL(MAX(C.cusNo), 0) + 1) AS CUS_NO FROM Customer C WHERE USER_NO = :userNo")
	long getNextCusNo(@Param("userNo")long userNo);
	
//	
//	@Modifying
//	void deleteByUserNoAndCusNo(@Param("userNo")long userNo, @Param("cusNo")long cusNo);

	@Transactional
	void deleteByUserNoAndCusNo(long userNo, long cusNo);

}

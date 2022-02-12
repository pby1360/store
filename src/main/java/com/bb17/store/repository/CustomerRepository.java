package com.bb17.store.repository;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import com.bb17.store.entity.Customer;
import com.bb17.store.entity.CustomerKey;

public interface CustomerRepository extends CrudRepository<Customer, CustomerKey> {

	List<Customer> findByUserNo(long userNo);

	@Query("SELECT (IFNULL(MAX(C.CUS_NO), 0) + 1) AS CUS_NO FROM CUSTOMER C WHERE USER_NO = :userNo")
	long getNextCusNo(long userNo);
	
	void deleteByUserNoAndCusNo(long userNo, long cusNo);

}

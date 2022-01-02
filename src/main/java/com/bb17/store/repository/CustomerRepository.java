package com.bb17.store.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bb17.store.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
	
	List<Customer> findByUserNo(Long userNo);

}

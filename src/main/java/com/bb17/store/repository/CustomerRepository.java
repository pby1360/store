package com.bb17.store.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bb17.store.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}

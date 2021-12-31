package com.bb17.store.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bb17.store.entity.Customer;
import com.bb17.store.entity.Users;
import com.bb17.store.repository.CustomerRepository;
import com.bb17.store.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j(topic = "CustomerContoroller")
@RequestMapping("/api/customer")
@RestController
public class CustomerContoroller {
	
	@Autowired CustomerRepository customerRepository;
	@Autowired UserRepository userRepository;
	
	@PostMapping
	public String addCustomer(@RequestBody Customer customer) {
		Authentication auth   = SecurityContextHolder.getContext().getAuthentication();
		String userId = auth.getName();
		
		String result = null;

		try {
			Users user = userRepository.findByUserId(userId).get(0);
			
			customer.setUserNo(user.getUserNo());
			customer.setCrtDt(new Date());
			customerRepository.save(customer);
			result = "success";
			
		} catch (Exception e) {
			e.printStackTrace();
			result = "fail";
		}
		
		return result;
	}
	
}

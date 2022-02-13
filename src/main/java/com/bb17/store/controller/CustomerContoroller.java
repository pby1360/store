package com.bb17.store.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bb17.store.entity.Customer;
import com.bb17.store.entity.CustomerKey;
import com.bb17.store.entity.Users;
import com.bb17.store.repository.CustomerRepository;
import com.bb17.store.repository.UserRepository;
import com.bb17.store.service.RegexService;

@RequestMapping("/api/customer")
@RestController
public class CustomerContoroller {
	
	private Logger log = LoggerFactory.getLogger("CustomerContoroller");
	
	@Autowired CustomerRepository customerRepository;
	@Autowired UserRepository userRepository;
	@Autowired RegexService regexService;
	
//	@Autowired CustomerQueryRepository customerQRepository;
	
	@GetMapping
	public List<Customer> getCustomerList(@RequestParam Map<String, Object> search) {
		Authentication auth   = SecurityContextHolder.getContext().getAuthentication();
		String userId = auth.getName();

		Users user = userRepository.findByUserId(userId).get(0);
		
		List<Customer> list = new ArrayList<Customer>();
		
		log.info("isEmpty ? " + search.isEmpty());
		
		if (!search.isEmpty()) {
			
			search.put("userNo", user.getUserNo());
			
//			list = customerQRepository.findCustomerBySearch(search);
			list = customerRepository.findByUserNo(user.getUserNo());
			list.stream().forEach(item -> {
				if (null != item.getPhoneNumber() && !"".equals(item.getPhoneNumber())) {
					item.setPhoneNumber(regexService.changePhoneNumber(item.getPhoneNumber()));
				}
			});
			
		} else {
			
			list = customerRepository.findByUserNo(user.getUserNo());
			list.stream().forEach(item -> {
				if (null != item.getPhoneNumber() && !"".equals(item.getPhoneNumber())) {
					item.setPhoneNumber(regexService.changePhoneNumber(item.getPhoneNumber()));
				}
			});
			
		}
		
		return list;
	}
	
	@GetMapping("/{userNo}/{cusNo}")
	public Customer getCustomerInfo(@PathVariable long userNo, @PathVariable long cusNo) {
		
		log.info("userNo : " + userNo);
		log.info("cusNo : " + cusNo);
//		CustomerKey key = new CustomerKey(cusNo, userNo);
//		Customer customer = customerRepository.findById(key).get();
		
		Customer customer = customerRepository.findByCusNoAndUserNo(cusNo, userNo);
		if (null != customer.getPhoneNumber() && !"".equals(customer.getPhoneNumber())) {
			customer.setPhoneNumber(regexService.changePhoneNumber(customer.getPhoneNumber()));
		}
		
		return customer;
	}

	@PostMapping
	public String addCustomer(@RequestBody Customer customer) {
		Authentication auth   = SecurityContextHolder.getContext().getAuthentication();
		String userId = auth.getName();
		
		String result = null;

		try {
			Users user = userRepository.findByUserId(userId).get(0);
			long nextCusNo = customerRepository.getNextCusNo(user.getUserNo());
			
			log.info("::cus no ? " + nextCusNo);

			customer.setNew(true);
			customer.setUserNo(user.getUserNo());
			customer.setCusNo(nextCusNo);
			
			log.info("customer.cusNo ? " + customer.getCusNo());
			
			customerRepository.save(customer);
			
			result = "success";
			
		} catch (Exception e) {
			e.printStackTrace();
			result = "fail";
		}
		
		return result;
	}

	@PutMapping
	public String editCustomer(@RequestBody Customer customer) {
//		Authentication auth   = SecurityContextHolder.getContext().getAuthentication();
//		String userId = auth.getName();
		
		String result = null;

		try {
			
			log.info("customer : " + customer);
			customerRepository.save(customer);
			result = "success";
			
		} catch (Exception e) {
			e.printStackTrace();
			result = "fail";
		}
		
		return result;
	}
	
	@DeleteMapping
	public String deleteCustomer(@RequestBody Customer customer) {
		
		String result = null;
		
		try {
			
			log.info("customer : " + customer);
//			CustomerId id = new CustomerId(customer.getUserNo(), customer.getCusNo());
			customerRepository.deleteByUserNoAndCusNo(customer.getUserNo(), customer.getCusNo());
			result = "success";
			
		} catch (Exception e) {
			e.printStackTrace();
			result = "fail";
		}
		
		return result;
	}
	
}

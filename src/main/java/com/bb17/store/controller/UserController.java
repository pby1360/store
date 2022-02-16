package com.bb17.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bb17.store.entity.Users;
import com.bb17.store.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j(topic = "UserController")
@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping
	public Users getUserInfo (long userNo) {
		log.info("getUserInfo");
		Users user = userRepository.getById(userNo);
		return user;
	}
	
}

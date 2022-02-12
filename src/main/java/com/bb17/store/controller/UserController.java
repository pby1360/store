package com.bb17.store.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.bb17.store.entity.Users;
import com.bb17.store.repository.UserRepository;

//import lombok.extern.slf4j.Slf4j;

//@Slf4j(topic = "UserController")
@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	private Logger log = LoggerFactory.getLogger("UserController");
	
	@GetMapping
	public Users getUserInfo (long userNo) {
		log.info("getUserInfo");
		return userRepository.findById(userNo).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		
	}
	
}

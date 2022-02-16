package com.bb17.store.controller;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bb17.store.entity.Users;
import com.bb17.store.repository.UserRepository;

@RestController
@RequestMapping("/home/join")
public class JoinController {
	
	Logger log = LoggerFactory.getLogger("JoinController");
	
	@Autowired UserRepository userRepository;
	
	@Autowired PasswordEncoder encoder;
	
	@PostMapping
	public String join(@RequestBody Users user) {
		
		String result = null;
		try {
			
			if (userRepository.existsByUserId(user.getUserId())) {
				return result = "duplicated";
			}

			user.setPassword(encoder.encode(user.getPassword()));
			user.setCrtDt(new Date());
			userRepository.save(user);
			result = "success";
			
		} catch (Exception e) {
			e.printStackTrace();
			result = "fail";
		}
		return result;
	}

}

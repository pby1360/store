package com.bb17.store.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bb17.store.entity.Users;
import com.bb17.store.repository.UserRepository;

@RestController
@RequestMapping("/home")
public class HomeController {
	
	Logger log = LoggerFactory.getLogger("HomeController");
}

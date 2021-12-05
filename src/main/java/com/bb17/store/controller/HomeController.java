package com.bb17.store.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class HomeController {
	
	Logger log = LoggerFactory.getLogger("HomeController");
	
	@GetMapping
	public String home() {
		log.info("home");
		return "home";
	}

}

package com.bb17.store.jwt;

import java.io.IOException;
import java.io.Serializable;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

//import lombok.extern.slf4j.Slf4j;

//@Slf4j
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint, Serializable {

    private static final long serialVersionUID = -7858869558953243875L;
    
    private Logger log = LoggerFactory.getLogger("JwtAuthenticationEntryPoint");

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) throws IOException {
    	
    	log.info("::JwtAuthenticationEntryPoint -> commence");

    	response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
    }
}

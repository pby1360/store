package com.bb17.store.jwt;

import java.io.Serializable;

public class JwtRequest implements Serializable {

    private static final long serialVersionUID = 5926468583005150707L;

    private String username;
    private String password;
    private String token;
    
	//need default constructor for JSON Parsing
    public JwtRequest() {}

    public JwtRequest(String username, String password, String token) {
        this.setUsername(username);
        this.setPassword(password);
        this.setToken(token);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

}

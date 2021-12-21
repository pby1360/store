package com.bb17.store.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
//		http			
			
//			.and()
//			.authorizeRequests()
//			.antMatchers("/home/**").permitAll()
//			.anyRequest().authenticated();
		http.csrf().disable()
		.cors().and()
        // dont authenticate this particular request
    	.authorizeRequests().antMatchers("/home/**").permitAll()
    	.antMatchers(HttpMethod.POST,"/api/**").authenticated()
    	.antMatchers(HttpMethod.PUT,"/api/**").authenticated()
    	.antMatchers(HttpMethod.DELETE,"/api/**").authenticated()
        .anyRequest().permitAll();
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));	// 허용할 요청한 클라이언트 url
		configuration.setAllowedMethods(Arrays.asList("HEAD", "GET", "POST", "PUT", "DELETE"));		// 허용할 httpMethod
		configuration.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));	// 특정 헤더를 가진 경우에만 CORS 요청을 허용할 경우
		configuration.setAllowCredentials(true);	// 자격증명과 함께 요청을 할 수 있는지 여부
		//		configuration.setMaxAge(3600L);		// preflight 요청의 캐시 시간
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}
	
	@Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }


}

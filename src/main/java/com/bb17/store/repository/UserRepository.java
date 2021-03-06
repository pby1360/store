package com.bb17.store.repository;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bb17.store.entity.Users;

public interface UserRepository extends JpaRepository<Users, Long>{
	
	boolean existsByUserId(String userId);
	
	List<Users> findByUserId(String userId);

}

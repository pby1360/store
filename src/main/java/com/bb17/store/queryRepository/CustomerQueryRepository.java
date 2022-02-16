package com.bb17.store.queryRepository;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bb17.store.entity.Customer;
import com.bb17.store.entity.QCustomer;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j(topic = "CustomerQueryRepository")
@RequiredArgsConstructor
@Repository
public class CustomerQueryRepository {
	
	private final JPAQueryFactory query;
	
	public List<Customer> findCustomerBySearch(Map<String, Object> search) {
		
		log.info("search : " + search);
		
		QCustomer qCustomer = QCustomer.customer;
		
		BooleanBuilder builder = new BooleanBuilder();
		
		builder.and(qCustomer.customer.userNo.eq((Long) search.get("userNo")));

		if (search.get("name") != null) {
			builder.and(qCustomer.customer.name.contains((String) search.get("name")));
		}
		if (search.get("phoneNumber") != null) {
			builder.and(qCustomer.customer.phoneNumber.contains((String) search.get("phoneNumber")));
		}
		
		List<Customer> list = query
				.select(qCustomer.customer)
				.from(qCustomer.customer)
				.where(builder)
				.fetch();
				
		return list;
	}

}

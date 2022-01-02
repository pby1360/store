package com.bb17.store.service;

import org.springframework.stereotype.Service;

@Service
public class RegexService {
	
	public String changePhoneNumber (String oldNumber) {
		String newNumber = "";
		if (null != oldNumber && !"".equals(oldNumber)) {
			if (oldNumber.length() == 7) {
				newNumber = oldNumber.replaceFirst("(^02|[0-9]{3})([0-9]{3,4})$", "$1-$2");
			} else if (oldNumber.length() == 8) {
				newNumber = oldNumber.replaceFirst("(^02|[0-9]{4})([0-9]{4})$", "$1-$2");
			} else if (oldNumber.length() == 9) {
				newNumber = oldNumber.replaceFirst("(02|[0-9]{2})(02|[0-9]{3})([0-9]{4})$", "$1-$2-$3");
			} else if (oldNumber.length() == 10 && oldNumber.substring(0, 2).equals("01")) {
				newNumber = oldNumber.replaceFirst("(01|[0-9]{3})([0-9]{3})([0-9]{4})$", "$1-$2-$3");
			} else if (oldNumber.length() == 10 && oldNumber.substring(0, 2).equals("02")) {
				newNumber = oldNumber.replaceFirst("(02|[0-9]{2})([0-9]{4})([0-9]{4})$", "$1-$2-$3");
			} else if (oldNumber.length() == 10 && (!oldNumber.substring(0, 2).equals("02")) && !oldNumber.substring(0, 2).equals("01")) {
				newNumber = oldNumber.replaceFirst("([0-9]{3})([0-9]{3})([0-9]{4})$", "$1-$2-$3");
			} else if (oldNumber.length() > 10) {
				newNumber = oldNumber.replaceFirst("(^02|[0-9]{3})([0-9]{3,4})([0-9]{4})$", "$1-$2-$3");
			}
		}
		
		return newNumber;
	}

}

package com.bb17.store.jwt;

import com.bb17.store.entity.Users;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;


public class AccessToken {

	private static final AccessToken ANONYMOUS = new AccessToken("", "", "",
//			Collections.emptySet(),
			Long.MAX_VALUE);

	private final String userId;
	private final String userName;
	private final String accessToken;
//	private final Set<String> privileges;
	private Users info;

	private long expire;
	/**
	 * time on token instance creation for check expire
	 */
	private final long tokenAccessTime = System.currentTimeMillis();

	public static AccessToken anonymous() {
		return ANONYMOUS;
	}

	public static AccessToken of(final Users user,
//			final Set<String> privileges,
			final String accessToken,
			final long expireWindow) {
		
		final AccessToken token = new AccessToken(user.getUserId(), user.getName(),
//				privileges,
				accessToken,
				System.currentTimeMillis() + expireWindow
				);
		
		token.info = user;
		return token;
	}

	@JsonCreator
	public AccessToken(@JsonProperty("i") final String userId, @JsonProperty("n") final String userName,
//			@JsonProperty("p") final Set<String> privileges,
			@JsonProperty("e") final String accessToken,
			@JsonProperty("e") final long expire) {
		this.userId = userId;
		this.userName = userName;
//		this.privileges = privileges;
		this.expire = expire;
		this.info = null;
		this.accessToken = accessToken;
	}

	@JsonGetter("i")
	public String getUserId() {
		return userId;
	}

	@JsonGetter("n")
	public String getUserName() {
		return userName;
	}
	
	@JsonGetter("t")
	public String getAccessToken() {
		return accessToken;
	}

//	@JsonGetter("p")
//	public Set<String> getPrivileges() {
//		return privileges;
//	}

	@JsonGetter("e")
	public long getExpire() {
		return expire;
	}

//	@JsonInclude(Include.NON_NULL)
	@JsonGetter("d")
	public Users getInfo() {
		return info;
	}

	@JsonIgnore
	public boolean isExpired() {
		return expire <= tokenAccessTime;
	}

	@JsonIgnore
	public boolean isNotExpired() {
		return expire > tokenAccessTime;
	}

	@JsonIgnore
	boolean needsUpdate(final long updateWindow) {
		return isNotExpired() && expire <= tokenAccessTime + updateWindow;
	}
	
	public void updateExpire(final long expireWindow) {
		expire = tokenAccessTime + expireWindow;
	}

	
	

}

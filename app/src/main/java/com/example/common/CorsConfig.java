package com.example.common;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

	@Bean
	public CorsFilter corsFilter() {
		List<String> url = new ArrayList<>();
		url.add("http://localhost:8081");
		url.add("http://localhost:8000");
		url.add("http://localhost:8080");
		url.add("http://vue:8000");
		url.add("http://vue:8080");

		CorsConfiguration config = new CorsConfiguration();
		config.setAllowedOrigins(url);
		config.setAllowCredentials(true);
		config.setAllowedMethods(Arrays.asList("GET", "POST"));
		config.setAllowedHeaders(
				Arrays.asList("authorization", "content-type", "x-auth-token"));
		config.addExposedHeader("*");

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", config);

		return new CorsFilter(source);
	}

}

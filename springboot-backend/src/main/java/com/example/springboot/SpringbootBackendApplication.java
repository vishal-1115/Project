package com.example.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.springboot.model.Customer;
import com.example.springboot.repository.CustomerRepository;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		this.customerRepository.save(new Customer("Vishal", "Gupta", "vishal11@gmail.com"));
		this.customerRepository.save(new Customer("Lovefaith", "Narang", "lovefaith@gmail.com"));
		this.customerRepository.save(new Customer("Neha", "Gaddam", "gaddam@gmail.com"));
		this.customerRepository.save(new Customer("Ganesh", "Patil", "ganesh@gmail.com"));

	}

}

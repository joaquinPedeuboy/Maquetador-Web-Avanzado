package com.educacionit;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.educacionit.dao.ClienteDAO;
import com.educacionit.entity.Cliente;

@SpringBootApplication
public class Desafio13Parte1Application implements CommandLineRunner{
	@Autowired
	private ClienteDAO usuarioRepository;
	private Log logger = LogFactory.getLog(getClass());
	
	public static void main(String[] args) {
		SpringApplication.run(Desafio13Parte1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Cliente cliente = new Cliente();
		cliente.setEmail("email@gmail.com");
		cliente.setName("name user");
		
		Cliente clienteGuardado = usuarioRepository.registrarCliente(cliente);
		logger.info("Cliente guardado: " + 
				clienteGuardado.getEmail()+"-id: " + clienteGuardado.getId()+ "-" + 
				clienteGuardado.getName());
		
		Cliente clienteBuscado = usuarioRepository.buscarPorEmail("email@gmail.com");
		if(clienteBuscado!=null) {
			logger.warn("Usuario hallado con codigo: " + clienteBuscado.getId());
		}else {
			logger.fatal("No encontrado");
		}
	}
	
	

}

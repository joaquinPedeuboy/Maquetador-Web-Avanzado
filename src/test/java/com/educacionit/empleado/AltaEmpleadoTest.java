package com.educacionit.empleado;


import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.educacionit.dao.EmpleadoDAO;
import com.educacionit.dao.PersonaDAO;
import com.educacionit.entity.Empleado;
import com.educacionit.entity.Persona;

@SpringBootTest
public class AltaEmpleadoTest {
	@Autowired
	private PersonaDAO personaDAO;
	@Autowired
	private EmpleadoDAO empleadoDAO;
	
	@Test
	public void registrarEmpleado() {
		Empleado empleado1 = new Empleado();
		empleado1.setEmail("empleado1@gamil.com");
		empleado1.setApellido("Perez");
		empleado1.setNombre("Enzo");
		empleado1.setCodigoEmpleado(24);
		
		Persona persona1 = new Persona();
		persona1.setEmail("persona1@gmail.com");
		persona1.setNombre("Juan");
		persona1.setApellido("Acosta");
		
		Persona personaGuardado = personaDAO.save(persona1);
		Empleado empleadoGuardado = empleadoDAO.save(empleado1);
		
		 System.out.println("Persona guardada: " + personaGuardado);
		 System.out.println("Empleado guardado: " + empleadoGuardado);
	}
}

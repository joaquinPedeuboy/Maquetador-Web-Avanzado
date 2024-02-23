package com.educacionit.main;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.educacionit.dao.IPersona;
import com.educacionit.dao.ITelefono;
import com.educacionit.entidades.Persona;
import com.educacionit.entidades.Telefono;

@Component
public class Main implements CommandLineRunner {

    @Autowired
    private IPersona iPersona;

    @Autowired
    private ITelefono iTelefono;

    @Override
    public void run(String... args) throws Exception {
        // Instanciar las clases Persona y Teléfono
        Persona persona1 = new Persona("Luciano", "Perez", "LucianoPerez@perez",null);
        Persona persona2 = new Persona("Juan", "Lomonaco", "JuanPerez@Perez", null);

        Telefono telefono1 = new Telefono(11556080,null);
        Telefono telefono2 = new Telefono(11223033,null);
        Telefono telefono3 = new Telefono(11203040,null);
        
        persona1.setTelefonos(List.of(telefono1, telefono3));
        persona2.setTelefonos(List.of(telefono2));

        // Asignar personas a teléfonos
        telefono1.setPersona(persona1);
        telefono2.setPersona(persona2);
        telefono3.setPersona(persona1);

        // Guardar en la base de datos utilizando JPA repository
        iPersona.save(persona1);
        iPersona.save(persona2);

        iTelefono.save(telefono1);
        iTelefono.save(telefono2);
        iTelefono.save(telefono3);

        // Mostrar datos guardados
        System.out.println("Personas guardadas: " + iPersona.findAll());
        System.out.println("Teléfonos guardados: " + iTelefono.findAll());
    }
}

package com.educacionit.dao;

import org.springframework.data.repository.CrudRepository;

import com.educacionit.entidades.Persona;

public interface IPersona extends CrudRepository<Persona, Integer>{

}

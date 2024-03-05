package com.educacionit.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.educacionit.entity.Persona;

@Repository
public interface PersonaDAO extends CrudRepository<Persona, Long>{

}

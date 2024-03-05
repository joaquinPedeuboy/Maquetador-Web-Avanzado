package com.educacionit.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.educacionit.entity.Empleado;

@Repository
public interface EmpleadoDAO extends CrudRepository<Empleado, Long>{

}

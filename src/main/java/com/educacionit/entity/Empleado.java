package com.educacionit.entity;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "personas")
@DiscriminatorValue(value = "E")
public class Empleado extends Persona{

	@Column(name = "per_emp_codigo_empleado")
	private Integer codigoEmpleado;
}

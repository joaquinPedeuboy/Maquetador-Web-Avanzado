package com.educacionit.entity;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.DiscriminatorType;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "personas")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(
		name = "per_discriminador",
		discriminatorType = DiscriminatorType.STRING)
@DiscriminatorValue(value = "P")
public class Persona {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "per_id")
	private Long id;
	@Column(name = "per_email",nullable = false, unique = true)
	private String email;
	@Column(name = "per_nombre",nullable = false)
	private String nombre;
	@Column(name = "per_apellido",nullable = false)
	private String apellido;
	
	
}

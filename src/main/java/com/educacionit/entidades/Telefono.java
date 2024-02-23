package com.educacionit.entidades;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Telefonos")
public class Telefono {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tel_id_telefono")
	private Integer id;
	@Column(name = "tel_numero")
	private Integer numero;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "per_id_persona")
	private Persona persona;
	
	public Telefono() {
		// TODO Auto-generated constructor stub
	}


	/**
	 * @param numero
	 * @param persona
	 */
	public Telefono(Integer numero, Persona persona) {
		this.numero = numero;
		this.persona = persona;
	}


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getNumero() {
		return numero;
	}

	public void setNumero(Integer numero) {
		this.numero = numero;
	}


	public Persona getPersona() {
		return persona;
	}


	public void setPersona(Persona persona) {
		this.persona = persona;
	}
	
	
}

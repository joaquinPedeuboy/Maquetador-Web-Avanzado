package com.educacionit.dao;


import org.springframework.stereotype.Repository;

import com.educacionit.entity.Cliente;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Repository
public class ClienteDaoImp implements ClienteDAO{
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	@Transactional
	public Cliente registrarCliente(Cliente cliente) {
		//entityManager.getTransaction().begin();
		entityManager.persist(cliente);
		//entityManager.getTransaction().commit();
		return cliente;
	}

	@Override
	public Cliente buscarPorEmail(String email) {
		return (Cliente)entityManager.createQuery("FROM Cliente u WHERE u.email = :email")
				.setParameter("email", email)
				.getSingleResult();
	}

}

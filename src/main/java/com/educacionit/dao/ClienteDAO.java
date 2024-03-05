package com.educacionit.dao;


import com.educacionit.entity.Cliente;

public interface ClienteDAO{
	Cliente registrarCliente(Cliente cliente);
	Cliente buscarPorEmail(String email);
}

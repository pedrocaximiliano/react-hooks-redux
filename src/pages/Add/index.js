import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { addCar } from '../../store/reducer'


export default function Add() {

   const [form, setForm] = useState({ name: '', url: '' , id: Math.floor(Math.random() * 65536) });
   
   const dispacth = useDispatch();
	
   function formChange(e) {
     setForm({ ...form, [e.target.name]: e.target.value });
   }  

   function onSubmit(e) {
	   e.preventDefault();
	   dispacth(addCar(form));
   }

	return (
		<form className="container mt-5" onSubmit={onSubmit}>
			<div className="form-group">
				<label>Nome</label>
				<input onChange={formChange} type="text" name="name" value={form.name}className="form-control" placeholder="Nome..." />
			</div>
			<div className="form-group">
				<label>URL:</label>
				<input onChange={formChange}  type="text" name="url" value={form.url}className="form-control" placeholder="URL:https://cars" />
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar
			</button>
		</form>
	);
}
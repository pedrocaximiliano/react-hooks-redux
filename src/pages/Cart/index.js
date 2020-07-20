import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

export default function Cart() {
	const cars = useSelector(state => state);

	console.log('cart', cars)
	return (
		cars.add.length <= 0 ? <p className="mt-5 text-warning text-center">Sem produtos no Carrinho...</p> : (
			<>
				<h1>Meus itens</h1>

				{cars.add.map(car => <>
					<div className="shopping_card">
						<img src={car.url} className="img" alt={car.name} />
						<div className="shopping_car_title">{car.name}</div>
						<div className="shopping_car_title">{car.id}</div>
					</div>
				</>
				)}
			</>
		)
	);
}

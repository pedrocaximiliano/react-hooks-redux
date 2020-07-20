import React from 'react';
import { useSelector } from 'react-redux';
import Car from '../../components/Car';



export default function List() {
	const cars = useSelector(state => state);

	console.log(cars)

	return (
		<div className="container-fluid">
			<div className="row">{cars.data.map((car, index) => <Car key={index} car={car} />)}</div>
		</div>
	);
}


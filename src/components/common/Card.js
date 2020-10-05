import React from "react";
import "./Card.css";

export default function Card({ data }) {
	const { image, title, description } = data;
	const { src, alt } = image;
	return (
		<div className="card">
			<div className="card__img">
				<img src={src} alt={alt}></img>
			</div>
			<div className="card__content">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

import React from "react";

export default function Filter({ species, setSpecies }) {
	return (
		<div className="filter-container">
			<button className={species === "All" ? "active" : ""} onClick={() => setSpecies("All")}>
				All
			</button>
			<button className={species === "Human" ? "active" : ""} onClick={() => setSpecies("Human")}>
				Human
			</button>
			<button className={species === "Alien" ? "active" : ""} onClick={() => setSpecies("Alien")}>
				Alien
			</button>
		</div>
	);
}

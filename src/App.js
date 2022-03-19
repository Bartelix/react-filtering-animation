import "./App.css";
import { useEffect, useState } from "react";
import Character from "./Character";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";

function App() {
	const [characters, setCharacters] = useState([]);
	const [species, setSpecies] = useState("All");

	let api = `https://rickandmortyapi.com/api/character/?page=1${species !== "All" ? "&species=" + species : ""}`;

	useEffect(() => {
		(async () => {
			const data = await fetch(api);
			const { results } = await data.json();
			setCharacters(results);
		})();
	}, [api]);

	return (
		<div className="App">
			<Filter species={species} setSpecies={setSpecies} />
			<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ oapcity: 0 }} layout className="characters">
				<AnimatePresence>
					{characters.map((character) => (
						<Character key={character.id} character={character} />
					))}
				</AnimatePresence>
			</motion.div>
		</div>
	);
}

export default App;

import { motion } from "framer-motion";
export default function Character({ character }) {
	return (
		<motion.div
			layout
			animate={{ opacity: 1, scale: 1 }}
			initial={{ opacity: 0, scale: 0 }}
			exit={{ opacity: 0, scale: 0.5 }}
			transition={{ duration: 0.3 }}
		>
			<h2>{character.name}</h2>
			<img src={character.image} alt={character.name} />
		</motion.div>
	);
}

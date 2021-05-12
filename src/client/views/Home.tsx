import * as React from 'react';
import { useState, useEffect } from 'react';

/* HOOK REACT EXAMPLE */
const Home = (props: HomeProps) => {
	const [greeting, setGreeting] = useState<string>('');

	useEffect(() => {}, []);

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">Home</h1>
		</main>
	);
};

interface HomeProps {}

export default Home;
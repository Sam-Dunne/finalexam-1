import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

/* HOOK REACT EXAMPLE */
const Navbar = (props: NavbarProps) => {

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">Bookstore</h1>
            <NavLink to='/books'>Books</NavLink>
            <br />
            <NavLink to='./create'>create</NavLink>
            <br />
            <NavLink to='/login'>login</NavLink>
            <br />
            <NavLink to='/register'>register</NavLink>
            <br />
            
		</main>
	);
};

interface NavbarProps {}

export default Navbar;
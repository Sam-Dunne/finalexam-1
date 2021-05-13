import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { IBookFull } from '../../typings/intefaces';
import { apiService } from '../utils/api-services';
import { useHistory } from 'react-router-dom';

/* HOOK REACT EXAMPLE */
const Edit = (props: EditProps) => {
	const history = useHistory();
	const { id } = useParams<{ id: string }>();

	const [title, setTitle] = useState(``);
	const handleSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
	const [author, setAuthor] = useState(``);
	const handleSetAuthor = (e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value);
	const [price, setPrice] = useState(``);
	const handleSetPrice = (e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value);

	useEffect(() => {
		apiService(`/api/books/${id}`)
			.then(book => {
				setTitle(book.title),
				setAuthor(book.author),
				setPrice(book.price)
			})
	}, [id]);

	const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		apiService(`/api/books/${id}`, 'PUT', { title, author, price })
			.then(serverRes =>
				history.push(`/details/${id}`)
			)
	};

	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		apiService(`/api/books/${id}`, 'DELETE')
			.then(serverRes =>
				history.push(`/details/${id}`)
			)
	}

	

	return (
		<main className="container my-5">
			<input value={title} onChange={handleSetTitle} />
			<input value={author} onChange={handleSetAuthor} />
			<input value={price} onChange={handleSetPrice} />
			<button onClick={handleEdit}>Submit Edit</button>
			<button onClick={handleDelete}>Delete Book</button>
		</main>
	);
};

interface EditProps { }

export default Edit;
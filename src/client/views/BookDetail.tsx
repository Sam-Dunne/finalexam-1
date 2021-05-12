import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IBookFull } from '../../typings/intefaces';
import { apiService } from '../utils/api-services';

/* HOOK REACT EXAMPLE */
const BookDetails = (props: BookDetailsProps) => {
    const { id } = useParams<{ id: string }>();
	const [book, setBook] = useState<IBookFull>(null);

	useEffect(() => {
        apiService(`/api/books/${id}`)
        .then(book => setBook(book))
    }, [id]);

	return (
		<main className="container my-5">
			<div>
                <h4>{book?.title}</h4>
                <h4>{book?.author}</h4>
                <h4>{book?.name}</h4>
                <h4>${book?.price}</h4>
                <Link to={`/edit/${id}`}>To Edit</Link>
            </div>
		</main>
	);
};

interface BookDetailsProps {}

export default BookDetails;
import * as React from 'react';
import { useState, useEffect } from 'react';
import { apiService } from '../utils/api-services';
import type { IBookFull } from '../../typings/intefaces'
import { Link } from 'react-router-dom';

/* HOOK REACT EXAMPLE */
const AllBooks = (props: AllBooksProps) => {
	const [books, setBooks] = useState<IBookFull[]>([]);

	useEffect(() => {
        apiService('/api/books')
        .then(books => setBooks(books))
    }, []);

	return (
		<main className="container my-5">
			{books?.map(book => (
                <div className='border' key={`books-${book.id}`}>
                    <h4>{book.title}</h4>
                    <h4>{book.author}</h4>
                    <h4>{book.price}</h4>
                    <h4>{`Category: ${book.name}`}</h4>
                    <Link to={`/details/${book.id}`}>Details</Link>
                   
                </div>
            ))}
		</main>
	);
};

interface AllBooksProps {}

export default AllBooks;
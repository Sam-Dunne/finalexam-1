import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ICategories } from '../../typings/intefaces';
import { apiService } from '../utils/api-services';

/* HOOK REACT EXAMPLE */
const CreateBook = (props: CreateBookProps) => {
	const history = useHistory();
	const { id } = useParams<{ id: string }>();

	const [categories, setCategories] = useState<ICategories[]>([]);
	const [selectedCategoryId, setSelectedCategoryId] = useState('0');
	const handleSetSelectedCategoryId = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategoryId(e.target.value)
	const [title, setTitle] = useState(``);
	const handleSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
	const [author, setAuthor] = useState(``);
	const handleSetAuthor = (e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value);
	const [price, setPrice] = useState(``);
	const handleSetPrice = (e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value);

	useEffect(() => {
		apiService(`/api/categories`)
			.then(categories => setCategories(categories))
	}, []);

	const handleSubmit =(e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		apiService('/api/books', 'POST', { title, author, price, categoryid: selectedCategoryId})
		.then(() => history.push('/books'))
	}
	return (
		<main className="container my-5">
			  <select value={selectedCategoryId}
                        onChange={handleSetSelectedCategoryId}
                        className="form-control">
                        <option value="0">Select Tag</option>
                        {categories.map(category => (
                            <option key={`tag-option-${category.id}`} value={category.id}>{category.name}</option>
                        ))}
                    </select>
			<input placeholder='Title' value={title} onChange={handleSetTitle} />
			<input placeholder='Author' value={author} onChange={handleSetAuthor} />
			<input placeholder='Price' value={price} onChange={handleSetPrice} />
			<button onClick={handleSubmit}>Create book</button>
		</main>
	);
};

interface CreateBookProps {}

export default CreateBook;
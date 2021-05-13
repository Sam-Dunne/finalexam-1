import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'
import Navbar from './components/Navbar';
import AllBooks from './views/AllBooks';
import BookDetails from './views/BookDetail';
import CreateBook from './views/CreateBook';
import Edit from './views/Edit';
import Home from './views/Home'
import Login from './views/Login';
import Register from './views/Register';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {

	return (
		<BrowserRouter>
		<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/books'>
					<AllBooks />
				</Route>
				<Route exact path='/details/:id'>
					<BookDetails />
				</Route>
				<PrivateRoute exact path='/edit/:id'>
					<Edit />
				</PrivateRoute>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/register'>
					<Register />
				</Route>
				<PrivateRoute exact path='/create'>
					<CreateBook />
				</PrivateRoute>
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps { }

export default App;

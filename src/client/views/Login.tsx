import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { apiService } from '../utils/api-services';

/* HOOK REACT EXAMPLE */
const Login = (props: LoginProps) => {
    const history = useHistory();
	const [email, setEmail] = useState<string>('');
    const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
	const [password, setPassword] = useState<string>('');
    const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    

	useEffect(() => {}, []);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        apiService('/auth/login/', 'POST', {email, password})
        .then(serverRes => {
            localStorage.setItem('token', serverRes);
            history.push('/books')
        })
    }

	return (
		<main className="container my-5">
			<input value={email} onChange={handleSetEmail} placeholder="email"/>
			<input value={password} onChange={handleSetPassword} placeholder="password"/>
            <button onClick={handleSubmit}>Login</button>
		</main>
	);
};

interface LoginProps {}

export default Login;
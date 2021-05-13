import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { apiService } from '../utils/api-services';

/* HOOK REACT EXAMPLE */
const Login = (props: LoginProps) => {
    const history = useHistory();
	const [name, setName] = useState<string>('');
    const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
	const [email, setEmail] = useState<string>('');
    const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
	const [password, setPassword] = useState<string>('');
    const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    

	useEffect(() => {}, []);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        apiService('/auth/register/', 'POST', {email, password, name})
        .then(serverRes => {
            localStorage.setItem('token', serverRes);
            history.push('/books')
        })
    }

	return (
		<main className="container my-5">
			<input value={name} onChange={handleSetName} placeholder="name"/>
			<input value={email} onChange={handleSetEmail} placeholder="email"/>
			<input value={password} onChange={handleSetPassword} placeholder="password"/>
            <button onClick={handleSubmit}>Register</button>
		</main>
	);
};

interface LoginProps {}

export default Login;
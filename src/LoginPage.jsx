import { useState } from 'react';
import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';

export const LoginPage = () => {
	const auth = useAuth();
	const [userName, setUserName] = useState('');

	const login = e => {
		e.preventDefault();
		auth.login({ userName });
	};

	if (auth.user) {
		return <Navigate to='/profile' />;
	}

	return (
		<>
			<div className='container m-5'>
				<h1>Login</h1>
				<form
					className='row'
					onSubmit={e => {
						login(e);
					}}>
					<div className='col-auto'>
						<label className='visually-hidden' htmlFor='user'>
							Name User
						</label>
						<input
							className='form-control'
							type='text'
							id='user'
							value={userName}
							onChange={e => setUserName(e.target.value)}
						/>
					</div>
					<button className='col-auto btn btn-primary mb-3' type='submit'>
						Login
					</button>
				</form>
			</div>
		</>
	);
};

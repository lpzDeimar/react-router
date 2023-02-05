import { useAuth } from './auth';

const LogoutPage = () => {
	const auth = useAuth();

	const logout = e => {
		e.preventDefault();
		auth.logout();
	};

	return (
		<>
			<div className='container m-5'>
				<h1>Logout</h1>
				<form
					onSubmit={e => {
						logout(e);
					}}>
					<label htmlFor='user'>Quieres salir</label>
					<button className='btn btn-danger ms-2' type='submit'>
						Login
					</button>
				</form>
			</div>
		</>
	);
};

export default LogoutPage;

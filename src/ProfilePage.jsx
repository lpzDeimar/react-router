import { useAuth } from './auth';

export const ProfilePage = () => {
	const auth = useAuth();

	return (
		<article className='m-5'>
			<h2>Profile</h2>
			<p>{auth.user.userName}</p>
		</article>
	);
};

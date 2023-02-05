import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';

export const Menu = () => {
	const auth = useAuth();

	return (
		<nav className='navbar navbar-expand-lg bg-dark'>
			<ul className='navbar-nav container-fluid container'>
				{routes.map((route, i) => {
					if ((route.private && !auth.user) || (route.privateOnly && auth.user))
						return null;
					return (
						<li className='nav-item' key={`${i}-${route.text}`}>
							<NavLink
								end // para que el home no paresca activo siempre
								style={({ isActive }) => ({
									color: isActive ? '#e16' : '#333',
								})}
								to={route.to}>
								{route.text}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

const routes = [];
routes.push({
	to: '/',
	text: 'Home',
	private: false,
});
routes.push({
	to: '/blog',
	text: 'Blog',
	private: false,
});
routes.push({
	to: '/profile',
	text: 'profile',
	private: true,
});
routes.push({
	to: '/login',
	text: 'login',
	private: false,
	privateOnly: true,
});
routes.push({
	to: '/logout',
	text: 'logout',
	private: true,
});

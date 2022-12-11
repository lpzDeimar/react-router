import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Menu';
import { BlogPage } from './BlogPage';
import { HomePage } from './HomePage';
import { ProfilePage } from './ProfilePage';

export const App = () => {
	return (
		<HashRouter>
			<Menu />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/blog' element={<BlogPage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='/*' element={<h1>Not Found</h1>} />
			</Routes>
		</HashRouter>
	);
};

import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Menu';
import { BlogPage } from './BlogPage';
import { HomePage } from './HomePage';
import { ProfilePage } from './ProfilePage';
import { BlogPost } from './BlogPost';
import { LoginPage } from './LoginPage';
import LogoutPage from './LogoutPage';
import './App.css';
import { AuthProvider, AuthRoute } from './auth';

export const App = () => {
	return (
		// by spa
		// /#/
		// /#/blog
		// /#/blog/profile
		<HashRouter>
			<AuthProvider>
				<Menu />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/blog' element={<BlogPage />}>
						<Route path=':slug' element={<BlogPost />} />
					</Route>
					<Route path='/login' element={<LoginPage />} />
					<Route
						path='/logout'
						element={
							<AuthRoute>
								<LogoutPage />
							</AuthRoute>
						}
					/>
					<Route
						path='/profile'
						element={
							<AuthRoute>
								<ProfilePage />
							</AuthRoute>
						}
					/>
					<Route path='/*' element={<h1>Not Found</h1>} />
				</Routes>
			</AuthProvider>
		</HashRouter>
	);
};

import { useContext, useState, createContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const adminList = ['Deimar', 'Vannesa'];

function AuthProvider({ children }) {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);

	const login = ({ userName }) => {
		const isAdmin = adminList.find(admin => admin === userName);

		setUser({
			userName,
			isAdmin,
		});
		navigate('/profile');
	};

	const logout = () => {
		setUser(null);
		navigate('/');
	};

	const auth = { user, login, logout };

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function AuthRoute({ children }) {
	const auth = useAuth();

	if (!auth.user) {
		return <Navigate to='/login' />;
	} else {
		return children;
	}
}

function useAuth() {
	const auth = useContext(AuthContext);
	return auth;
}

export { AuthProvider, useAuth, AuthRoute };

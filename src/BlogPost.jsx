import { useNavigate, useParams } from 'react-router-dom';
import { blogdata } from './blogdata';
import { useAuth } from './auth';

export const BlogPost = () => {
	const { slug } = useParams();
	const auth = useAuth();

	const blogpost = blogdata.find(item => item.slug === slug);

	const canDelete =
		auth.user?.isAdmin || blogpost.author === auth.user?.userName;

	const navigate = useNavigate();

	return (
		<>
			<h2>{blogpost.title}</h2>
			<button
				className='btn btn-primary'
				onClick={() => {
					navigate('/blog'); // -1 una version para atras
				}}>
				Volver al blog
			</button>
			<p>{blogpost.author}</p>
			<p>{blogpost.content}</p>
			{canDelete && <button className='btn btn-danger'>Eliminar Post</button>}
		</>
	);
};

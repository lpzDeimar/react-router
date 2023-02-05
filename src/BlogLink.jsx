import { Link } from 'react-router-dom';

export const BlogLink = ({ post }) => {
	return (
		<>
			<li>
				<Link to={`/blog/${post.slug}`}>{post.title}</Link>
			</li>
		</>
	);
};

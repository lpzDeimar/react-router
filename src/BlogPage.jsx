import { Outlet } from 'react-router-dom';
import { blogdata } from './blogdata';
import { BlogLink } from './BlogLink';

export const BlogPage = () => {
	return (
		<>
			<h1>Blog</h1>
			{blogdata.map((post, i) => (
				<ul key={`blog-${post.slug}`}>
					<BlogLink post={post} />
				</ul>
			))}
			<Outlet />
		</>
	);
};

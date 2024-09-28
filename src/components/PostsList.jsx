import React from 'react';
import { useGetPostsQuery } from '../features/api/postsApiSlice';
import EditPost from './EditPost';
import DeletePost from './DeletePost';

const PostsList = () => {
    const { data: posts, error, isLoading, refetch } = useGetPostsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching posts</div>;

    return (
        <div>
            <button onClick={refetch}>Refresh</button>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <EditPost post={post} />
                        <DeletePost postId={post.id} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsList;

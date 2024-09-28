import React from 'react';
import { useDeletePostMutation } from '../features/api/postsApiSlice';

const DeletePost = ({ postId }) => {
    const [deletePost] = useDeletePostMutation();

    const handleDelete = async () => {
        await deletePost(postId);
    };

    return <button onClick={handleDelete}>Delete Post</button>;
};

export default DeletePost;

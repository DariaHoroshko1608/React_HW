import React, { useState } from 'react';
import { useUpdatePostMutation } from '../features/api/postsApiSlice';

const EditPost = ({ post }) => {
    const [updatePost] = useUpdatePostMutation();
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updatePost({ id: post.id, title, body });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button type="submit">Update Post</button>
        </form>
    );
};

export default EditPost;

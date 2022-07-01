import React from 'react';
import { Link } from '@mui/material';

const PostsList = ({posts}) => {
    return (
        <>
            {posts.map( post => (
                <Link
                    key={post.objectID}
                    href={post.url}
                >
                    {post.title || post.story_title}
                </Link>
            ))}
        </>
    );
};

export default PostsList;
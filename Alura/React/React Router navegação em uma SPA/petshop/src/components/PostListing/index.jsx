import React, { useEffect, useState } from 'react';
import { search } from 'api';
import { Link } from 'react-router-dom';

const PostListing = ({ url }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    search(url, setPosts);
  }, [url]);

  return (
    <section className="posts container">
      {posts.map(post => (
        <Link
          className={`cartao-post cartao-post--${post.categoria}`}
          key={post.id}
          to="#"
        >
          <article key={post.id}>
            <h3 className="cartao-post__titulo">{post.title}</h3>
            <p className="cartao-post__meta">{post.metadescription}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default PostListing;

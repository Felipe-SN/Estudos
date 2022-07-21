import { search } from 'api';
import React, { useEffect, useState } from 'react';
import 'assets/css/post.css';
import { useNavigate, useParams } from 'react-router-dom';

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    search(`posts/${id}`, setPost).catch(() => navigate('/404'));
  }, [id, navigate]);

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="cartao__texto">{post.body}</p>
      </article>
    </main>
  );
};

export default Post;

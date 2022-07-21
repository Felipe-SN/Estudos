import 'assets/css/blog.css';
import { Link, useParams } from 'react-router-dom';
import { search } from 'api';
import CategoryListing from 'components/CategoryListing';
import PostListing from 'components/PostListing';
import React, { useEffect, useState } from 'react';

const Category = () => {
  const { id } = useParams();

  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    search(`categorias/${id}`, category =>
      setSubCategories(category.subcategorias)
    );
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <CategoryListing />
      <ul className="lista-categorias container flex">
        {subCategories.map(subCategory => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
            key={subCategory}
          >
            <Link to={`/categoria/${id}/${subCategory}/`}>{subCategory}</Link>
          </li>
        ))}
      </ul>
      <PostListing url={`posts?categoria=${id}`} />
    </>
  );
};

export default Category;

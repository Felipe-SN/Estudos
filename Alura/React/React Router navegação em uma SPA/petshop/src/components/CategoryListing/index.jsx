import 'assets/css/blog.css';
import { Link } from 'react-router-dom';
import { search } from 'api';
import React, { useEffect, useState } from 'react';

const CategoryListing = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    search('categorias', setCategories);
  }, []);

  return (
    <ul className="lista-categorias container flex">
      {categories.map(category => (
        <Link to={`/categoria/${category.id}`} key={category.id}>
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${category.id}`}
          >
            {category.nome}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default CategoryListing;

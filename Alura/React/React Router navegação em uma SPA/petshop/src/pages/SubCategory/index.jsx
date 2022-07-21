import 'assets/css/blog.css';
import { useParams } from 'react-router-dom';
import CategoryListing from 'components/CategoryListing';
import PostListing from 'components/PostListing';
import React from 'react';

const SubCategory = () => {
  const { subCategory } = useParams();

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <CategoryListing />
      <PostListing url={`posts?subcategoria=${subCategory}`} />
    </>
  );
};

export default SubCategory;

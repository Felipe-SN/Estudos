import CategoryListing from 'components/CategoryListing';
import PostListing from 'components/PostListing';
import React from 'react';

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <CategoryListing />
      <PostListing url={'posts'} />
    </main>
  );
};

export default Home;


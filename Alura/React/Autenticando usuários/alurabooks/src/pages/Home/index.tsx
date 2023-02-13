import Banner from 'components/Banner';
import books from 'data/books.json';
import Highlight from 'components/Highlights';

const Home = () => {
  return (
    <>
      <Banner
        title="Já sabe por onde começar?"
        subTitle="Encontre em nossa estante o que precisa para seu desenvolvimento!"
        haveSearchField={true}
      />
      <Highlight books={books} title="ÚLTIMOS LANÇAMENTOS" />
      <Highlight books={books} title="MAIS VENDIDOS" />
    </>
  );
};

export default Home;

import Banner from "components/Banner";
import books from "data/books.json";
import categories from "data/categorias.json";
import Highlight from "components/Highlights";
import TagSection from "components/TagSection";
import sortByLength from "helpers/sortByLength";
import NewsLetter from "components/NewsLatter";

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
      <TagSection categories={sortByLength(categories)} />
      <NewsLetter />
    </>
  );
};

export default Home;

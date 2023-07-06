import Banner from 'components/Banner';
import Highlight from 'components/Highlights';
import NewsLetter from 'components/NewsLatter';
import TagSection from 'components/TagSection';
import useBookQueryHighlights from 'state/reactQuery/hooks/useBookQueryHighlights';
import styled from 'styled-components';

export default function Home() {
  const { releases, bestSellers } = useBookQueryHighlights();
  return (
    <HomeSection>
      <Banner
        title="Já sabe por onde começar?"
        subTitle="Encontre em nossa estante o que precisa para seu desenvolvimento!"
        haveSearchField={true}
      />
      <Highlight books={releases.data} isLoading={releases.isLoading} title="ÚLTIMOS LANÇAMENTOS" />
      <Highlight books={bestSellers.data} isLoading={bestSellers.isLoading} title="MAIS VENDIDOS" />
      <TagSection />
      <NewsLetter />
    </HomeSection>
  );
}

const HomeSection = styled.section`
  display: grid;
`;

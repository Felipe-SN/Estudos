import { useReactiveVar } from '@apollo/client';
import Banner from 'components/Banner';
import Highlight from 'components/Highlights';
import NewsLetter from 'components/NewsLatter';
import TagSection from 'components/TagSection';
import { useHighlightsQuery } from 'graphQL/books/hooks';
import { highlightsVar } from 'graphQL/books/state';
import styled from 'styled-components';

export default function Home() {
  const { loading } = useHighlightsQuery();
  const { lancamentos, maisVendidos } = useReactiveVar(highlightsVar);
  return (
    <HomeSection>
      <Banner
        title="Já sabe por onde começar?"
        subTitle="Encontre em nossa estante o que precisa para seu desenvolvimento!"
        haveSearchField={true}
      />
      <Highlight books={lancamentos} isLoading={loading} title="ÚLTIMOS LANÇAMENTOS" />
      <Highlight books={maisVendidos} isLoading={loading} title="MAIS VENDIDOS" />
      <TagSection />
      <NewsLetter />
    </HomeSection>
  );
}

const HomeSection = styled.section`
  display: grid;
`;

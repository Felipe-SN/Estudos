import { getHighlights } from 'Services/apiServices';
import { useQuery } from '@tanstack/react-query';
import Banner from 'components/Banner';
import Highlight from 'components/Highlights';
import NewsLetter from 'components/NewsLatter';
import TagSection from 'components/TagSection';

export default function Home() {
  const { data: releases } = useQuery(['getReleases'], () => getHighlights('lancamentos'));
  const { data: bestSellers } = useQuery(['getBestSellers'], () => getHighlights('mais-vendidos'));

  return (
    <>
      <Banner
        title="Já sabe por onde começar?"
        subTitle="Encontre em nossa estante o que precisa para seu desenvolvimento!"
        haveSearchField={true}
      />
      {releases && <Highlight books={releases} title="ÚLTIMOS LANÇAMENTOS" />}
      {bestSellers && <Highlight books={bestSellers} title="MAIS VENDIDOS" />}
      <TagSection />
      <NewsLetter />
    </>
  );
}

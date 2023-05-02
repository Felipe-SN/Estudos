import apiService from 'Services/apiService';
import Banner from 'components/Banner';
import Highlight from 'components/Highlights';
import { useEffect, useState } from 'react';
import { Book } from 'types/Book';

export default function Home() {
  const [releases, setReleases] = useState<Book[]>();
  const [bestSellers, setBestSellers] = useState<Book[]>();

  useEffect(() => {
    requestCalls.get<Book[]>('/public/lancamentos').then(res => setReleases(res));
    requestCalls.get<Book[]>('/public/mais-vendidos').then(res => setBestSellers(res));
  }, []);

  return (
    <>
      <Banner
        title="Já sabe por onde começar?"
        subTitle="Encontre em nossa estante o que precisa para seu desenvolvimento!"
        haveSearchField={true}
      />
      {releases && <Highlight books={releases} title="ÚLTIMOS LANÇAMENTOS" />}
      {bestSellers && <Highlight books={bestSellers} title="MAIS VENDIDOS" />}
    </>
  );
}

const { requestCalls } = apiService();

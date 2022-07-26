import {
  NewsItemImageUrl01,
  NewsItemImageDescription01,
  NewsItemDate01,
  NewsItemTitle01,
  NewsItemImageUrl02,
  NewsItemImageDescription02,
  NewsItemDate02,
  NewsItemTitle02,
  NewsItemImageUrl03,
  NewsItemImageDescription03,
  NewsItemDate03,
  NewsItemTitle03,
  NewsItemImageUrl04,
  NewsItemImageDescription04,
  NewsItemDate04,
  NewsItemTitle04
} from 'utils/Mocks/NewsItem';
import NewsItem from 'components/NewsItem';
import './styles.css';

function News() {
  return (
    <article id='newsContainer'>
      <header>
        <hgroup>
          <h3>Novidades!</h3>
          <h1>Não perca essas novidades!!</h1>
          <h2>por Marcus Vinícius</h2>
          <h3 className='alignRight'>Atualizado em 26/Julho/2022</h3>
          <h3>AQUI VAI UMA IMAGEM</h3>
        </hgroup>
      </header>

      <NewsItem
        imageUrl={NewsItemImageUrl01}
        imageDescription={NewsItemImageDescription01}
        date={NewsItemDate01}
        title={NewsItemTitle01}
      />

      <NewsItem
        imageUrl={NewsItemImageUrl02}
        imageDescription={NewsItemImageDescription02}
        date={NewsItemDate02}
        title={NewsItemTitle02}
      />

      <NewsItem
        imageUrl={NewsItemImageUrl03}
        imageDescription={NewsItemImageDescription03}
        date={NewsItemDate03}
        title={NewsItemTitle03}
      />

      <NewsItem
        imageUrl={NewsItemImageUrl04}
        imageDescription={NewsItemImageDescription04}
        date={NewsItemDate04}
        title={NewsItemTitle04}
      />
    </article>
  );
};

export default News;
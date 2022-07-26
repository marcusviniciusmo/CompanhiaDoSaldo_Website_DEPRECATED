import { NewsItemData } from 'utils/Mocks/NewsItem';
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

      {
        NewsItemData.map((item) => {
          return (
            <NewsItem
            key={item.Id}
            Image={item.Image}
            Date={item.Date}
            Title={item.Title}
          />      
          )
        })
      }
    </article>
  );
};

export default News;
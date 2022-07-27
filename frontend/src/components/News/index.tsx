import { NewsData } from 'utils/Mocks/News';
import NewsItem from 'components/NewsItem';
import './styles.css';

function News() {
  return (
    <article id='newsContainer'>
      <header>
        <hgroup>
          <h3>{NewsData.Header01}</h3>
          <h1>{NewsData.Header02}</h1>
          <h2>{NewsData.Author}</h2>
          <h3 className='alignRight'>{NewsData.Updated}</h3>
        </hgroup>
      </header>

      {
        NewsData.NewsList.map((item) => {
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
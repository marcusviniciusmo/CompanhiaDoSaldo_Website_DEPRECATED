import {
  NewsHeader01,
  NewsHeader02,
  NewsAuthor,
  NewsUpdated,
  NewsItemData
} from 'utils/Mocks/News';
import NewsItem from 'components/NewsItem';
import './styles.css';

function News() {
  return (
    <article id='newsContainer'>
      <header>
        <hgroup>
          <h3>{NewsHeader01}</h3>
          <h1>{NewsHeader02}</h1>
          <h2>{NewsAuthor}</h2>
          <h3 className='alignRight'>{NewsUpdated}</h3>
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
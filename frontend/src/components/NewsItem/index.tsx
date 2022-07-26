import { INewsItem } from 'utils/Types/NewsItem';
import './styles.css';

function NewsItem({ Image, Date, Title }: INewsItem) {
  return (
    <div id='newsItemContainer'>

      <img src={Image.Url} alt={Image.Description} />

      <p>
        <span id='dateNewsItem'>{Date}</span>
        <span id='titleNewsItem'>{Title}</span>
      </p>
    </div>
  );
};

export default NewsItem;
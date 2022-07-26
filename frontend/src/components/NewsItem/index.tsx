import { INewsItem } from 'utils/Types/NewsItem';

function NewsItem({ Image, Date, Title }: INewsItem) {
  return (
    <>
      NEWS_ITEM Component

      <img src={Image.Url} alt={Image.Description} />

      <p>
        <span>{Date}</span>
        <span>{Title}</span>
      </p>
    </>
  );
};

export default NewsItem;
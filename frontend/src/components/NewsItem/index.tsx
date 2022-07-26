type Props = {
  imageUrl: string;
  imageDescription: string;
  date: string;
  title: string;
};

function NewsItem({ imageUrl, imageDescription, date, title }: Props) {
  return (
    <>
      NEWS_ITEM Component

      <img src={imageUrl} alt={imageDescription} />

      <p>
        <span>{date}</span>
        <span>{title}</span>
      </p>
    </>
  );
};

export default NewsItem;
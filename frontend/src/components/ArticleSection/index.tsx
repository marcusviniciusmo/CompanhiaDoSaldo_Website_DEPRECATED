import { IArticleSection } from 'utils/Types/ArticleSection';

function ArticleSection({ children }: IArticleSection) {
  return (
    <>
      <h1>ARTICLE_SECTION Component</h1>
      {children}
    </>
  );
};

export default ArticleSection;
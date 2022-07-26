import { IArticleAside } from 'utils/Types/ArticleAside';

function ArticleAside({ children }: IArticleAside) {
  return (
    <>
      <h1>ARITCLE_ASIDE Component</h1>
      {children}
    </>
  );
};

export default ArticleAside;
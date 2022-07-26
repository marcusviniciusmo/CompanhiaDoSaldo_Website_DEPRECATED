import { IArticleAside } from 'utils/Types/ArticleAside';
import './styles.css';

function ArticleAside({ children }: IArticleAside) {
  return (
    <aside id='articleAsideContainer'>
      {children}
    </aside>
  );
};

export default ArticleAside;
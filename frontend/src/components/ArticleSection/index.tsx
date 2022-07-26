import { IArticleSection } from 'utils/Types/ArticleSection';
import './styles.css';

function ArticleSection({ children }: IArticleSection) {
  return (
    <section id='articleSectionContainer'>
      {children}
    </section>
  );
};

export default ArticleSection;
import { BreadcrumbHome } from 'utils/Mocks/Breadcrumb';
import Header from "components/Header";
import ArticleSection from 'components/ArticleSection';
import Breadcrumb from "components/Breadcrumb";
import About from 'components/About';
import Localization from 'components/Localization';
import ArticleAside from 'components/ArticleAside';
import News from 'components/News';
import Footer from "components/Footer";

function Home() {
  return (
    <section className='viewInterface'>
      <Header />

      <ArticleSection>
        <Breadcrumb
          Path={BreadcrumbHome.Path}
        />

        <About />

        <Localization />
      </ArticleSection>

      <ArticleAside>
        <News />
      </ArticleAside>

      <Footer />
    </section>
  );
};

export default Home;
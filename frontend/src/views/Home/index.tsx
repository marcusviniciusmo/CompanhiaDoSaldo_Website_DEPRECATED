import { BreadcrumbHome } from 'utils/Mocks/Breadcrumb';
import Header from "components/Header";
import ArticleSection from 'components/ArticleSection';
import Breadcrumb from "components/Breadcrumb";
import About from 'components/About';
import Localization from 'components/Localization';
import ArticleAside from 'components/ArticleAside';
import Footer from "components/Footer";

function Home() {
  return (
    <>
      <h1>VIEW HOME</h1>
      <h1>Companhia do Saldo - Página Home</h1>

      <Header />

      <h1>BODY</h1>

      <ArticleSection>
        <Breadcrumb
          Path={BreadcrumbHome.Path}
        />

        <About />

        <Localization />
      </ArticleSection>

      <ArticleAside>
        <h3>Novidades!</h3>
        <h1>Não perca essas novidades!!</h1>
        <h2>por Marcus Vinícius</h2>
        <h3>Atualizado em 21/Maio/2022</h3>
        <h3>AQUI VAI UMA IMAGEM</h3>
      </ArticleAside>

      <Footer />
    </>
  );
};

export default Home;
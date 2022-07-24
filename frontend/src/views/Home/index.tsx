import { BreadcrumbHome } from 'utils/Mocks/Breadcrumb';
import Header from "components/Header";
import ArticleSection from 'components/ArticleSection';
import Breadcrumb from "components/Breadcrumb";
import About from 'components/About';
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

        <h2>Localização</h2>
        <p>
          Rua 24 de Maio,
          Número: 872
          Centro, Fortaleza-CE
          Localizada entre a Rua Pedro Pereira e a Rua Pedro I.
        </p>
        <h3>AQUI VAI UM MAPA</h3>
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
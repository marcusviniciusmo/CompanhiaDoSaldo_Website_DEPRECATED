import { BreadcrumbProdutos } from 'utils/Mocks/Breadcrumb';
import Header from "components/Header";
import Breadcrumb from "components/Breadcrumb";
import Gallery from 'components/Gallery';
import Footer from "components/Footer";

function Produtos() {
  return (
    <>
      <h1>VIEW PRODUTOS</h1>
      <h1>Companhia do Saldo - Página Produtos</h1>

      <Header />

      <h1>BODY</h1>

      <Breadcrumb
        Path={BreadcrumbProdutos.Path}
        Title={BreadcrumbProdutos.Title}
      />

      <Gallery />

      <Footer />
    </>
  );
};

export default Produtos;
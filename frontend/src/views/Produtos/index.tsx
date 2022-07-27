import { BreadcrumbProdutos } from 'utils/Mocks/Breadcrumb';
import Header from "components/Header";
import Breadcrumb from "components/Breadcrumb";
import Gallery from 'components/Gallery';
import Footer from "components/Footer";

function Produtos() {
  return (
    <section className='viewInterface'>
      <Header />

      <Breadcrumb
        Path={BreadcrumbProdutos.Path}
        Title={BreadcrumbProdutos.Title}
      />

      <Gallery />

      <Footer />
    </section>
  );
};

export default Produtos;
import { BreadcrumbFornecedores } from 'utils/Mocks/Breadcrumb';
import Header from "components/Header";
import Breadcrumb from "components/Breadcrumb";
import Suppliers from 'components/Suppliers';
import Footer from "components/Footer";

function Fornecedores() {
  return (
    <section className='viewInterface'>
      <Header />

      <Breadcrumb
        Path={BreadcrumbFornecedores.Path}
        Title={BreadcrumbFornecedores.Title}
      />

      <Suppliers />      

      <Footer />
    </section>
  );
};

export default Fornecedores;
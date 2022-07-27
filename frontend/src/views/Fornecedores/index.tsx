import { BreadcrumbFornecedores } from 'utils/Mocks/Breadcrumb';
import Header from "components/Header";
import Breadcrumb from "components/Breadcrumb";
import Suppliers from 'components/Suppliers';
import Footer from "components/Footer";

function Fornecedores() {
  return (
    <>
      <h1>VIEW FORNECEDORES</h1>
      <h1>Companhia do Saldo - Página Fornecedores</h1>

      <Header />

      <h1>BODY</h1>

      <Breadcrumb
        Path={BreadcrumbFornecedores.Path}
        Title={BreadcrumbFornecedores.Title}
      />

      <Suppliers />      

      <Footer />
    </>
  );
};

export default Fornecedores;
import { BreadcrumbPedidos } from 'utils/Mocks/Breadcrumb';
import Header from "components/Header";
import Breadcrumb from "components/Breadcrumb";
import Orders from 'components/Orders';
import Footer from "components/Footer";

function Pedidos() {
  return (
    <>
      <h1>VIEW PEDIDOS</h1>
      <h1>Companhia do Saldo - Página Pedidos</h1>

      <Header />

      <h1>BODY</h1>

      <Breadcrumb
        Path={BreadcrumbPedidos.Path}
        Title={BreadcrumbPedidos.Title}
      />

      <Orders />

      <Footer />
    </>
  );
};

export default Pedidos;
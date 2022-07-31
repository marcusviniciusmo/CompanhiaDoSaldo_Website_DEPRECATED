import Form from 'components/Form';
import Identification from "components/Identification";
import Address from "components/Address";
import Message from "components/Message";
import Product from "components/Product";

function Orders() {
  const content = [Identification, Address, Message, Product];

  return (
    <>
      <h1>ORDERS Component</h1>

      <p>
        Gostaria de facilitar suas compras? Se cadastre, e com isso, você poderá
        fazer seus pedidos, sem sair de casa.
      </p>

      <h3>FORMULÁRIO</h3>
      <Form content={content} />

      <h3>AQUI VAI UM BOTÃO</h3>
    </>
  );
};

export default Orders;
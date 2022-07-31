import Form from 'components/Form';

function Orders() {
  const contentUrls = 
    `/pedidos/identification,
    /pedidos/address,
    /pedidos/message,
    /pedidos/product`;

  return (
    <>
      <h1>ORDERS Component</h1>

      <p>
        Gostaria de facilitar suas compras? Se cadastre, e com isso, você poderá
        fazer seus pedidos, sem sair de casa.
      </p>

      <h3>FORMULÁRIO</h3>

      <Form content={contentUrls} />

      <h3>AQUI VAI UM BOTÃO</h3>
    </>
  );
};

export default Orders;
import MenuItem from "components/MenuItem";

function Menu() {
  return (
    <>
      <h1>MENU Component</h1>
      <h1>Menu Principal</h1>
      <h4><MenuItem to='/' buttonText='Home' /></h4>
      <h4><MenuItem to='/produtos' buttonText='Produtos' /></h4>
      <h4><MenuItem to='/fornecedores' buttonText='Fornecedores' /></h4>
      <h4><MenuItem to='/pedidos' buttonText='Pedidos' /></h4>
      <h4><MenuItem to='/contato' buttonText='Contato' /></h4>
    </>
  );
};

export default Menu;
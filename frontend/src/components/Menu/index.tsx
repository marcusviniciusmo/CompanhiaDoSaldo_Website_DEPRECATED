import MenuItem from "components/MenuItem";

function Menu() {
  return (
    <>
      <h1>MENU Component</h1>
      <h1>Menu Principal</h1>
      <h3>AQUI VAI UM BOTÃO</h3>
      <h4><MenuItem buttonText='Home' /></h4>
      <h3>AQUI VAI UM BOTÃO</h3>
      <h4><MenuItem buttonText='Produtos' /></h4>
      <h3>AQUI VAI UM BOTÃO</h3>
      <h4><MenuItem buttonText='Fornecedores' /></h4>
      <h3>AQUI VAI UM BOTÃO</h3>
      <h4><MenuItem buttonText='Pedidos' /></h4>
      <h3>AQUI VAI UM BOTÃO</h3>
      <h4><MenuItem buttonText='Contato' /></h4>
    </>
  );
};

export default Menu;
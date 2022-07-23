import MenuItem from "components/MenuItem";

function Menu() {
  return (
    <>
      <h1>MENU Component</h1>
      <h1>Menu Principal</h1>
      <h4>
        <MenuItem
          Id={1}
          To='/'
          Text='Home' />
      </h4>
      <h4>
        <MenuItem
          Id={2}
          To='/produtos'
          Text='Produtos' />
      </h4>
      <h4>
        <MenuItem
          Id={3}
          To='/fornecedores'
          Text='Fornecedores' />
      </h4>
      <h4>
        <MenuItem
          Id={4}
          To='/pedidos'
          Text='Pedidos' />
      </h4>
      <h4>
        <MenuItem
          Id={5}
          To='/contato'
          Text='Contato' />
      </h4>
    </>
  );
};

export default Menu;
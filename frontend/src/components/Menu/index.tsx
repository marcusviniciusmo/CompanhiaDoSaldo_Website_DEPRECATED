import {
  MenuButtonHomeId,
  MenuButtonHomeTo,
  MenuButtonHomeText,
  MenuButtonProdutosId,
  MenuButtonProdutosTo,
  MenuButtonProdutosText,
  MenuButtonFornecedoresId,
  MenuButtonFornecedoresTo,
  MenuButtonFornecedoresText,
  MenuButtonPedidosId,
  MenuButtonPedidosTo,
  MenuButtonPedidosText,
  MenuButtonContatoId,
  MenuButtonContatoTo,
  MenuButtonContatoText
} from 'utils/Mocks/Menu';
import MenuItem from "components/MenuItem";

function Menu() {
  return (
    <>
      <h1>MENU Component</h1>
      <h1>Menu Principal</h1>
      <h4>
        <MenuItem
          Id={MenuButtonHomeId}
          To={MenuButtonHomeTo}
          Text={MenuButtonHomeText}
        />
      </h4>
      <h4>
        <MenuItem
          Id={MenuButtonProdutosId}
          To={MenuButtonProdutosTo}
          Text={MenuButtonProdutosText}
        />
      </h4>
      <h4>
        <MenuItem
          Id={MenuButtonFornecedoresId}
          To={MenuButtonFornecedoresTo}
          Text={MenuButtonFornecedoresText}
        />
      </h4>
      <h4>
        <MenuItem
          Id={MenuButtonPedidosId}
          To={MenuButtonPedidosTo}
          Text={MenuButtonPedidosText}
        />
      </h4>
      <h4>
        <MenuItem
          Id={MenuButtonContatoId}
          To={MenuButtonContatoTo}
          Text={MenuButtonContatoText}
        />
      </h4>
    </>
  );
};

export default Menu;
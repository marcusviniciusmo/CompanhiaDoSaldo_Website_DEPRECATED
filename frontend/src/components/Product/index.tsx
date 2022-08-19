import { IClientProduct } from 'utils/Types/Product';
import { ClientIdentification } from 'utils/Mocks/Identification';
import { ClientProduct, ProductData } from 'utils/Mocks/Product';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "components/Input";
import './styles.css';

function Product() {
  const [inputProduct, setInputProduct] = useState<string | undefined>('');
  const [inputQuantity, setInputQuantity] = useState<string | undefined>('');
  const [inputColor, setInputColor] = useState<string | undefined>('#0033FF');

  useEffect(() => {
    const clientStorage = localStorage.getItem('client.Identification');

    if (clientStorage) {
      const client = JSON.parse(clientStorage);

      if (client.Cpf === ClientIdentification.Cpf)
      getProductByCpf(ClientProduct);
    }
  }, []);

  const getProductByCpf = (client: IClientProduct) => {
    setInputProduct(client.Product);
    setInputQuantity(client.Quantity);
    setInputColor(client.Color);
  };

  const handleInput = (event: any) => {
    const id = event.target.id;
    const value = event.target.value;

    if (id === 'fieldProduct')
      setInputProduct(value);
    else if (id === 'fieldQuantity')
      setInputQuantity(value);
    else if (id === 'fieldColor')
      setInputColor(value);
  };

  const clearInputProduct = () => setInputProduct('');

  const clearInputQuantity = () => setInputQuantity('');

  return (
    <form className='ordersFormContainer'>
      <fieldset id='product'>
        <legend>{ProductData.Legend}</legend>

        <Input
          Label={ProductData.Inputs[0].Label}
          Type={ProductData.Inputs[0].Type}
          Name={ProductData.Inputs[0].Name}
          Id={ProductData.Inputs[0].Id}
          Value={inputProduct}
          OnChange={() => handleInput}
          Clear={() => clearInputProduct}
        />

        <Input
          Label={ProductData.Inputs[1].Label}
          Type={ProductData.Inputs[1].Type}
          Name={ProductData.Inputs[1].Name}
          Id={ProductData.Inputs[1].Id}
          Value={inputQuantity}
          OnChange={() => handleInput}
          Clear={() => clearInputQuantity}
        />

        <Input
          Label={ProductData.Inputs[2].Label}
          Type={ProductData.Inputs[2].Type}
          Name={ProductData.Inputs[2].Name}
          Id={ProductData.Inputs[2].Id}
          Value={inputColor}
          OnChange={() => handleInput}
        />

        <div className="formButtonsContainer">
          <Link to='/pedidos/message'>
            <button className='formButton rewindButton'>
              {ProductData.PreviousTextButton}
            </button>
          </Link>

          <Link to='#'>
            <button className='formButton forwardButton'>
              {ProductData.SubmitTextButton}
            </button>
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default Product;
import { useState } from "react";
import Input from "components/Input";

function Product() {
  const [inputProduct, setInputProduct] = useState<string | undefined>('');
  const [inputQuantity, setInputQuantity] = useState<string | undefined>('');
  const [inputColor, setInputColor] = useState<string | undefined>('#0033FF');

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

  return (
    <>
      PRODUCT Component

      <h3>Quero comprar</h3>

      <Input
        label='Produto'
        type='text'
        name='fieldProduct'
        id='fieldProduct'
        value={inputProduct}
        onChange={() => handleInput}
      />

      <Input
        label='Quantidade'
        type='text'
        name='fieldQuantity'
        id='fieldQuantity'
        value={inputQuantity}
        onChange={() => handleInput}
      />

      <Input
        label='Cor'
        type='color'
        name='fieldColor'
        id='fieldColor'
        value={inputColor}
        onChange={() => handleInput}
      />
    </>
  );
};

export default Product;
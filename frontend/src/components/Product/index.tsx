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

  const clearInputProduct = () => setInputProduct('');

  const clearInputQuantity = () => setInputQuantity('');

  return (
    <>
      PRODUCT Component

      <h3>Quero comprar</h3>

      <Input
        Label='Produto'
        Type='text'
        Name='fieldProduct'
        Id='fieldProduct'
        Value={inputProduct}
        OnChange={() => handleInput}
        Clear={() => clearInputProduct}
      />

      <Input
        Label='Quantidade'
        Type='text'
        Name='fieldQuantity'
        Id='fieldQuantity'
        Value={inputQuantity}
        OnChange={() => handleInput}
        Clear={() => clearInputQuantity}
      />

      <Input
        Label='Cor'
        Type='color'
        Name='fieldColor'
        Id='fieldColor'
        Value={inputColor}
        OnChange={() => handleInput}
      />
    </>
  );
};

export default Product;
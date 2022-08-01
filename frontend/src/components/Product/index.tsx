import Input from "components/Input";

function Product() {
  return (
    <>
      PRODUCT Component

      <h3>Quero comprar</h3>

      <Input
        label='Produto'
        type='text'
        name='fieldProduct'
        id='fieldProduct'
      />

      <Input
        label='Quantidade'
        type='text'
        name='fieldQuantity'
        id='fieldQuantity'
      />

      <Input
        label='Cor'
        type='color'
        name='fieldColor'
        id='fieldColor'
      />
    </>
  );
};

export default Product;
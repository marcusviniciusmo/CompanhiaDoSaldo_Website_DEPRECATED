import Input from "components/Input";

function Product() {
  return (
    <>
      PRODUCT Component

      <h3>Quero comprar</h3>

      <h4>Produto</h4>
      <Input
        type='text'
        name='fieldProduct'
        id='fieldProduct'
      />

      <h4>Quantidade</h4>
      <Input
        type='text'
        name='fieldQuantity'
        id='fieldQuantity'
      />

      <h4>Cor</h4>
      <Input
        type='color'
        name='fieldColor'
        id='fieldColor'
      />
    </>
  );
};

export default Product;
import Input from "components/Input";

function Address() {
  return (
    <>
      ADDRESS Component

      <h3>Endereço do Cliente</h3>

      <h4>CEP</h4>
      <Input
        type='text'
        name='fieldCep'
        id='fieldCep'
      />

      <h4>Endereço</h4>
      <Input
        type='text'
        name='fieldAddress'
        id='fieldAddress'
      />

      <h4>Número</h4>
      <Input
        type='text'
        name='fieldNumber'
        id='fieldNumber'
      />

      <h4>Complemento</h4>
      <Input
        type='text'
        name='fieldComplement'
        id='fieldComplement'
      />

      <h4>Bairro</h4>
      <Input
        type='text'
        name='fieldDistrict'
        id='fieldDistrict'
      />

      <h4>Estado:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
      <h4>Cidade:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
    </>
  );
};

export default Address;
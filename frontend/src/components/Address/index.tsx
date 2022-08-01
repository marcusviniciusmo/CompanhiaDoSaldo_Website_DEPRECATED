import Input from "components/Input";
import Select from "components/Select";

function Address() {
  return (
    <>
      ADDRESS Component

      <h3>Endereço do Cliente</h3>

      <Input
        label='CEP'
        type='text'
        name='fieldCep'
        id='fieldCep'
      />

      <Input
        label='Endereço'
        type='text'
        name='fieldAddress'
        id='fieldAddress'
      />

      <Input
        label='Número'
        type='text'
        name='fieldNumber'
        id='fieldNumber'
      />

      <Input
        label='Complemento'
        type='text'
        name='fieldComplement'
        id='fieldComplement'
      />

      <Input
        label='Bairro'
        type='text'
        name='fieldDistrict'
        id='fieldDistrict'
      />

      <h4>Estado</h4>
      <Select
        name='fieldState'
        id='fieldState'
        content={[]}
      />

      <h4>Cidade</h4>
      <Select
        name='fieldCity'
        id='fieldCity'
        content={[]}
      />
    </>
  );
};

export default Address;
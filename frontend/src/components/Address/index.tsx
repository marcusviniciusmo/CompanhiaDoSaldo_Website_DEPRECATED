import { useState } from "react";
import Input from "components/Input";
import Select from "components/Select";

function Address() {
  const [inputCep, setInputCep] = useState<string | undefined>('');
  const [inputAddress, setInputAddress] = useState<string | undefined>('');
  const [inputNumber, setInputNumber] = useState<string | undefined>('');
  const [inputComplement, setInputComplement] = useState<string | undefined>('');
  const [inputDistrict, setInputDistrict] = useState<string | undefined>('');

  const handleInput = (event: any) => {
    const id = event.target.id;
    const value = event.target.value;

    if (id === 'fieldCep')
      setInputCep(value);
    else if (id === 'fieldAddress')
      setInputAddress(value);
    else if (id === 'fieldNumber')
      setInputNumber(value);
    else if (id === 'fieldComplement')
      setInputComplement(value);
    else if (id === 'fieldDistrict')
      setInputDistrict(value);
  };

  return (
    <>
      ADDRESS Component

      <h3>Endereço do Cliente</h3>

      <Input
        label='CEP'
        type='text'
        name='fieldCep'
        id='fieldCep'
        value={inputCep}
        onChange={() => handleInput}
      />

      <Input
        label='Endereço'
        type='text'
        name='fieldAddress'
        id='fieldAddress'
        value={inputAddress}
        onChange={() => handleInput}
      />

      <Input
        label='Número'
        type='text'
        name='fieldNumber'
        id='fieldNumber'
        value={inputNumber}
        onChange={() => handleInput}
      />

      <Input
        label='Complemento'
        type='text'
        name='fieldComplement'
        id='fieldComplement'
        value={inputComplement}
        onChange={() => handleInput}
      />

      <Input
        label='Bairro'
        type='text'
        name='fieldDistrict'
        id='fieldDistrict'
        value={inputDistrict}
        onChange={() => handleInput}
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
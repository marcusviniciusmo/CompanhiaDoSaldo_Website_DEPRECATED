import { useEffect, useState } from "react";
import axios from 'axios';
import Input from "components/Input";
import Select from "components/Select";
import './styles.css';

function Address() {
  const [inputCep, setInputCep] = useState<string | undefined>('');
  const [inputAddress, setInputAddress] = useState<string | undefined>('');
  const [inputNumber, setInputNumber] = useState<string | undefined>('');
  const [inputComplement, setInputComplement] = useState<string | undefined>('');
  const [inputDistrict, setInputDistrict] = useState<string | undefined>('');

useEffect(() => {
  axios.get(`https://viacep.com.br/ws/60020000/json/`)
  .then((response) => {
    console.log('response')
    console.log(response)
  })
}, []);

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

  const clearInputCep = () => setInputCep('');

  const clearInputAddress = () => setInputAddress('');

  const clearInputNumber = () => setInputNumber('');

  const clearInputComplement = () => setInputComplement('');

  const clearInputDistrict = () => setInputDistrict('');

  return (
    <form
      method='post'
      className='ordersFormContainer'
      action='mailto:marcus.viniciusmo@hotmail.com'
    >
      <fieldset id='address'>
        <legend>Endereço do Cliente</legend>

        <Input
          Label='CEP'
          Type='text'
          Name='fieldCep'
          Id='fieldCep'
          Value={inputCep}
          OnChange={() => handleInput}
          Clear={() => clearInputCep}
        />

        <Input
          Label='Endereço'
          Type='text'
          Name='fieldAddress'
          Id='fieldAddress'
          Value={inputAddress}
          OnChange={() => handleInput}
          Clear={() => clearInputAddress}
        />

        <Input
          Label='Número'
          Type='text'
          Name='fieldNumber'
          Id='fieldNumber'
          Value={inputNumber}
          OnChange={() => handleInput}
          Clear={() => clearInputNumber}
        />

        <Input
          Label='Complemento'
          Type='text'
          Name='fieldComplement'
          Id='fieldComplement'
          Value={inputComplement}
          OnChange={() => handleInput}
          Clear={() => clearInputComplement}
        />

        <Input
          Label='Bairro'
          Type='text'
          Name='fieldDistrict'
          Id='fieldDistrict'
          Value={inputDistrict}
          OnChange={() => handleInput}
          Clear={() => clearInputDistrict}
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
      </fieldset>
    </form>
  );
};

export default Address;
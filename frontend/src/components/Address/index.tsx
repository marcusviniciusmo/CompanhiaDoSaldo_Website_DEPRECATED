import {
  AddressLegend,
  InputCepLabel,
  InputCepType,
  InputCepName,
  InputCepId,
  InputAddressLabel,
  InputAddressType,
  InputAddressName,
  InputAddressId,
  InputNumberlabel,
  InputNumberType,
  InputNumberName,
  InputNumberId,
  InputComplementLabel,
  InputComplementType,
  InputComplementName,
  InputComplementId,
  InputDistrictLabel,
  InputDistrictType,
  InputDistrictName,
  InputDistrictId
} from 'utils/Mocks/Address';
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

    if (id === InputCepId)
      setInputCep(value);
    else if (id === InputAddressId)
      setInputAddress(value);
    else if (id === InputNumberId)
      setInputNumber(value);
    else if (id === InputComplementId)
      setInputComplement(value);
    else if (id === InputDistrictId)
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
        <legend>{AddressLegend}</legend>

        <Input
          Label={InputCepLabel}
          Type={InputCepType}
          Name={InputCepName}
          Id={InputCepId}
          Value={inputCep}
          OnChange={() => handleInput}
          Clear={() => clearInputCep}
        />

        <Input
          Label={InputAddressLabel}
          Type={InputAddressType}
          Name={InputAddressName}
          Id={InputAddressId}
          Value={inputAddress}
          OnChange={() => handleInput}
          Clear={() => clearInputAddress}
        />

        <Input
          Label={InputNumberlabel}
          Type={InputNumberType}
          Name={InputNumberName}
          Id={InputNumberId}
          Value={inputNumber}
          OnChange={() => handleInput}
          Clear={() => clearInputNumber}
        />

        <Input
          Label={InputComplementLabel}
          Type={InputComplementType}
          Name={InputComplementName}
          Id={InputComplementId}
          Value={inputComplement}
          OnChange={() => handleInput}
          Clear={() => clearInputComplement}
        />

        <Input
          Label={InputDistrictLabel}
          Type={InputDistrictType}
          Name={InputDistrictName}
          Id={InputDistrictId}
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
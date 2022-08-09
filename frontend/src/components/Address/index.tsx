import { AddressData } from 'utils/Mocks/Address';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
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

    if (id === AddressData.Inputs[0].Id)
      setInputCep(value);
    else if (id === AddressData.Inputs[1].Id)
      setInputAddress(value);
    else if (id === AddressData.Inputs[2].Id)
      setInputNumber(value);
    else if (id === AddressData.Inputs[3].Id)
      setInputComplement(value);
    else if (id === AddressData.Inputs[4].Id)
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
        <legend>{AddressData.Legend}</legend>

        <div className="inputRow">
          <Input
            Label={AddressData.Inputs[0].Label}
            Type={AddressData.Inputs[0].Type}
            Name={AddressData.Inputs[0].Name}
            Id={AddressData.Inputs[0].Id}
            Value={inputCep}
            OnChange={() => handleInput}
            Clear={() => clearInputCep}
          />

          <Input
            Label={AddressData.Inputs[1].Label}
            Type={AddressData.Inputs[1].Type}
            Name={AddressData.Inputs[1].Name}
            Id={AddressData.Inputs[1].Id}
            Value={inputAddress}
            OnChange={() => handleInput}
            Clear={() => clearInputAddress}
          />
        </div>

        <div className="inputRow">
          <Input
            Label={AddressData.Inputs[2].Label}
            Type={AddressData.Inputs[2].Type}
            Name={AddressData.Inputs[2].Name}
            Id={AddressData.Inputs[2].Id}
            Value={inputNumber}
            OnChange={() => handleInput}
            Clear={() => clearInputNumber}
          />

          <Input
            Label={AddressData.Inputs[3].Label}
            Type={AddressData.Inputs[3].Type}
            Name={AddressData.Inputs[3].Name}
            Id={AddressData.Inputs[3].Id}
            Value={inputComplement}
            OnChange={() => handleInput}
            Clear={() => clearInputComplement}
          />
        </div>

        <Input
          Label={AddressData.Inputs[4].Label}
          Type={AddressData.Inputs[4].Type}
          Name={AddressData.Inputs[4].Name}
          Id={AddressData.Inputs[4].Id}
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

        <div className="formButtonsContainer">
          <Link to='/pedidos/identification'>
            <button className='formButton rewindButton'>
              {AddressData.PreviousTextButton}
            </button>
          </Link>

          <Link to='/pedidos/message'>
            <button className='formButton forwardButton'>
              {AddressData.NextTextButton}
            </button>
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default Address;
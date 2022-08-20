import {
  ICepData,
  ICities,
  IClientAddress,
  IRegions,
  IStates
} from 'utils/Types/Address';
import { ClientIdentification } from 'utils/Mocks/Identification';
import { ClientAddress, AddressData } from 'utils/Mocks/Address';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { BuscaCepApi, ViaCepApi } from 'utils/Api';
import Input from "components/Input";
import Select from "components/Select";
import './styles.css';

function Address() {
  const [inputCep, setInputCep] = useState<string | undefined>('');
  const [cepData, setCepData] = useState<ICepData | undefined>();
  const [inputAddress, setInputAddress] = useState<string | undefined>('');
  const [inputNumber, setInputNumber] = useState<string | undefined>('');
  const [inputComplement, setInputComplement] = useState<string | undefined>('');
  const [inputDistrict, setInputDistrict] = useState<string | undefined>('');
  const [inputState, setInputState] = useState<string | undefined>('');
  const [inputCity, setInputCity] = useState<string | undefined>('');
  const [regionsList, setRegionsList] = useState<IRegions[]>([]);
  const [statesList, setStatesList] = useState<IStates[]>([]);
  const [citiesList, setCitiesList] = useState<ICities[]>([]);

  useEffect(() => {
    if (cepData) {
      getAddressByCep(cepData);
    }
  }, [cepData]);

  useEffect(() => {
    const clientStorage = localStorage.getItem('client.Identification');

    if (clientStorage) {
      const client = JSON.parse(clientStorage!);

      if (client.Cpf === ClientIdentification.Cpf)
        getAddressByCpf(ClientAddress);
    };
  }, []);

  useEffect(() => {
    if (inputCep?.length === 8) {
      ViaCepApi.get(`${inputCep}/json/`)
        .then((response) => {
          setCepData(response.data);
        });
    }
  }, [inputCep]);

  useEffect(() => {
    BuscaCepApi.get('regioes?orderBy=nome')
      .then((response) => {
        setRegionsList(response.data)
      });
  }, []);

  useEffect(() => {
    BuscaCepApi.get('estados?orderBy=nome')
      .then((response) => {
        setStatesList(response.data);
      });
  }, []);

  useEffect(() => {
    BuscaCepApi.get(`estados/${inputState}/municipios`)
      .then((response) => {
        setCitiesList(response.data);
      });
  }, [inputState]);

  const getAddressByCpf = (client: IClientAddress) => {
    setInputCep(client.Cep.replace(/[^0-9]/, ''));
    setInputAddress(client.Address);
    setInputNumber(client.Number.replace(/[^0-9]/, ''));
    setInputComplement(client.Complement);
    setInputDistrict(client.District);
  };

  const getAddressByCep = (address: ICepData) => {
    setInputCep(address.cep.replace(/[^0-9]/, ''));
    setInputAddress(address.logradouro);
    setInputDistrict(address.bairro);
    setInputState(address.uf);
    setInputCity(address.localidade);
  };

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

  const handleInputState = (event: any) => {
    const value = event.target.value;

    setInputState(value);
    setInputCity('');
  };

  const handleInputCity = (event: any) => {
    const value = event.target.value;

    setInputCity(value);
  };

  const clearInputCep = () => setInputCep('');

  const clearInputAddress = () => setInputAddress('');

  const clearInputNumber = () => setInputNumber('');

  const clearInputComplement = () => setInputComplement('');

  const clearInputDistrict = () => setInputDistrict('');

  const storageDataClient = () => {
    const clientStorage = localStorage.getItem('client.Identification');

    if (clientStorage) {
      const clientAddress: IClientAddress = {
        Cep: inputCep!,
        Address: inputAddress!,
        Number: inputNumber!,
        Complement: inputComplement!,
        District: inputDistrict!,
        State: inputState!,
        City: inputCity!
      };

      localStorage.setItem('client.Address', JSON.stringify(clientAddress));
    };
  };

  const goToNextForm = () => {
    storageDataClient();
  };

  return (
    <form className='ordersFormContainer'>
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

        <Select
          Label={AddressData.Selects[0].Label}
          Name={AddressData.Selects[0].Name}
          Id={AddressData.Selects[0].Id}
          InputValue={inputState!}
          CategoriesList={regionsList}
          MainList={statesList}
          HandleInput={() => handleInputState}
        />

        <Select
          Label={AddressData.Selects[1].Label}
          Name={AddressData.Selects[1].Name}
          Id={AddressData.Selects[1].Id}
          InputValue={inputCity!}
          MainList={citiesList}
          HandleInput={() => handleInputCity}
        />

        <div className="formButtonsContainer">
          <Link to='/pedidos/identification' onClick={storageDataClient}>
            <button className='formButton rewindButton'>
              {AddressData.PreviousTextButton}
            </button>
          </Link>

          <Link to='/pedidos/message' onClick={goToNextForm}>
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
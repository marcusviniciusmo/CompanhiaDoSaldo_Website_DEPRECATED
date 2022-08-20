import { ClientIdentification, IdentificationData } from 'utils/Mocks/Identification';
import { IClientIdentification } from 'utils/Types/Identification';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Toast } from 'components/Notification';
import Input from "components/Input";
import './styles.css';

function Identification() {
  const [inputCpf, setInputCpf] = useState<string | undefined>('');
  const [inputPhone, setInputPhone] = useState<string | undefined>('');
  const [inputName, setInputName] = useState<string | undefined>('');
  const [inputEmail, setInputEmail] = useState<string | undefined>('');
  const [inputGender, setInputGender] = useState<string | undefined>('');
  const [inputBirthday, setInputBirthday] = useState<string | undefined>('');

  useEffect(() => {
    const clientStorage = localStorage.getItem('client.Identification');
    
    if (clientStorage) {
      const client = JSON.parse(clientStorage)

      setInputCpf(client.Cpf);
      setInputPhone(client.Phone);
      setInputName(client.Name);
      setInputEmail(client.Email);
      setInputGender(client.Gender);
      setInputBirthday(client.Birthday);
    }
  }, []);

  const getClientByCpf = (cpf: string) => {
    const client = ClientIdentification;

    if (cpf.length === 11) {
      if (cpf === client.Cpf) {
        Toast.fire({
          icon: 'success',
          title: 'Cliente encontrado'
        });

        setInputPhone(client.Phone);
        setInputName(client.Name);
        setInputEmail(client.Email);
        setInputGender(client.Gender);
        setInputBirthday(client.Birthday);
      }
      else {
        Toast.fire({
          icon: 'warning',
          title: 'Cliente não encontrado'
        });

        clearInputPhone();
        clearInputName();
        clearInputEmail();
        clearInputGender();
        clearInputBirthday();
      };
    };
  };

  const handleInput = (event: any) => {
    const id = event.target.id;
    const value = event.target.value;

    if (id === IdentificationData.Inputs[0].Id) {
      setInputCpf(value.replace(/[^0-9]/, ''));

      getClientByCpf(value);
    }
    else if (id === IdentificationData.Inputs[1].Id)
      setInputPhone(value.replace(/[^0-9]/, ''));
    else if (id === IdentificationData.Inputs[2].Id)
      setInputName(value);
    else if (id === IdentificationData.Inputs[3].Id)
      setInputEmail(value);
    else if (id === IdentificationData.Inputs[4].Id)
      setInputGender(value);
    else if (id === IdentificationData.Inputs[5].Id)
      setInputGender(value);
    else if (id === IdentificationData.Inputs[6].Id)
      setInputGender(value);
    else if (id === IdentificationData.Inputs[7].Id)
      setInputBirthday(value);
  };

  const clearInputCpf = () => {
    setInputCpf('');

    clearInputPhone();
    clearInputName();
    clearInputEmail();
    clearInputGender();
    clearInputBirthday();
  };

  const clearInputPhone = () => setInputPhone('');

  const clearInputName = () => setInputName('');

  const clearInputEmail = () => setInputEmail('');

  const clearInputGender = () => setInputGender('');

  const clearInputBirthday = () => setInputBirthday('');

  const storageDataClient = () => {
    const client: IClientIdentification = {
      Cpf: inputCpf!,
      Phone: inputPhone!,
      Name: inputName!,
      Email: inputEmail!,
      Gender: inputGender!,
      Birthday: inputBirthday!
    };

    localStorage.setItem('client.Identification', JSON.stringify(client));
  };

  return (
    <form className='ordersFormContainer'>
      <fieldset id='identification'>
        <legend>{IdentificationData.Legend}</legend>

        <div className="inputRow">
          <Input
            Label={IdentificationData.Inputs[0].Label}
            Type={IdentificationData.Inputs[0].Type}
            Name={IdentificationData.Inputs[0].Name}
            Id={IdentificationData.Inputs[0].Id}
            MaxLength={IdentificationData.Inputs[0].MaxLength}
            Value={inputCpf}
            OnChange={() => handleInput}
            Clear={() => clearInputCpf}
          />

          <Input
            Label={IdentificationData.Inputs[1].Label}
            Type={IdentificationData.Inputs[1].Type}
            Name={IdentificationData.Inputs[1].Name}
            Id={IdentificationData.Inputs[1].Id}
            MaxLength={IdentificationData.Inputs[1].MaxLength}
            Value={inputPhone}
            OnChange={() => handleInput}
            Clear={() => clearInputPhone}
          />
        </div>

        <div className="inputRow">
          <Input
            Label={IdentificationData.Inputs[2].Label}
            Type={IdentificationData.Inputs[2].Type}
            Name={IdentificationData.Inputs[2].Name}
            Id={IdentificationData.Inputs[2].Id}
            Value={inputName}
            OnChange={() => handleInput}
            Clear={() => clearInputName}
          />

          <Input
            Label={IdentificationData.Inputs[3].Label}
            Type={IdentificationData.Inputs[3].Type}
            Name={IdentificationData.Inputs[3].Name}
            Id={IdentificationData.Inputs[3].Id}
            Value={inputEmail}
            OnChange={() => handleInput}
            Clear={() => clearInputEmail}
          />
        </div>

        <fieldset id='gender'>
          <legend>{IdentificationData.SubLegend}</legend>
          <div className='inputRadioIdentification'>
            <Input
              Label={IdentificationData.Inputs[4].Label}
              Type={IdentificationData.Inputs[4].Type}
              Name={IdentificationData.Inputs[4].Name}
              Id={IdentificationData.Inputs[4].Id}
              Value={IdentificationData.Inputs[4].Value}
              OnChange={() => handleInput}
              Checked={inputGender === IdentificationData.Inputs[4].Value}
            />
          </div>

          <div className="inputRadioIdentification">
            <Input
              Label={IdentificationData.Inputs[5].Label}
              Type={IdentificationData.Inputs[5].Type}
              Name={IdentificationData.Inputs[5].Name}
              Id={IdentificationData.Inputs[5].Id}
              Value={IdentificationData.Inputs[5].Value}
              OnChange={() => handleInput}
              Checked={inputGender === IdentificationData.Inputs[5].Value}
            />
          </div>

          <div className="inputRadioIdentification">
            <Input
              Label={IdentificationData.Inputs[6].Label}
              Type={IdentificationData.Inputs[6].Type}
              Name={IdentificationData.Inputs[6].Name}
              Id={IdentificationData.Inputs[6].Id}
              Value={IdentificationData.Inputs[6].Value}
              OnChange={() => handleInput}
              Checked={inputGender === IdentificationData.Inputs[6].Value}
            />
          </div>
        </fieldset>

        <Input
          Label={IdentificationData.Inputs[7].Label}
          Type={IdentificationData.Inputs[7].Type}
          Name={IdentificationData.Inputs[7].Name}
          Id={IdentificationData.Inputs[7].Id}
          Value={inputBirthday}
          OnChange={() => handleInput}
        />

        <div className="formButtonsContainer">
          <Link to='/pedidos/address' onClick={storageDataClient}>
            <button className='formButton forwardButton'>
              {IdentificationData.ButtonText}
            </button>
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default Identification;
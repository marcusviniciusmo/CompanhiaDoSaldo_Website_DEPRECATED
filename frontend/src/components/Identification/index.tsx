import { ClientDefault, IdentificationData } from 'utils/Mocks/Identification';
import { useState } from "react";
import Input from "components/Input";
import './styles.css';

function Identification() {
  const [inputCpf, setInputCpf] = useState<string | undefined>('');
  const [inputPhone, setInputPhone] = useState<string | undefined>('');
  const [inputName, setInputName] = useState<string | undefined>('');
  const [inputEmail, setInputEmail] = useState<string | undefined>('');
  const [inputGender, setInputGender] = useState<string | undefined>('');
  const [inputBirthday, setInputBirthday] = useState<string | undefined>('');

  const getClientByCpf = (cpf: string) => {
    const client = ClientDefault

    if (cpf.length === 11) {
      if (cpf === client.Cpf) {
        alert('Cliente encontrado');

        setInputPhone(client.Phone);
        setInputName(client.Name);
        setInputEmail(client.Email);
        setInputGender(client.Gender);
        setInputBirthday(client.Birthday);
      }
      else {
        alert('Cliente não encontrado')
      }
    }
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

  const clearInputCpf = () => setInputCpf('');

  const clearInputPhone = () => setInputPhone('');

  const clearInputName = () => setInputName('');

  const clearInputEmail = () => setInputEmail('');

  return (
    <form
      method='post'
      className='ordersFormContainer'
      action='mailto:marcus.viniciusmo@hotmail.com'
    >
      <fieldset id='identification'>
        <legend>{IdentificationData.Legend}</legend>

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
      </fieldset>
    </form>
  );
};

export default Identification;
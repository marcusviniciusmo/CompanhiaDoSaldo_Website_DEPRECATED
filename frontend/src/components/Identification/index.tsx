import { useState } from "react";
import Input from "components/Input";

function Identification() {
  const [inputCpf, setInputCpf] = useState<string | undefined>('');
  const [inputPhone, setInputPhone] = useState<string | undefined>('');
  const [inputName, setInputName] = useState<string | undefined>('');
  const [inputEmail, setInputEmail] = useState<string | undefined>('');
  const [, setInputGender] = useState<string | undefined>('');
  const [inputBirthday, setInputBirthday] = useState<string | undefined>('');

  const handleInput = (event: any) => {
    const id = event.target.id;
    const value = event.target.value;

    if (id === 'fieldCpf')
      setInputCpf(value);
    else if (id === 'fieldPhone')
      setInputPhone(value);
    else if (id === 'fieldName')
      setInputName(value);
    else if (id === 'fieldEmail')
      setInputEmail(value);
    else if (id === 'fieldGenderMale')
      setInputGender(value);
    else if (id === 'fieldGenderFemale')
      setInputGender(value);
    else if (id === 'fieldGenderOthers')
      setInputGender(value);
    else if (id === 'fieldBirthday')
      setInputBirthday(value);
  };

  return (
    <>
      IDENTIFICATION Component

      <h3>Identificação do Cliente</h3>

      <Input
        label='CPF'
        type='text'
        name='fieldCpf'
        id='fieldCpf'
        value={inputCpf}
        onChange={() => handleInput}
      />

      <Input
        label='Celular'
        type='text'
        name='fieldPhone'
        id='fieldPhone'
        value={inputPhone}
        onChange={() => handleInput}
      />

      <Input
        label='Nome'
        type='text'
        name='fieldName'
        id='fieldName'
        value={inputName}
        onChange={() => handleInput}
      />

      <Input
        label='E-mail'
        type='email'
        name='fieldEmail'
        id='fieldEmail'
        value={inputEmail}
        onChange={() => handleInput}
      />

      <h4>Sexo</h4>
      <Input
        label='Masculino'
        type='radio'
        name='fieldGender'
        id='fieldGenderMale'
        value='Masculino'
        onChange={() => handleInput}
      />

      <Input
        label='Feminino'
        type='radio'
        name='fieldGender'
        id='fieldGenderFemale'
        value='Feminino'
        onChange={() => handleInput}
      />

      <Input
        label='Outros'
        type='radio'
        name='fieldGender'
        id='fieldGenderOthers'
        value='Outros'
        onChange={() => handleInput}
      />

      <Input
        label='Data de Nascimento'
        type='date'
        name='fieldBirthday'
        id='fieldBirthday'
        value={inputBirthday}
        onChange={() => handleInput}
      />
    </>
  );
};

export default Identification;
import {
  IdentificationLegend01,
  InputCpfLabel,
  InputCpfType,
  InputCpfName,
  InputCpfId,
  InputPhoneLabel,
  InputPhoneType,
  InputPhoneName,
  InputPhoneId,
  InputNameLabel,
  InputNameType,
  InputNameName,
  InputNameId,
  InputEmailLabel,
  InputEmailType,
  InputEmailName,
  InputEmailId,
  IdentificationLegend02,
  InputGenderMaleLabel,
  InputGenderMaleType,
  InputGenderMaleName,
  InputGenderMaleId,
  InputGenderMaleValue,
  InputGenderFemaleLabel,
  InputGenderFemaleType,
  InputGenderFemaleName,
  InputGenderFemaleId,
  InputGenderFemaleValue,
  InputGenderOthersLabel,
  InputGenderOthersType,
  InputGenderOthersName,
  InputGenderOthersId,
  InputGenderOthersValue,
  InputBirthdayLabel,
  InputBirthdayType,
  InputBirthdayName,
  InputBirthdayId
} from 'utils/Mocks/Identification';
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

    if (id === InputCpfId)
      setInputCpf(value);
    else if (id === InputPhoneId)
      setInputPhone(value);
    else if (id === InputNameId)
      setInputName(value);
    else if (id === InputEmailId)
      setInputEmail(value);
    else if (id === InputGenderMaleId)
      setInputGender(value);
    else if (id === InputGenderFemaleId)
      setInputGender(value);
    else if (id === InputGenderOthersId)
      setInputGender(value);
    else if (id === InputBirthdayId)
      setInputBirthday(value);
  };

  const clearInputCpf = () => setInputCpf('');

  const clearInputPhone = () => setInputPhone('');

  const clearInputName = () => setInputName('');

  const clearInputEmail = () => setInputEmail('');

  return (
    <>
      IDENTIFICATION Component

      <h3>{IdentificationLegend01}</h3>

      <Input
        label={InputCpfLabel}
        type={InputCpfType}
        name={InputCpfName}
        id={InputCpfId}
        value={inputCpf}
        onChange={() => handleInput}
        clear={() => clearInputCpf}
      />

      <Input
        label={InputPhoneLabel}
        type={InputPhoneType}
        name={InputPhoneName}
        id={InputPhoneId}
        value={inputPhone}
        onChange={() => handleInput}
        clear={() => clearInputPhone}
      />

      <Input
        label={InputNameLabel}
        type={InputNameType}
        name={InputNameName}
        id={InputNameId}
        value={inputName}
        onChange={() => handleInput}
        clear={() => clearInputName}
      />

      <Input
        label={InputEmailLabel}
        type={InputEmailType}
        name={InputEmailName}
        id={InputEmailId}
        value={inputEmail}
        onChange={() => handleInput}
        clear={() => clearInputEmail}
      />

      <h4>{IdentificationLegend02}</h4>
      <Input
        label={InputGenderMaleLabel}
        type={InputGenderMaleType}
        name={InputGenderMaleName}
        id={InputGenderMaleId}
        value={InputGenderMaleValue}
        onChange={() => handleInput}
      />

      <Input
        label={InputGenderFemaleLabel}
        type={InputGenderFemaleType}
        name={InputGenderFemaleName}
        id={InputGenderFemaleId}
        value={InputGenderFemaleValue}
        onChange={() => handleInput}
      />

      <Input
        label={InputGenderOthersLabel}
        type={InputGenderOthersType}
        name={InputGenderOthersName}
        id={InputGenderOthersId}
        value={InputGenderOthersValue}
        onChange={() => handleInput}
      />

      <Input
        label={InputBirthdayLabel}
        type={InputBirthdayType}
        name={InputBirthdayName}
        id={InputBirthdayId}
        value={inputBirthday}
        onChange={() => handleInput}
      />
    </>
  );
};

export default Identification;
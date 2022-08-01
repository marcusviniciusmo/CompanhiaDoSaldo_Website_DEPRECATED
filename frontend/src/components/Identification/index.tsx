import Input from "components/Input";

function Identification() {
  return (
    <>
      IDENTIFICATION Component

      <h3>Identificação do Cliente</h3>

      <Input
        label='CPF'
        type='text'
        name='fieldCpf'
        id='fieldCpf'
      />

      <Input
        label='Celular'
        type='text'
        name='fieldPhone'
        id='fieldPhone'
      />

      <Input
        label='Nome'
        type='text'
        name='fieldName'
        id='fieldName'
      />

      <Input
        label='E-mail'
        type='email'
        name='fieldEmail'
        id='fieldEmail'
      />

      <h4>Sexo</h4>
      <Input
        label='Masculino'
        type='radio'
        name='fieldGender'
        id='fieldGenderMale'
      />

      <Input
        label='Feminino'
        type='radio'
        name='fieldGender'
        id='fieldGenderFemale'
      />

      <Input
        label='Outros'
        type='radio'
        name='fieldGender'
        id='fieldGenderOthers'
      />

      <Input
        label='Data de Nascimento'
        type='date'
        name='fieldBirthday'
        id='fieldBirthday'
      />
    </>
  );
};

export default Identification;
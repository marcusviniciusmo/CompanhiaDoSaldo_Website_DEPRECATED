import Input from "components/Input";

function Identification() {
  return (
    <>
      IDENTIFICATION Component

      <h3>Identificação do Cliente</h3>

      <h4>CPF</h4>
      <Input
        type='text'
        name='fieldCpf'
        id='fieldCpf'
      />

      <h4>Celular</h4>
      <Input
        type='text'
        name='fieldPhone'
        id='fieldPhone'
      />

      <h4>Nome</h4>
      <Input
        type='text'
        name='fieldName'
        id='fieldName'
      />

      <h4>E-mail</h4>
      <Input
        type='email'
        name='fieldEmail'
        id='fieldEmail'
      />

      <h4>Sexo</h4>
      <Input
        type='radio'
        name='fieldGender'
        id='fieldGenderMale'
      />
      <h4>Masculino</h4>

      <Input
        type='radio'
        name='fieldGender'
        id='fieldGenderFemale'
      />
      <h4>Feminino</h4>

      <Input
        type='radio'
        name='fieldGender'
        id='fieldGenderOthers'
      />
      <h4>Outros</h4>

      <h4>Data de Nascimento</h4>
      <Input
        type='date'
        name='fieldBirthday'
        id='fieldBirthday'
      />
    </>
  );
};

export default Identification;
import { IClient, IIdentification } from 'utils/Types/Identification';

export const ClientDefault: IClient = {
  Cpf: '11111111111',
  Phone: '5500912345678',
  Name: 'José Maria da Silva',
  Email: 'josemariadasilva@gmail.com',
  Gender: 'Masculino',
  Birthday: '1965-08-15'
};

export const IdentificationData: IIdentification = {
  Legend: 'Identificação do Cliente',
  SubLegend: 'Sexo',
  Inputs: [
    {
      Label: 'CPF',
      Type: 'text',
      Name: 'fieldCpf',
      Id: 'fieldCpf',
      MaxLength: 11
    },
    {
      Label: 'Celular',
      Type: 'text',
      Name: 'fieldPhone',
      Id: 'fieldPhone',
      MaxLength: 13
    },
    {
      Label: 'Nome',
      Type: 'text',
      Name: 'fieldName',
      Id: 'fieldName'
    },
    {
      Label: 'E-mail',
      Type: 'email',
      Name: 'fieldEmail',
      Id: 'fieldEmail'
    },
    {
      Label: 'Masculino',
      Type: 'radio',
      Name: 'fieldGender',
      Id: 'fieldGenderMale',
      Value: 'Masculino'
    },
    {
      Label: 'Feminino',
      Type: 'radio',
      Name: 'fieldGender',
      Id: 'fieldGenderFemale',
      Value: 'Feminino'
    },
    {
      Label: 'Outros',
      Type: 'radio',
      Name: 'fieldGender',
      Id: 'fieldGenderOthers',
      Value: 'Outros'
    },
    {
      Label: 'Data de Nascimento',
      Type: 'date',
      Name: 'fieldBirthday',
      Id: 'fieldBirthday'
    },
  ]
};
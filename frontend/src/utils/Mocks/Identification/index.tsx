import { IIdentification } from 'utils/Types/Identification';

export const IdentificationData: IIdentification = {
  Legend: 'Identificação do Cliente',
  SubLegend: 'Sexo',
  Inputs: [
    {
      Label: 'CPF',
      Type: 'text',
      Name: 'fieldCpf',
      Id: 'fieldCpf'
    },
    {
      Label: 'Celular',
      Type: 'text',
      Name: 'fieldPhone',
      Id: 'fieldPhone'
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
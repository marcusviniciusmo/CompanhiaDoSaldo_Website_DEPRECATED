import { IClientProduct, IProduct } from 'utils/Types/Product';

export const ClientProduct: IClientProduct = {
  Product: 'PP Lisa',
  Quantity: '5 peças',
  Color: '#FFFFFF'
};

export const ProductData: IProduct = {
  Legend: 'Quero comprar',
  Inputs: [
    {
      Label: 'Produto',
      Type: 'text',
      Name: 'fieldProduct',
      Id: 'fieldProduct'
    },
    {
      Label: 'Quantidade',
      Type: 'text',
      Name: 'fieldQuantity',
      Id: 'fieldQuantity'
    },
    {
      Label: 'Cor',
      Type: 'color',
      Name: 'fieldColor',
      Id: 'fieldColor'
    },
  ],
  PreviousTextButton: 'Voltar',
  SubmitTextButton: 'Pedir'
};
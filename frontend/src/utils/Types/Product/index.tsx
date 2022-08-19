import { IInput } from 'utils/Types/Input';

export interface IClientProduct {
  Product: string;
  Quantity: string;
  Color: string;
};

export interface IProduct {
  Legend: string;
  Inputs: IInput[];
  PreviousTextButton: string;
  SubmitTextButton: string;
};
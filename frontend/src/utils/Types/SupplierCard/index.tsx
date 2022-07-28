import { IImage } from 'utils/Types';

export interface ISupplierCard {
  Id: number;
  Image: IImage;
  Title: string;
  Text: string;
  ButtonText: 'Veja mais'
};
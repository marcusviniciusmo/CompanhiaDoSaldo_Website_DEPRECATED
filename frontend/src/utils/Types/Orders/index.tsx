import { IClientIdentification } from 'utils/Types/Identification';
import { IClientAddress } from 'utils/Types/Address';

export interface IOrdersClient {
  Identification: IClientIdentification;
  Address: IClientAddress;
  Message: '';
  Product: '';
};
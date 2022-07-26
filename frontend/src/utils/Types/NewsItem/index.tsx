import { IImage } from 'utils/Types';

export interface INewsItem {
  Id?: number;
  Image: IImage;
  Date: string;
  Title: string;
};
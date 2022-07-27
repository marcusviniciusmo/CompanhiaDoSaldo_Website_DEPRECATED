import { INewsItem } from 'utils/Types/NewsItem';

export interface INews {
  Header01: string;
  Header02: string;
  Author: string;
  Updated: string;
  NewsList: INewsItem[];
};
import { Item } from './item';

export type LocateResponse = {
  href: string;
  items: Array<Item>;
};

export type PaginatedLocateResponse = LocateResponse & {
  offset: number;
  limit: number;
};

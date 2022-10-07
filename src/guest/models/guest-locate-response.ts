import { Item } from '../../base/models/item';
import { PaginatedLocateResponse } from '../../base/models/locate-response';

export type GuestLocateResponse = PaginatedLocateResponse & {
  first?: Item;
  last?: Item;
  next?: Item;
  prev?: Item;
};

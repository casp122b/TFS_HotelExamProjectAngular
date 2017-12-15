import { Guest } from '../../../guests/shared/guest.model';

export class DoubleRoom {
  id?: number;
 price: number;
 available: boolean;
 guest?: Guest;
 name?: string;
}

import { Guest } from '../../../guests/shared/guest.model';

export class Suite{
  id?: number;
 price?: number;
 available: number;
 guest: Guest;
}

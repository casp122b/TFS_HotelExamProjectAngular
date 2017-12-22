import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const url = environment.apiEndpoint + '/bookings';

@Injectable()
export class BookingService {

  constructor(private http: HttpClient) { }

  // Creates a new booking
  create(booking: Booking): Observable<Booking> {
    return this.http
      .post<Booking>(url, booking);
  }
}

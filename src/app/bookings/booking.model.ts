export class Booking {
    id?: number;
    checkIn: Date;
    checkOut: Date;
    guestId: number;
    singleRoomId?: number;
    doubleRoomId?: number;
    suiteId?: number;
}
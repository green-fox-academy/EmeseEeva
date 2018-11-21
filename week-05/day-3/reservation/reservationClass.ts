
import { Reservationy } from "./reservationInt";

'use strict'


class Reservation implements Reservationy {

    getCodeBooking() {
        return Math.random().toString(36).substr(2, 8).toLocaleUpperCase().toString();
    }
    getDowBooking() {
        let days: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        return days[Math.floor(Math.random() * 7)];

    }
    outPut() {
        console.log (`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
    }
}
let reservation = new Reservation();
reservation.outPut();
reservation.outPut();
reservation.outPut();
reservation.outPut();
reservation.outPut();
reservation.outPut();
reservation.outPut();
reservation.outPut();
reservation.outPut();
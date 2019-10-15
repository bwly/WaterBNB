export class Posting {
    id: string;
    host_name: string;
    unit_name: string;
    unit_price: number;
    description: string;
    location: string;
    available: boolean;
    renter_name: string;
    days: number;
    guests: number;
    uid; string;

    constructor (host_name: string, unit_name: string, unit_price: number, description: string, location: string, uid: string) {
        this.host_name = host_name;
        this.unit_name = unit_name;
        this.unit_price = unit_price;
        this.description = description;
        this.location = location;
        this.available = true;
        this.uid = uid;
    }
}

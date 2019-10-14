export class Posting {
    id: string;
    host_name: string;
    unit_name: string;
    unit_price: string;
    description: string;
    location: string;

    constructor (host_name: string, unit_name: string, unit_price: string, description: string, location: string) {
        this.host_name = host_name;
        this.unit_name = unit_name;
        this.unit_price = unit_price;
        this.description = description;
        this.location = location;
    }
}

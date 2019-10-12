export class Posting {
    host_name: string;
    unit_name: string;
    unit_price: number;
    description: string;
    location: string;

    constructor (, host_name: string, unit_name: string, unit_price: number, description: string, location: string) {
        this.host_name = host_name;
        this.unit_name = unit_name;
        this.unit_price = unit_price;
        this.description = description;
        this.location = location;
    }
}

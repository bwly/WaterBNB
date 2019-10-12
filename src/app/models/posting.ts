export class Posting {
    id: number;
    host_name: string;
    unit_name: string;
    unit_price: number;
    description: string;
    location: string;

    constructor (id: number, host_name: string, unit_name: string, unit_price: number, description: string, location: string) {
        this.id = id;
        this.host_name = host_name;
        this.unit_name = unit_name;
        this.unit_price = unit_price;
        this.description = description;
        this.location = location;
    }
}

export class Comment {
    id: string;
    name: string;
    message: string;

    constructor (id: string, name: string, message: string) {
        this.id = id;
        this.name = name;
        this.message = message;
    }
}

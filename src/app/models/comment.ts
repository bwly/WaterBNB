export class Comment {
    id: string;
    name = 'Anonymous';
    message: string;

    constructor (id: string, name: string, message: string) {
        this.id = id;
        if (name !== '') {
            this.name = name;
        }
        this.message = message;
    }
}

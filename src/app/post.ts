export class Post {
    public id: number;
    public name: string;
    public game: string;
    public condition: number;
    public description: string;
    public price: number;
    public created: Date;
    public imageUrl: string;

    constructor(id: number, name: string, game: string, condition: number, description: string, price: number, created: Date, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.game = game;
        this.condition = condition;
        this.description = description;
        this.price = price;
        this.created = created;
        this.imageUrl = imageUrl;
    }
}

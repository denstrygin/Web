export class Post {
    public date: Date

    constructor(public title: string) {
        this.date = new Date()
    }

    toString(): string {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON()
        })
    }

    get uppercaseTitle(): string {
        return this.title.toUpperCase()
    }
}
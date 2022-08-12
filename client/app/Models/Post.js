
export class Post{
    constructor(data){
        this.img = data.img 
        this.caption = data.caption
        this.id = data.id
        this.upvote = data.upvote
        this.downvote = data.downvote
    }

    get Template() {
        return `
        //modale
        `
    }
}
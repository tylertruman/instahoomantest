
export class Post {
    constructor(data){
        this.img = data.img 
        this.caption = data.caption
        this.id = data.id
    }

    get Template() {
        return `
        // FEED
        `
    }

    get PostByIdTemplate(){ 
        return`
        // MODAL CARD GOES HERE
        `
    }
}


export class Post {
    constructor(data){
        this.img = data.img 
        this.caption = data.caption
    }

    get Template() {
        return `
        
        `
    }

    get VoteTemplate(){
        return `
        
        `
    }
}


export class AllPost {
    constructor(data){
        this.id = data.id
        this.img = data.img
    }

    get Template(){
        return `
        // ALL POST GO HERE
        `
    }

}
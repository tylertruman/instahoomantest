import { Pop } from "../Utils/Pop.js";
import { ProxyState } from "../AppState.js";



function _drawFeed(){
    let template = ""
   ProxyState.feed.forEach(f => template += f.Template)
   // @ts-ignore
   document.getElementById('feed').innerHTML = template 
}

export class FeedController {
    constructor(){
       this.getFeed()
    }

    async getFeed(){
        try {
            
        } catch (error) {
            console.log('[Getting Feed]', error);
            Pop.error(error)
        }
    }
}
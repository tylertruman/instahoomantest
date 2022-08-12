import { ProxyState } from "../AppState.js";
import { postService } from "../Services/PostService.js";
import { Pop } from "../Utils/Pop.js";

function _drawPost(){
    let template = ''
    ProxyState.post.forEach(p => template += p.Template)
    // @ts-ignore
    document.getElementById('post').innerHtml = template
}

function _drawVotes(){ 
    let template = ''
}




export class PostController {
    constructor() {
        ProxyState.on('post', _drawPost)
        ProxyState.on("post", _drawVotes)
    }


}
import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";
import { Pop } from "../Utils/Pop.js";


// TODO draw a post based on postId
function _drawPost(postId) {
    let template = ' '
    ProxyState.post.find(p => p.id = postId)
    // @ts-ignore
    document.getElementById('post').innerHtml = Template
}

// function _drawVotes(){ 
//     let template = ''
//     ProxyState.post.forEach(v => template += v.)
//     // @ts-ignore
//     document.getElementById('votes').innerHTML = template
// }




export class PostsController {
    constructor() {
        ProxyState.on('post', _drawPost)
    }
    async deletePost(postId) {
        try {
            await postsService.deletePost(postId)
        } catch (error) {
            console.log('[Deleting Post]', error);
            Pop.error(error)
        }
    }

}
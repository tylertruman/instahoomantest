import { ProxyState } from "../AppState.js";
import { postService } from "../Services/PostService.js";
import { Pop } from "../Utils/Pop.js";



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




export class PostController {
    constructor() {
        ProxyState.on('post', _drawPost)
    }
    async createPost() {
        try {
            // @ts-ignore
            event.preventDefault()
            // @ts-ignore
            const form = event.target

            const packageData = {
                // @ts-ignore
                img: form.img.value,
                caption: form.caption.value
            }

        } catch (error) {
            console.log('[Creating Post]', error);
        }
    }

    async deletePost(postId) {
        try {
            await postService.deletePost(postId)
        } catch (error) {
            console.log('[Deleting Post]', error);
            Pop.error(error)
        }
    }

}
import { ProxyState } from "../AppState.js";
import { postService } from "../Services/PostService.js";
import { Pop } from "../Utils/Pop.js";

function _drawAllPost(){
    let template = ''
    ProxyState.post.forEach(p => template += p.Template)
    // @ts-ignore
    document.getElementById('feed').innerHtml = template
}

function _drawPostById(postId){
   
    let post = ProxyState.post.find(p => p.id = postId)
    // @ts-ignore
    document.getElementById('post').innerHtml = VoteTemplate(post)
}

function _drawVotes(){ 
    let template = ''
    ProxyState.post.forEach(v => template += v.Template)
    // @ts-ignore
    document.getElementById('votes').innerHTML = template
}




export class PostController {
    constructor() {
        ProxyState.on('post', _drawAllPost)
        ProxyState.on("post", _drawVotes)
    }

    async getAllPost(){ 
        try {
            
        } catch (error) {
            console.log('[Get All Post]', error);
            Pop.error(error)
        }
    }
    async createPost() { 
        try {
            // @ts-ignore
            event.preventDefault()
            // @ts-ignore
            const form = event.target

            const packageData = { 
       // @ts-ignore
                img:  form.img.value,
                creatorId: ProxyState.account.id //TODO TEST THIS
            }

        } catch (error) {
           console.log('[Creating Post]', error); 
        } 
    }

}
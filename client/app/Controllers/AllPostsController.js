import { Pop } from "../Utils/Pop.js";
import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import { AllPost } from "../Models/AllPost.js"
import { allpostsService } from "../Services/AllPostsService.js";


function _drawAllPost() {
    let template = ""
    ProxyState.allpost.forEach(f => template += f.Template)
    // @ts-ignore
    document.getElementById('all-post').innerHTML = template
}

//

export class AllPostsController {
    constructor() {
        ProxyState.on('allpost', _drawAllPost)
        this.getAllPost()
    }
    async getAllPost() {
        try {
            await allpostsService.getAllPost()

        } catch (error) {
            console.log('[Getting Feed]', error);
            Pop.error(error)
        }
    }
    async createPost() {
        try {
            // @ts-ignore
            event.preventDefault()
            // @ts-ignore
            const form = event.target
            const newPost = {
                // @ts-ignore
                img: form.img.value,
                // @ts-ignore
                caption: form.caption.value
            }
            await allpostsService.createPost(newPost)
            // @ts-ignore
            form.reset()
        } catch (error) {
            console.log('[Creating Post]', error);
        }
    }

    async deletePost(postId){
        try {
            await allpostsService.deletePost(postId)
        } catch (error) {
            console.log('[Deleting Post]', error)
            Pop.error(error)
        }
    }
}
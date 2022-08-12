import { Pop } from "../Utils/Pop.js";
import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import { AllPost } from "../Models/AllPost.js"

function _drawAllPost() {
    let template = ""
    ProxyState.allpost.forEach(f => template += f.Template)
    // @ts-ignore
    document.getElementById('feed').innerHTML = template
}

export class AllPostController {
    constructor() {
        ProxyState.on('allpost', _drawAllPost)
        this.getAllPost()
    }

    async getAllPost() {
        try {
            let res = await api.get('api/post')
            ProxyState.allpost = res.data.map(p => new AllPost(p))
        } catch (error) {
            console.log('[Getting Feed]', error);
            Pop.error(error)
        }
    }
}
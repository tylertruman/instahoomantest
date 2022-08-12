import { ProxyState } from "../AppState.js";
import { AllPost } from "../Models/AllPost.js";
import { api } from "./AxiosService.js";


class AllPostsService{
 
    async deletePost(postId) {
      await api.delete(`api/post/${postId}`)
      ProxyState.allposts = ProxyState.allposts.filter(p => p.id != postId)
    }
    async getAllPost() {
        let res = await api.get('api/post')
        ProxyState.allposts = res.data.map(p => new AllPost(p))    
    }
    async createPost(newPost) {
        let res = await api.post('api/post', newPost)
        let post = new AllPost(res.data)
        ProxyState.allposts = [...ProxyState.allposts, post]

   }

}

export const allpostsService = new AllPostsService()
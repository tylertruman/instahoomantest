import { ProxyState } from "../AppState.js";
import { AllPost } from "../Models/AllPost.js";
import { api } from "./AxiosService.js";


class AllPostsService{
 
    async deletePost(postId) {
      await api.delete(`api/post/${postId}`)
      ProxyState.allpost = ProxyState.allpost.filter(p => p.id != postId)
    }
    async getAllPost() {
        let res = await api.get('api/post')
        ProxyState.allpost = res.data.map(p => new AllPost(p))    
    }
    async createPost(newPost) {
        let res = await api.post('api/post', newPost)
        let post = new AllPost(res.data)
        ProxyState.allpost = [...ProxyState.allpost, post]

   }

}

export const allpostsService = new AllPostsService()
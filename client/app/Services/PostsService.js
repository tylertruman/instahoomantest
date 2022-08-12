import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";

class PostsService {
  async deletePost(postId) {
    let res = await api.delete(`api/post/${postId}`)
    ProxyState.posts = ProxyState.posts.filter(p => p.id != postId)
    
  } 

}

export const postsService = new PostsService()

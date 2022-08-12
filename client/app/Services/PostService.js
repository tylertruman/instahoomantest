import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";

class PostService {
  async deletePost(postId) {
    let res = await api.delete(`api/post/${postId}`)
    ProxyState.post = ProxyState.post.filter(p => p.id != postId)
    
  } 

}

export const postService = new PostService()
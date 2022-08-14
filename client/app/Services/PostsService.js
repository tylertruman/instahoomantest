import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { Post } from "../Models/Post.js";

class PostsService {
  async getPosts() {
    console.log("getting single post service");
    let res = await api.get('api/post')
    ProxyState.posts = res.data.map(p => new Post(p))
  }

  async deletePost(postId) {
    await api.delete(`api/posts/${postId}`)
    ProxyState.posts = ProxyState.posts.filter(p => p.id != postId)
  }

  async addUpVote(postData){
    postData.upVotes++
    ProxyState.post.upVotes++
    let res = await api.put(`/api/posts/${postData.id}`, postData)
    let post = new Post(res.data)
    let postIndex = ProxyState.posts.findIndex(p => p.id == postData.id)
    ProxyState.posts.splice(postIndex, 1, post)
    ProxyState.post = ProxyState.post
    ProxyState.posts = ProxyState.posts
  }

  async addDownVote(postData){
    postData.downVotes++
    ProxyState.post.downVotes++
    let res = await api.put(`/api/posts/${postData.id}`, postData)
    let post = new Post(res.data)
    let postIndex = ProxyState.posts.findIndex(p => p.id == postData.id)
    ProxyState.posts.splice(postIndex, 1, post)
    ProxyState.post = ProxyState.post
    ProxyState.posts = ProxyState.posts
  }
}

export const postsService = new PostsService()
import { Pop } from "../Utils/Pop.js";
import { ProxyState } from "../AppState.js";
import { allPostsService } from "../Services/AllPostsService.js";

function _drawAllPost() {
    let template = ""
    let posts = ProxyState.posts.sort((a, b) => b.upVotes - a.upVotes)
    posts.forEach(f => template += f.CardTemplate)
    // @ts-ignore
    document.getElementById('all-post').innerHTML = template
}

function _drawLeastPopularPosts(){
    let template = ''
    let posts = ProxyState.posts.sort((a, b) => b.downVotes - a.downVotes)
    posts.forEach(f => template += f.CardTemplate)
    // @ts-ignore
    document.getElementById('all-post').innerHTML = template
}

export class AllPostsController {
    constructor() {
        ProxyState.on('posts', _drawAllPost)
        this.getAllPost()
    }

    viewLeastPopular(){
        _drawLeastPopularPosts()
        this.getAllPost
    }

    viewMostPopular(){
        _drawAllPost()
        this.getAllPost
    }
    
    async setSinglePost(postId) {
        try {
            await allPostsService.setSinglePost(postId)
        } catch (error) {
            console.log('[Set Single Post]', error);
            Pop.error(error)
        }
    }
    
    async getAllPost() {
        try {
            console.log("Getting All Post");
            await allPostsService.getAllPost()

        } catch (error) {
            console.log('[Getting All Post]', error);
            Pop.error(error)
        }
    }
    
    async createPost() {
        try {
            // @ts-ignore
            window.event.preventDefault()
            // @ts-ignore
            const form = event.target
            const newPost = {
                // @ts-ignore
                img: form.img.value,
                // @ts-ignore
                title: form.title.value
            }
            await allPostsService.createPost(newPost)
            // @ts-ignore
            form.reset()
        } catch (error) {
            console.log('[Creating Post]', error);
        }
    }

    async deletePost(postId) {
        try {
            console.log("Deleting Post", postId);
            await allPostsService.deletePost(postId)
        } catch (error) {
            console.log('[Deleting Post]', error)
            Pop.error(error)
        }
    }
}
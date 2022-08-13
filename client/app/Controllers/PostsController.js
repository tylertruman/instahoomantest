import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";
import { Pop } from "../Utils/Pop.js";

// TODO draw a post based on postId

function _drawPost() {
    // @ts-ignore
    document.getElementById('details-modal-content').innerHTML = ProxyState.post.ModalTemplate
}

let likes = 0

function Vote() {
    let upVote = (ProxyState.post.upvote += 1)
    let downVote = (ProxyState.post.downvote -= 1)


    // let upvotes = document.getElementById('likes')
    // upvotes.innerText = upVote

    // let downVotes = document.getElementById('dislikes')
    // downVotes.innerText = downVote

}

export class PostsController {
    constructor() {
        ProxyState.on('post', _drawPost)
        // ProxyState.on('posts', _drawPosts)
    }
    
    async getPosts() {
        try {
            console.log('Getting Single Post');
            await postsService.getPosts()
        } catch (error) {
            console.error('[Get Posts]', error)
            Pop.error(error)
        }
    }

    async deletePost(postId) {
        try {
            await postsService.deletePost(postId)
        } catch (error) {
            console.error('[Delete Post]', error)
            Pop.error(error)
        }
    }

    async addUpVote(postId){
        try {
            let postData = {
                id: postId,
                upVotes: ProxyState.post.upVotes.value
            }
            
            await postsService.addUpVote(postData)
        } catch (error) {
            console.error('[Add Upvote]', error)
            Pop.error(error)
        }
    }

    async addDownVote(postId){
        try {
            await postsService.addDownVote(postId)
        } catch (error) {
            console.error('[Add Downvote]', error)
            Pop.error(error)
        }
    }
}
import { dbContext } from '../db/DbContext.js'
import { BadRequest, Forbidden } from '../utils/Errors.js'


class PostsService{

    async getAllPosts(){
       let posts = await dbContext.Posts.find()
        return posts

    }



    async getPostsByCreatorId(userId) {
      const posts = await dbContext.Posts.findById(userId)
      if (!userId) {
        throw new BadRequest('invalid user Id')
      }
    }

    async createPost(postData){
        let posts = await dbContext.Posts.create(postData)
        return posts
    }

    async editPost(postId, postData){
        let post = await dbContext.Posts.findById(postId)

        post.title = postData.title || post.title
        post.img = postData.img || post.img
        post.upVotes = postData.upVotes || post.upVotes
        post.downVotes = post.downVotes || post.downVotes

    }

    async deletePost(postId, userId){
        let post = await dbContext.Posts.findById(postId)

        await post.remove()
        return post
    }
}

export const postsService = new PostsService()
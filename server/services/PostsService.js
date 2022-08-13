import { dbContext } from '../db/DbContext.js'
import { BadRequest, Forbidden } from '../utils/Errors.js'


class PostsService {
  
  async getAllPosts(query = {}) {
    return await dbContext.Posts.find(query).populate('creatorInfo', 'name picture')
  }
  
  async getPostById(postId) {
    let post = await dbContext.Posts.findById(postId).populate('creatorInfo', 'name picture')
    if (!post) {
      throw new BadRequest('Invalid Post ID')
    }
    return post
  }

  async getPostsByCreatorId(userId) {
    const posts = await dbContext.Posts.findById(userId)
    if (!userId) {
      throw new BadRequest('invalid user Id')
    }
    return posts
  }

  async createPost(postData) {
    let post = await dbContext.Posts.create(postData)
    await post.populate('creatorInfo', 'name picture')
    return post
  }

  async editPost(postId, postData) {
    // let post = await dbContext.Posts.findById(postId)
    let post = await this.getPostById(postId)

    post.title = postData.title || post.title
    post.img = postData.img || post.img
    post.upVotes = postData.upVotes || post.upVotes
    post.downVotes = post.downVotes || post.downVotes

    await post.save()
    return post
  }

  async deletePost(postId, userId) {
    let post = await this.getPostById(postId)
    await post.remove()
    return post
  }
}

export const postsService = new PostsService()
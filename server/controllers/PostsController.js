import BaseController from "../utils/BaseController.js"
import { Auth0Provider } from '@bcwdev/auth0provider'
import { postsService } from "../services/PostsService.js"
import { BadRequest } from "../utils/Errors.js"

export class PostsController extends BaseController {

  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAllPosts)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:creatorId', this.getPostsByCreatorId)
      .post('', this.createPost)
      .delete('/:postId', this.deletePost)
      .put('/:postId', this.editPost)
  }

  async getAllPosts(req, res, next) {
    try {
      const posts = await postsService.getAllPosts()
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }

  async getPostsByCreatorId(req, res, next) {
    try {
      const userId = req.userInfo.id
      const posts = await postsService.getPostsByCreatorId(userId)
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }

  async createPost(req, res, next) {
    try {
      const postData = req.body
      req.body.creatorId = req.userInfo.id
      const posts = await postsService.createPost(postData)
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }

  async deletePost(req, res, next) {
    try {
      if(req.userInfo.id != req.creatorId){
        throw new BadRequest('Only the creator may delete this post')
      }
      const postId = req.params.id
      const userId = req.userInfo.id
      await postsService.deletePost(postId, userId)
    } catch (error) {
      next(error)
    }
  }
  async editPost(req, res, next) {
    try {
      
    } catch (error) {
      next(error)
    }
  }
}
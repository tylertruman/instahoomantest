import BaseController from "../utils/BaseController.js"
import { Auth0Provider } from '@bcwdev/auth0provider'
import { postsService } from "../services/PostsService.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { commentsService } from "../services/CommentsService.js"

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAllPosts)
      .get('/:postId/comments', this.getCommentsOnPost)
      // .get('/:postId', this.getCommentsByPostId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:postId', this.getPostById)
      .get('/:postId', this.getPostsByCreatorId)
      .post('', this.createPost)
      .delete('/:postId', this.deletePost)
      .put('/:postId', this.editPost)
  }

  async getAllPosts(req, res, next) {
    try {
      const query = req.query
      const posts = await postsService.getAllPosts(query)
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }
  // NOTE doesn't exist in commentsService! Don't know if we need?
  async getCommentsOnPost(req, res, next) {
    try {
      let comments = await commentsService.getCommentsOnPost(req.params.postId)
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async getPostById(req, res, next) {
    try {
      const post = await postsService.getPostById(req.params.postId)
      res.send(post)
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
      postData.creatorId = req.userInfo.id
      const posts = await postsService.createPost(postData)
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }
// NOTE EDITS DO NOT WORK! MAYBE WE LOOK INTO IT IF WE HAVE TIME
  async editPost(req, res, next) {
    try {
        let postData = req.body
        let post = await postsService.editPost(req.params.postId, postData)
        res.send(post)
    } catch (error) {
        next(error)
    }
  }

  // async editPost(req, res, next) {
  //   try {
  //     const userId = req.userInfo.id
  //     const postId = req.params.postId
  //     const postData = req.body
  //     const currentPost = await this.getPostById(postId)
  //     if (req.body.creatorId.toString() !== userId) {
  //       throw new Forbidden('Only the creator may edit this post')
  //     }
  //     let post = await postsService.editPost(postId, postData,)
  //     res.send(post)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async deletePost(req, res, next) {
    try {
      const post = await postsService.deletePost(req.params.postId)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }
}
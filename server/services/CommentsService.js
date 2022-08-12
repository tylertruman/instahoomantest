import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"
// NOTE may need to import posts service

class CommentsService{

    // NOTE Do we need this?    getComments() {
    //     throw new Error("Method not implemented.")
    // }
// 
    // async getCommentsOnPost(postId){
        let postComments = await dbContext.Comments.find({postId}).populate('commenter', 'img')
        return postComments
    }

    async getCommentById(commentId){
        let comment = await dbContext.Comments.findById(commentId)
        if(!comment){
            throw new BadRequest('Invalid Comment Id')
        }
     return comment
    let comment = await dbContext.commComments.create(commentData)
        return comment

    async createComment(commentData){
     let post = await dbContext.Posts.findById(commentData.postId)
    

    nc deleteComment(commentId){
     let comment = await this.getCommentById(commentId)
        await comment.remove()
     return comment
    

    nc editComment(commentId, commentData){
     let comment = await this.getCommentById(commentId)
     comment.postId = commentData.postId || comment.postId
        comment.creatorId = commentData.creatorId || comment.creatorId
        comment.message = commentData.message || comment.message
    }

    // NOTE Not sure if this will work or if it will only grab one! Will need to figure that out
    async getCommentsByPostId(postId){
        let comments = await dbContext.Comments.find({postId})
        return comments
    }
    async getCommentsByPostId(postId){
        let comments = await dbContext.Comments.find({postId})
        return comments
    }
    async getCommentsByPostId(postId){
        let comments = await dbContext.Comments.find({postId})
        return comments
    }
    async getCommentsByPostId(postId){
        let comments = await dbContext.Comments.find({postId})
        return comments
    }
    async getCommentsByPostId(postId){
        let comments = await dbContext.Comments.find({postId})
        return comments
    }
        let comments = await dbContext.Comments.find({postId})
        return comments
    }
}

export const commentsService = new CommentsService()
import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"

class CommentsService{

    async getCommentsOnPost(postId){
        let postComments = await dbContext.Comments.find({postId}, 'img message').populate('commenter', 'img')
        return postComments
    }

    async getCommentById(commentId){
        let comment = await dbContext.Comments.findById(commentId)
        if(!comment){
            throw new BadRequest('Invalid Comment Id')
        }
        return comment
    }

    // async createComment(commentData){
    //     let post = await dbContext.Posts.findById(commentData.postId)
    // }

    // async deleteComment(commentId){
    //     let comment = await this.getCommentById(commentId)
    //     await comment.remove()
    //     return comment
    // }

    // async editComment(commentId, commentData){
    //     let comment = await this.getCommentById(commentId)
    //     comment.postId = commentData.postId || comment.postId
    //     comment.creatorId = commentData.creatorId || comment.creatorId
    //     comment.message = commentData.message || comment.message
    // }

    // // NOTE Not sure if this will work or if it will only grab one! Will need to figure that out
    // async getCommentsByPostId(postId){
    //     let comments = await dbContext.Comments.find({postId})
    //     return comments
    // }
}

export const commentsService = new CommentsService()
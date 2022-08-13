import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const CommentSchema = new Schema({
    postId: { type: Schema.Types.ObjectId, required: true, ref: 'Post' },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    message: { type: String, minlength: 2, maxlength: 50, required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)
// NOTE I dont         v Remember what this will be. NEED TO FIGURE OUT
// CommentSchema.virtual('', {
//     justOne: true,
//     foreignField: '_id',
//     localField: 'postId',
//     ref: 'Post'
// })

CommentSchema.virtual('creatorInfo', {
    justOne: true,
    foreignField: '_id',
    localField: 'creatorId',
    ref: 'Account'
})




  
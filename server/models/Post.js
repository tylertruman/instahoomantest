import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PostSchema = new Schema(
  {
    title: { type: String, maxlength: 50, minlength: 1, required: true },
    img: { type: String, maxlength: 500, minlength: 1, required: true },
    upVotes: { type: Number, default: 0,},
    downVotes: { type: Number, default: 0,},
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

PostSchema.virtual('creatorInfo', {
  justOne: true,
  foreignField: '_id',
  localField: 'creatorId',
  ref: 'Account'
})



export class CommentsController extends BaseController {
    constructor(){
        super('api/comments')
        this.router
        // NOTE Not sure what we will need here, just getting all options laid out
        .get('', this.getComments)
        .get('/:commentId', this.getCommentById)
        .post('', this.createComment)
        .delete('/:commentId', this.deleteComment)
        .put('/:commentId', this.editComment)


    }
}
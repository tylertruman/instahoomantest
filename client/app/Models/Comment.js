export class Comment{
    constructor(data){
        this.id =  data.id,
        this.message = data.message,
        this.postId = data.postId,
        this.creatorInfo = data.creatorInfo
    }

    get Template(){
        return `
        <p><img src="${this.creatorInfo.picture}" height="50" width="50" class="rounded-circle" alt="">${this.message} <small onclick="app.commentsController.deleteComment(${this.id})"class="del-btn">ⓧ</small></p>
        `
    }
}
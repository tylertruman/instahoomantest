export class Comment{
    constructor(data){
        this.id =  data.id,
        this.message = data.message,
        this.postId = data.postId,
        this.creatorInfo = data.creatorInfo
    }

    get Template(){
        return `
        <p><img src="${this.creatorInfo.picture}" height="35" width="35" class="rounded-circle" alt="">
        <small><i>${this.message}</i></small>
        <small class="selectable text-danger" onclick="app.commentsController.deleteComment('${this.id}')"class="del-btn">ⓧ</small></p>
        `
    }
}
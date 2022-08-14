export class Post {
    constructor(data) {
        this.img = data.img
        this.title = data.title
        this.id = data.id
        this.upVotes = data.upVotes
        this.downVotes = data.downVotes
        this.creator = data.creatorInfo
        this.createdAt = data.createdAt
    }

    get CardTemplate() {
        return `
        <div class="pt-5 col-md-3 text-center" onclick="app.allPostsController.setSinglePost('${this.id}')">
            <img class="img-fluid p-img" src="${this.img}" alt="" data-bs-toggle="modal" data-bs-target="#details-modal">
            <br>
            <i class="btn mdi mdi-delete" onclick="app.postsController.deletePost('${this.id}')"></i>
        </div>
        `
    }

    get ModalTemplate() {
        return `
        <div class="row modal-body">
        <div class="col-md-6">
            <div>
                <img class="img-fluid post-img"
                    src="${this.img}"
                    alt="">
            </div>
        </div>
        <div class="col-6">
            <div class="mx-3">
                <div>
                    <h5 class="fw-2">${this.title}</h5>
                </div>
                <div id="comments">
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 border border-top">
        <div class="row justify-content-between p-3">

            <div class="col-3">
                <h4 class="text-center">${this.upVotes} <span class="selectable" onclick="app.postsController.addUpVote('${this.id}')">🔥</span></h4>
            </div>
            <div class="col-3">
                <h4 class="text-center">${this.downVotes} <span class="selectable" onclick="app.postsController.addDownVote('${this.id}')">🥶</span></h4>
            </div>

            <div class="col-6">
                <form onsubmit="app.commentsController.createComment('${this.id}')" class="ps-4">
                    <div class="input-group">
                        <input id="message" type="text" class="form-control" placeholder="Enter Comment"
                            aria-label="post's comments" aria-describedby="button-addon2" minlength="2"
                            maxlength="50">
                        <button class="btn btn-primary" type="submit" id="button-addon2">Post</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
    `
    }
}
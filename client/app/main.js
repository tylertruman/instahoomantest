import { AuthController } from './Controllers/AuthController.js'
import { ValuesController } from './Controllers/ValuesController.js'
import { AllPostController } from './Controllers/AllPostController.js'
import { PostController } from './Controllers/PostController.js'
import { CommentController } from './Controllers/CommentController.js'

class App {
  authController = new AuthController();
  valuesController = new ValuesController();

  allPostController = new AllPostController();
  postController = new PostController();
  commentController = new CommentController();


}

// @ts-ignore
window.app = new App()

import { AuthController } from './Controllers/AuthController.js'
import { ValuesController } from './Controllers/ValuesController.js'
import { FeedController } from './Controllers/FeedController.js'
import { PostController } from './Controllers/PostController.js'

class App {
  authController = new AuthController();
  valuesController = new ValuesController();

  feedController = new FeedController();

  postController = new PostController();
}

// @ts-ignore
window.app = new App()

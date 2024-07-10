/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth/auth_controller';
import BlogController from '#controllers/article/article_controller';
import LinksController from '#controllers/link/links_controller'
import UsersController from '#controllers/user/users_controller';
import { middleware } from '#start/kernel';
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.group(()=>{
  // LINK routes
  router.group(()=>{
    router.get('/', [LinksController, 'index'])
    router.post('/create', [LinksController, 'create']).use(middleware.checkAuthorization());
    router.get('/get', [LinksController, 'get'])
  }).prefix('/link')

  // USER routes
  router.group(()=>{
    router.post('/register', [UsersController, 'create'])
  }).prefix('/user') 

  //AUTH routes
  router.group(()=>{
    router.post('login', [AuthController, 'login'])
  }).prefix('/auth');


  // Blog routes
  router.get('/articles', [BlogController, 'getAllArticles'])

  router.group(() => {
    router.post('/create', [BlogController, 'createBlogArticle']).use(middleware.auth())
    router.put('/update/:id', [BlogController,'updateBlogArticle']).use(middleware.auth())
    router.get('/:slug', [BlogController, 'getArticleBySlug'])
    router.delete('/delete/:id', [BlogController, 'deleteBlogArticle']).use(middleware.auth())
  }).prefix('article')

  //END /Api routes
}).prefix('/api');

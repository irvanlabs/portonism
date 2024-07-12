import ArticleCategoriesController from "#controllers/article/article_categories_controller"
import ArticleController from "#controllers/article/article_controller"
import { middleware } from "#start/kernel"
import router from "@adonisjs/core/services/router"

export const ArticleRoutes = ()=>{
  router.get('/articles', [ArticleController, 'getAllArticles'])

  router.group(()=>{
    // Categories routes
    router.get('categories', [ArticleCategoriesController, 'getAllCategories'])
    router.post('category/create', [ArticleCategoriesController, 'createCategory']).use(middleware.auth())
    router.put('category/update/:id', [ArticleCategoriesController, 'updateCategory']).use(middleware.auth())
  }).prefix('article')


  router.group(() => {
    // Article routes
    router.post('/create', [ArticleController, 'createBlogArticle']).use(middleware.auth())
    router.put('/update/:id', [ArticleController,'updateBlogArticle']).use(middleware.auth())
    router.get('/:slug', [ArticleController, 'getArticleBySlug'])
    router.delete('/delete/:id', [ArticleController, 'deleteBlogArticle']).use(middleware.auth())

  }).prefix('article')
}
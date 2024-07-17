import { BlogService } from '#services/article/article_service';
import { createArticleValidator, updateArticleValidator } from '#validators/article';
import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/fold';

@inject()
export default class ArticleController {
    constructor(
        private blogService: BlogService
    ){}

    async getAllArticles(){
        return await this.blogService.getAllArticles()
    }

    async getBlogPostById({request}: HttpContext){
        // Logic to fetch blog post by id
    }

    async createBlogArticle({request}: HttpContext){
        const user = request.user
        const data = await request.validateUsing(createArticleValidator)
        return await this.blogService.createBlogArticle(user, data)
    }

    async updateBlogArticle({request}: HttpContext){
        let data = await request.validateUsing(updateArticleValidator)
        let {id} = request.params()
        return await this.blogService.updateBlogArticle(id, data)
    }

    async deleteBlogArticle({request}: HttpContext){
        let {id} = request.params()
        let user = request.user
        return await this.blogService.deleteBlogArticle(id, user.id)
    }

    async getUserArticle({request}: HttpContext){
        const user = request.user
        return await this.blogService.getUserArticles(user)
    }

    async getArticleBySlug({request}: HttpContext){
        const {slug} = request.params()
        return await this.blogService.getArticleBySlug(slug)
    }
}
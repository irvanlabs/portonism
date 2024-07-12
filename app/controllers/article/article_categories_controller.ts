import { ArticleCategoriesService } from '#services/article/article_categories_service';
import { createArticleCategoryValidator } from '#validators/article_category';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'


@inject()
export default class ArticleCategoriesController {
    constructor(
        private articleCategoriesService: ArticleCategoriesService
    ){}

    async getAllCategories(){
        return await this.articleCategoriesService.getAllCategory()
    }

    async createCategory({request}: HttpContext){
        let data = await request.validateUsing(createArticleCategoryValidator)
        return await this.articleCategoriesService.createCategory(data)
    }

    async updateCategory({request}: HttpContext){
        let id = Number(request.param('id'))
        let data = await request.validateUsing(createArticleCategoryValidator)
        return await this.articleCategoriesService.updateCategory(id, data)
    }

    async deleteCategory({request}: HttpContext){
        let id = Number(request.param('id'))
        return await this.articleCategoriesService.deleteCategory(id)
    }
}
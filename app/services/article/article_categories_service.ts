import { createArticleCategoryDTO } from "./article_dto.js"
import { BadRequestException } from "#exceptions/exceptions"
import ArticleCategory from "#models/article_category"


export class ArticleCategoriesService{
    async createCategory(data: createArticleCategoryDTO){
        try{
            let categories = await ArticleCategory.create({
                    name: data.name,
            })

            return categories
        }catch(err){
            console.log(err)
            throw new BadRequestException(err.message)
        }
    }

    async getAllCategory(){
        let categories = await ArticleCategory.all()
        return categories;
    }

    async updateCategory(id: number, data: createArticleCategoryDTO){
        let category = await ArticleCategory.findOrFail(id)
            category.name = data.name
            await category.save()
        return category;
    }

    async deleteCategory(id: number){
        let category = await ArticleCategory.findOrFail({id: id})
            await category.delete()
        return category;
    }
}
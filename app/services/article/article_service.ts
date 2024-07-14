import { CreateArticleDto, UpdateArticleDto } from "./article_dto.js";
import _ from "lodash";
import { BadRequestException, NotFoundException } from "#exceptions/exceptions";
import Article from "#models/article_model";


export class BlogService{
    async getAllArticles(){
        let article = await Article.findBy({published: true})
        return article
    }

    async getUserArticles(user: any){
        let article = await Article.findBy({user: user.id})
        return article;
    }

    async getBlogPostById(id: number){
        // Logic to fetch blog post by id
    }

    async getArticleBySlug(slug: string){
        const article = await Article.query()
            .where('slug', slug)
            .andWhere('published', true)
            .preload('categories') // Memuat relasi categories
            .firstOrFail()

  

        if(!article) throw new NotFoundException(`No article`)
        return article
    }

    async createBlogArticle(user, data: CreateArticleDto){
        try {
            const slugify: string = _.snakeCase(data.title).toString()
            let article =  await Article.create({
                title: data.title,
                content: data.content,
                slug: slugify,
                authorId: user.id,
                published: data.published || true,
            })

            if(data.categories && data.categories.length > 0){
                await article.related('categories').attach(data.categories)
            }
            return article
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async updateBlogArticle(id: number, data: UpdateArticleDto|any){
        try{
            let article = await Article.findOrFail(id)
            article.merge({
                title: data.title,
                content: data.content,
                published: data.published,
            })
            await article.save()
    
            if(!article) return new NotFoundException(`Article ${id} not found`)
            return article
        }catch(err){
            throw new BadRequestException(err.meta)
        }
    }

    async deleteBlogArticle(id: number, user_id: any){
        try{
            let article = await Article.findByOrFail({id: id, user_id: user_id})
            await article.delete()
            return article
        } catch (err){
            console.log(err)
            throw new BadRequestException(err)
        }
    }
}
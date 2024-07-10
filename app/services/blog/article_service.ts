import app from "@adonisjs/core/services/app";
import { PrismaClient } from "@prisma/client/extension";
import { CreateArticleDto, UpdateArticleDto } from "./article_dto.js";
import _ from "lodash";
import { BadRequestException, NotFoundException } from "#exceptions/exceptions";

const prisma: PrismaClient = await app.container.make('prisma:db')

export class BlogService{
    async getAllArticles(){
        let article = await prisma.article.findMany({
            include: {
                author: {
                    select: {
                        id: true,
                        fullname: true,
                        // username: true,
                    },
                }
            },
            where: {
                published: true,
            }
        })
        return article
    }

    async getUserArticles(user: any){
        let article = await prisma.article.findMany({
            where: {
                authorId: user.id
            }
        });

        return article;
    }

    async getBlogPostById(id: number){
        // Logic to fetch blog post by id
    }

    async getArticleBySlug(slug: string){
        let article = await prisma.article.findFirst({
            where: {
                slug: slug,
                published: true
            },
            include: {
                categories: true,
            }
        })

        if(!article) throw new NotFoundException(`No article`)
        return article
    }

    async createBlogArticle(user, data: CreateArticleDto | any){
        try {
            const slugify: string = _.snakeCase(data.title).toString()
            let payload = await prisma.article.create({
             data: {
                 title: data.title,
                 content: data.content,
                 slug: slugify,
                 authorId: data.authorId || user.id,
                 published: data.published || true
             }
            })
            return payload
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async updateBlogArticle(id: number, data: UpdateArticleDto|any){
        try{
            let article = await prisma.article.update({
                where: {
                    id: Number(id),
                },
                data: {
                    title: data.title,
                    content: data.content,
                    published: data.published
                }
            })
    
            if(!article) return new NotFoundException(`Article ${id} not found`)
            return article
        }catch(err){
            throw new BadRequestException(err.meta)
        }
    }

    async deleteBlogArticle(id: number, user_id: any){
        try{
            let article = await prisma.article.delete({
                where: {
                    id: Number(id),
                    authorId: user_id
                }
            })
            return article
        } catch (err){
            console.log(err)
            throw new BadRequestException(err)
        }
    }
}
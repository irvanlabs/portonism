import type { HttpContext } from '@adonisjs/core/http'
import LinkService from "#services/link/link_service";
import { inject } from "@adonisjs/core";
import { createLinkValidator, getLinkValidator } from '#validators/link';

@inject()
export default class LinksController {
    constructor(
        private linkService: LinkService
    ){}
    async index({request}: HttpContext){
        return await this.linkService.index();
    }

    async create({request}: HttpContext){ 
        const {slug, url} = await request.validateUsing(createLinkValidator)
        return await this.linkService.createShortlink(slug, url, request.user)
    }

    async get({request}: HttpContext){
        // console.log(ctx.request.params())
        // console.log(request.body())
        const {slug} = await request.validateUsing(getLinkValidator)
        return await this.linkService.getShortlink(slug)
    }
}
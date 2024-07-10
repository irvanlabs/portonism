import _ from 'lodash'
import app from '@adonisjs/core/services/app'
import { PrismaClient } from '@prisma/client/extension'
import * as crypto from 'crypto';
import { customAlphabet } from 'nanoid'
import { NotFoundException, UnauthorizedException } from '#exceptions/exceptions';

const prisma: PrismaClient = await app.container.make('prisma:db')

export default class LinkService{
    async index(){
        return {message: 'hello'}
    }

    generateRandomString = () => {
        const timestamp = Date.now().toString();
        const randomness = Math.random().toString();
        const hash = crypto.createHash('sha256').update(timestamp + randomness).digest('hex');
        return hash.substring(0, 2);
    };
    
    async duplicatePrevention(slug: string, url: string,){
        const slugs = _.shuffle(slug.split('')).join('');
        const link = await prisma.shortlink.create({
            data: {slug: slugs, url}
        })
        return link
    }
    
    async checkSlug(slug){
        const link = await prisma.shortlink.findFirst({
            where: {slug: slug}
        })
        return link
    }
    
    async createShortlink(slug: any, url: any, user: any){
        if(slug !== '' && user == null){
            throw new UnauthorizedException(`User Must Be Logged in`)
        }
        if(!slug){
            const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 5)
            slug = (nanoid().toString())+(this.generateRandomString())
        }
        try {
            const link = await prisma.shortlink.create({
                data: {slug, url}
            })
            return link;
        } catch (error) {
          return await this.duplicatePrevention(slug, url)
        }      
    };

    async getShortlink(slug: string){
        // console.log(slug)
        let result = await prisma.shortlink.findUnique({
            where: {slug: slug}
        });
        if(!result){
            throw new NotFoundException(`No shortlink found`)
        }
        return result;
    };
    
}
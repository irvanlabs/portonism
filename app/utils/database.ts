import app from "@adonisjs/core/services/app"

export async function Prisma(){
    const prisma = await app.container.make('prisma:db')
    return prisma
}
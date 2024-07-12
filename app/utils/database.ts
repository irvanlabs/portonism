import app from "@adonisjs/core/services/app"
import { PrismaClient } from "@prisma/client/extension"

export const main_db: PrismaClient = async ()=> await app.container.make('prisma:db')
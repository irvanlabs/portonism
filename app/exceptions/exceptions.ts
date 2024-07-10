import { Exception } from '@adonisjs/core/exceptions'
import { HttpContext } from '@adonisjs/core/http'


export class BadRequestException extends Exception {
    static status = 400;
    async handle(error: this, ctx: HttpContext) {
        let message = {
            message: this.message,
            code: this.status,
            exception: this.name
        }
        ctx.response.status(error.status).send(message)
    }
}

export class NotFoundException extends Exception {
    static status = 404;
    async handle(error: this, ctx: HttpContext) {
        let message = {
            message: this.message,
            code: this.status,
            exception: this.name
        }
      ctx.response.status(error.status).send(message)
    }
}

export class UnauthorizedException extends Exception {
    static status = 401;
    async handle(error: this, ctx: HttpContext) {
        let message = {
            message: this.message,
            code: this.status,
            exception: this.name
        }
      ctx.response.status(error.status).send(message)
    }
}
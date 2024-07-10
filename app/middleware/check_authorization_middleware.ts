import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import jwt from 'jsonwebtoken';

export default class CheckAuthorizationMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    const authorizationHeader = ctx.request.headers().authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      ctx.request['user'] = null;
      await next();
      return;
    }

    const token = authorizationHeader.replace('Bearer ', '');
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      ctx.request['user'] = decoded;
      await next();
    } catch (e) {
      ctx.request['user'] = null;
      await next();
    }
  }
}

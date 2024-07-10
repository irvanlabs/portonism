import { UnauthorizedException } from '#exceptions/exceptions';
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import jwt from 'jsonwebtoken';

export default class AuthMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    const authorizationHeader = ctx.request.headers()?.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Unauthorized')
    }

    const token = authorizationHeader.replace('Bearer ', '');
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      ctx.request['user'] = decoded;
      await next();
    } catch (e) {
      throw new UnauthorizedException('Unauthorized')
    }
  }
}
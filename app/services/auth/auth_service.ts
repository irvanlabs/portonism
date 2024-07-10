import { UnauthorizedException } from "#exceptions/exceptions"
import { LoginUserDTO } from "#services/user/user_dto"
import app from "@adonisjs/core/services/app"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const prisma = await app.container.make('prisma:db')

export class AuthService {
    async login(data: LoginUserDTO) {
        const users = await prisma.$queryRaw`SELECT * FROM "User" WHERE email = ${data.email}`;
        
        if (!users || users.length === 0) {
          throw new UnauthorizedException('Invalid credentials');
        }
      
        const user = users[0];
      
        const passwordValidation = await bcrypt.compare(data.password, user.password);
        if (!passwordValidation) {
          throw new UnauthorizedException('Invalid credentials');
        }
      
        // Generate JWT token
        const token = await jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h', algorithm: 'HS256' });
      
        return { token };
    }
}
import { UnauthorizedException } from "#exceptions/exceptions"
import { LoginUserDTO } from "#services/user/user_dto"
import jwt from 'jsonwebtoken'
import hash from '@adonisjs/core/services/hash'
import User from "#models/user_model"

export class AuthService {
    async login(data: LoginUserDTO) {
        const users = await User.query().preload('role').where('email', data.email).first()
        if (!users) {
          throw new UnauthorizedException('Invalid credentials');
        }
        const passwordValidation = await hash.verify(users.password, data.password)
        if (!passwordValidation) {
          throw new UnauthorizedException('Invalid credentials');
        }
      
        const roles = users.role.name
        const token = await jwt.sign({ id: users.id, email: users.email, roleId: users.roleId, roles: roles}, process.env.JWT_SECRET_KEY, { expiresIn: '1h', algorithm: 'HS256' });
      
        return { token };
    }
}
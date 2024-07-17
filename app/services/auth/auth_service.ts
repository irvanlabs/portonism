import { LoginUserDTO } from "#services/user/user_dto"
import jwt from 'jsonwebtoken'
import { inject } from "@adonisjs/core"
import UserService from "#services/user/user_service"

@inject()
export class AuthService {

  constructor(
    private userService: UserService
  ){}

    async login(data: LoginUserDTO) {
        let payload = await this.userService.authLogin(data)

        const token = await jwt.sign(
          payload, 
          process.env.JWT_SECRET_KEY, 
          { expiresIn: '1h', algorithm: 'HS256' });
      
        return { token };
    }
}
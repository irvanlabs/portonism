import { userDTO } from "#services/user/user_dto";

declare module '@adonisjs/core/http' {
    export interface Request {
      user: userDTO;
    }
  }
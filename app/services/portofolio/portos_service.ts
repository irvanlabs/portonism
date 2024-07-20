import UserService from "#services/user/user_service";
import { inject } from "@adonisjs/core";

@inject()
export default class PortosService{
    constructor(
        private userService: UserService
    ){}

    async getPortosSPA(uuid: string){
        return await this.userService.getUserPortos(uuid)
    }
}
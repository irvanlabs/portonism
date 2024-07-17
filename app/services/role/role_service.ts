import Role from "#models/role_model";
import UserService from "#services/user/user_service";
import { inject } from "@adonisjs/core";
import { UtilsService } from "../../utils/role_verification.js";
import { userDTO } from "#services/user/user_dto";


@inject()
export class RoleService{
    constructor(
        private userService: UserService,
        private utils: UtilsService,
    ){}

    async getAllRole(user: userDTO){
        let admin = await this.utils.isAdmin(user);
        if(admin){
            let roles = await Role.all()
            return roles
        } 
    }

    async updateRole(user: userDTO, target_user_id: number ,role_id: number){
        let admin = await this.utils.isAdmin(user);
        if(admin){
            return await this.userService.updateUserRole(target_user_id, role_id)
        } 
    }
}
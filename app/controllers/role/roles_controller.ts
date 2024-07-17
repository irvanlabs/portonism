import { RoleService } from '#services/role/role_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { UpdateRoleValidator } from '#validators/role'

@inject()
export default class RolesController {
    constructor(
        private roleService: RoleService,
    ){}

    async getAllRoles({request}: HttpContext){
        let user = request.user
        return await this.roleService.getAllRole(user)
    }

    async updateUserRole({request}: HttpContext){
        let user = request.user
        let target = await request.validateUsing(UpdateRoleValidator)
        return await this.roleService.updateRole(user , target.user_id, target.role_id);
    }
}
import { ForbiddenException } from "#exceptions/exceptions";
import User from "#models/user_model";
import { userDTO } from "#services/user/user_dto";

export class UtilsService{

    // async adminCheck(user_id: number){
    //     let user  = await User.query()
    //     .where('id', user_id)
    //     .preload('role')
    //     .first()
    //     let role = String(user?.role)
    //     if(role !== 'admin') throw new ForbiddenException('Restricted Resource')
    //     return true
        
    // }

    async isUser(user_id: number){
        let user  = await User.query()
        .where('id', user_id)
        .preload('role')
        .first()
        let role = String(user?.role)
        if(role !== 'user') return true
        return true
    }

    async isAdmin(user: userDTO){
        if(user && !user.roles.includes('admin')) throw new ForbiddenException('Restricted Resource')
        return true
    }
}
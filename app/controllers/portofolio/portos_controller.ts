import PortosService from '#services/portofolio/portos_service';
import { getUserPortos } from '#validators/porto';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class PortosController {
    constructor(
        private portosService: PortosService
    ){}

    async getPortosSPA({request}:HttpContext){
        let data = request.params()
        let {uuid} = await getUserPortos.validate(data)
        return await this.portosService.getPortosSPA(uuid)
    }
}
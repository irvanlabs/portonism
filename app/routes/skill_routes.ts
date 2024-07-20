import SkillsController from "#controllers/skill/skills_controller";
import { middleware } from "#start/kernel";
import router from "@adonisjs/core/services/router";

//AUTH routes
export const SkillRoutes = ()=>{
    // router.post('/skills', [AuthController, 'login'])

    router.group(()=>{
      router.get('/my', [SkillsController, 'getMySkill']).use(middleware.auth())
      router.post('/create', [SkillsController, 'createSkill']).use(middleware.auth())
      router.put('/update/:id', [SkillsController, 'updateSkill']).use(middleware.auth())
      router.delete('/delete/:id', [SkillsController, 'deleteSkill']).use(middleware.auth())
    }).prefix('/skill');
}
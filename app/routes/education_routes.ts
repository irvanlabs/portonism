import EducationsController from "#controllers/education/educations_controller"
import { middleware } from "#start/kernel"
import router from "@adonisjs/core/services/router"

  // USER Education routes
export const EducationRoutes = () =>{
    router.group(()=>{
        router.get('/my', [EducationsController, 'getUserEducation']).use(middleware.auth())
        router.post('/create', [EducationsController, 'create']).use(middleware.auth())
        router.put('/update/:id', [EducationsController, 'update']).use(middleware.auth())
        router.delete('/delete/:id', [EducationsController, 'delete']).use(middleware.auth())
    }).prefix('/education') 
};
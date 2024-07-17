import ExperiencesController from "#controllers/experience/experiences_controller"
import { middleware } from "#start/kernel"
import router from "@adonisjs/core/services/router"


export const ExperienceRoutes = () => {
    router.group(()=>{
        router.get('/u/:uuid', [ExperiencesController, 'getUserExperience'])
        router.get('/my', [ExperiencesController, 'getMyExperience']).use(middleware.auth())
        router.post('/create', [ExperiencesController, 'createExperience']).use(middleware.auth())
        router.put('/update/:id', [ExperiencesController, 'updateExperience']).use(middleware.auth())
        router.delete('/delete/:id', [ExperiencesController, 'deleteExperience']).use(middleware.auth())
    }).prefix("experience")
}
import ProfilesController from "#controllers/profile/profiles_controller";
import { middleware } from "#start/kernel";
import router from "@adonisjs/core/services/router";

//AUTH routes
export const ProfileRoutes = ()=>{
    router.group(()=>{
        router.get('/my', [ProfilesController, 'getMyprofile']).use(middleware.auth())
        router.get('/:uuid', [ProfilesController,'getUserProfile'])
      router.put('/update', [ProfilesController, 'updateProfile']).use(middleware.auth())
    }).prefix('profile');
}
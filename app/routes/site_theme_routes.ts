import SiteThemesController from "#controllers/site/site_themes_controller";
import { middleware } from "#start/kernel";
import router from "@adonisjs/core/services/router";

export const SiteThemesRouter = ()=>{
    router.group(()=>{
        router.get('/all', [SiteThemesController,'getAllThemes'])
        router.post('/create', [SiteThemesController, 'createSiteTheme']).use(middleware.auth());
        router.put('/update/:id', [SiteThemesController, 'updateSiteTheme']).use(middleware.auth());
        router.delete('/delete/:id', [SiteThemesController, 'deleteSiteTheme']).use(middleware.auth());
    }).prefix('/site/theme')
}
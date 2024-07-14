/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { UserRoutes } from '../app/routes/user_routes.js';
import { LinkRoutes } from '../app/routes/link_routes.js';
import { AuthRoutes } from '../app/routes/auth_routes.js';
import { ArticleRoutes } from '../app/routes/article_routes.js';
import HealthChecksController from '#controllers/utils/health_checks_controller';
import { EducationRoutes } from '../app/routes/education_routes.js';

router.get('/', async () => {
  return {
    status: 'OK',
  }
});

router.get('/status', [HealthChecksController])

router.group(()=>{
  LinkRoutes();
  UserRoutes();
  AuthRoutes();
  ArticleRoutes();
  EducationRoutes();
}).prefix('/api');

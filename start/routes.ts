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
import { SkillRoutes } from '../app/routes/skill_routes.js';
import { ExperienceRoutes } from '../app/routes/experience_routes.js';
import { ProfileRoutes } from '../app/routes/profile_routes.js';
import { PlanRoutes } from '../app/routes/plan_routes.js';
import { RolesRoutes } from '../app/routes/role_routes.js';

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
  SkillRoutes();
  ExperienceRoutes();
  ProfileRoutes();
  PlanRoutes();
  RolesRoutes();
}).prefix('/api');

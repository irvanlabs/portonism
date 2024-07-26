import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import UserPlan from './user_plan_model.js'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import SiteTheme from './site_theme_model.js';

export default class Plan extends BaseModel {
  static table = 'plans';
  
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description?: string

  @column()
  declare price: number

  @hasMany(() => UserPlan)
  declare userPlans: HasMany<typeof UserPlan>

  @manyToMany(() => SiteTheme, {
    pivotTable: 'plan_site_themes',
  })
  declare siteThemes: ManyToMany<typeof SiteTheme>;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
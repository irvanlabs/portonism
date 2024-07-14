import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import UserPlan from './user_plan_model.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

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


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
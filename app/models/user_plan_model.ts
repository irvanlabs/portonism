import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user_model.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Plan from './plan_model.js'

export default class UserPlan extends BaseModel {
  static table = 'user_plans';

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare planId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Plan)
  declare plan: BelongsTo<typeof Plan>
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
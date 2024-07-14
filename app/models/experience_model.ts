import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user_model.js'

export default class Experience extends BaseModel {
  static table = 'experiences';
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare company: string

  @column()
  declare position: string

  @column()
  declare startDate: DateTime

  @column()
  declare endDate?: DateTime

  @column()
  declare description: string

  @column()
  declare userId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
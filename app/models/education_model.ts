import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user_model.js'

export default class Education extends BaseModel {
  static table = 'educations';

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare institution: string

  @column()
  declare degree: string

  @column()
  declare field: string

  @column.dateTime()
  declare startDate: DateTime

  @column.dateTime()
  declare endDate?: DateTime

  @column()
  declare userId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
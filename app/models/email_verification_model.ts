import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user_model.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class EmailVerification extends BaseModel {
  static table = 'email_verifications';

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare token: string
  
  @column()
  declare expiresAt: DateTime

  @column()
  declare isVerified: boolean

  @belongsTo(()=> User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
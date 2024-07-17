import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user_model.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class PhoneVerification extends BaseModel {
  static table = 'phone_verification'
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare phoneNumber: string

  @column()
  declare userId: number

  @column()
  declare verificationCode: string

  @column()
  declare isVerified: boolean

  @belongsTo(()=> User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'


export enum SkillLevel{
  NOVICE = 'Novice', //pemula
  ADVANCED_BEGINNER = 'Advanced Beginner', // pemula lanjutan
  COMPETENT = 'Competent', // kompeten
  PROFICIENT = 'Proficient', // mahir
  EXPERT = 'Expert' // ahli
}
export default class Skill extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare level: SkillLevel

  @column()
  declare userId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
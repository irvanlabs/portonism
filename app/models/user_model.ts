import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Role from './role_model.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import UserPlan from './user_plan_model.js'
import Article from './article_model.js'
import Profile from './profile_model.js'
import Project from './project_model.js'
import Skill from './skill_model.js'
import Experience from './experience_model.js'
import Education from './education_model.js'

export default class User extends BaseModel {
  static table = 'users';

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullname: string

  @column()
  declare username: string

  @column()
  declare email: string

  @column()
  declare password: string

  @column()
  declare roleId: number

  @column()
  declare phoneNumber: string

  @column()
  declare isEmailVerified: boolean

  @column()
  declare isPhoneVerified: boolean

  @column()
  declare uuid: string

  @belongsTo(() => Role)
  declare role: BelongsTo<typeof Role>

  @hasMany(() => UserPlan)
  declare userPlans: HasMany<typeof UserPlan>

  @hasMany(() => Article)
  declare articles: HasMany<typeof Article>

  @hasMany(() => Profile)
  declare profiles: HasMany<typeof Profile>

  @hasMany(() => Project)
  declare projects: HasMany<typeof Project>

  @hasMany(() => Skill)
  declare skills: HasMany<typeof Skill>

  @hasMany(() => Experience)
  declare experiences: HasMany<typeof Experience>

  @hasMany(() => Education)
  declare educations: HasMany<typeof Education>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
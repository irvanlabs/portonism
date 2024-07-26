import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations';
import User from './user_model.js';

export default class UserSiteConfig extends BaseModel {
  static table = 'users_site_config';

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number;

  @column()
  declare siteUrl: string;

  @column()
  declare themeId: number;

  @column()
  declare canonicalName: string;

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
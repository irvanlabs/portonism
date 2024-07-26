import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Plan from './plan_model.js';
import type { ManyToMany } from '@adonisjs/lucid/types/relations';

export default class SiteTheme extends BaseModel {
  static table = 'site_themes';

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string;

  @column()
  declare imageUrl: string;

  @column()
  declare isActive: boolean;

  @column()
  declare directoryName: string;

  @manyToMany(() => Plan, {
    pivotTable: 'plan_site_themes',
  })
  declare plans: ManyToMany<typeof Plan>;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
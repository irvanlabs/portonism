import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import User from './user_model.js'
import ArticleCategory from './article_category.js'

export default class Article extends BaseModel {
  static table = 'articles'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare content: string

  @column()
  declare slug: string

  @column()
  declare published: boolean

  @column()
  declare userId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @manyToMany(() => ArticleCategory, {
    pivotTable: 'article_category_article',
    localKey: 'id',
    pivotForeignKey: 'article_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'category_id',
  })
  declare categories: ManyToMany<typeof ArticleCategory>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
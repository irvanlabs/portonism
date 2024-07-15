import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Article from './article_model.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class ArticleCategory extends BaseModel {
  static table = 'article_categories';

  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare name: string;

  @manyToMany(() => Article, {
    pivotTable: 'article_category_article', // Nama tabel pivot
    localKey: 'id',
    pivotForeignKey: 'category_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'article_id',
  })
  declare articles: ManyToMany<typeof Article>;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;
}
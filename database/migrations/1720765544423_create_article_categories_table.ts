import { BaseSchema } from '@adonisjs/lucid/schema'

export default class ArticleCategories extends BaseSchema {
  protected tableName = 'article_categories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable().unique()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })

    // Buat tabel pivot untuk many-to-many relationship
    this.schema.createTable('article_category_article', (table) => {
      table.increments('id')
      table.integer('category_id').unsigned().references('id').inTable('article_categories').onDelete('CASCADE')
      table.integer('article_id').unsigned().references('id').inTable('articles').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable('article_category_article')
    this.schema.dropTable(this.tableName)
  }
}
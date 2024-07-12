import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'shortlinks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('uuid').defaultTo(this.db.raw('uuid_generate_v4()')).notNullable()
      table.string('slug').notNullable().unique()
      table.string('url').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').nullable() // Relasi dengan tabel users
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
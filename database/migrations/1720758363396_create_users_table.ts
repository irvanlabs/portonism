import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('fullname').notNullable()
      table.string('username').notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('phone_number').nullable().unique()
      table.string('password').notNullable()
      table.integer('role_id').unsigned().defaultTo(2).references('id').inTable('roles').onDelete('CASCADE')
      table.boolean('is_email_verified').unsigned().defaultTo(0)
      table.boolean('is_phone_verified').unsigned().defaultTo(0)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
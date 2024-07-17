import Plan from '#models/plan_model'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Plan.createMany([
      {
        name: "starter",
        description: "Paket Gratis AWAL",
        price: 0
      },
      {
        name: "intermediate",
        description: "Paket Gratis menengah",
        price: 5000
      },
      {
        name: "Professional",
        description: "Paket Gratis Atas",
        price: 10000
      },
    ])
  }
}
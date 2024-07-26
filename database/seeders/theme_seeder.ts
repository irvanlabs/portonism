import SiteTheme from '#models/site_theme_model'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await SiteTheme.create({
      name: 'Default Theme',
      imageUrl: 'https://www.smarteyeapps.com/storage/products/free-next-technology-html-website-template.webp',
      isActive: true,
      directoryName: 'DefaultTheme'
    })
  }
}
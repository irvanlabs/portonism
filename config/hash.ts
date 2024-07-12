import { defineConfig, drivers } from '@adonisjs/core/hash'

const hashConfig = defineConfig({
  default: 'argon',

  list: {
    scrypt: drivers.scrypt({
      cost: 16384,
      blockSize: 8,
      parallelization: 1,
      maxMemory: 33554432,
    }),

    argon: drivers.argon2({
      variant: 'id',
      iterations: 3,
      memory: 16000,
      parallelism: 4,
      saltSize: 16,
    }),

    bcrypt: drivers.bcrypt({
      rounds: 10,
      saltSize: 16,
    })
  },
})

export default hashConfig

/**
 * Inferring types for the list of hashers you have configured
 * in your application.
 */
declare module '@adonisjs/core/types' {
  export interface HashersList extends InferHashers<typeof hashConfig> {}
}

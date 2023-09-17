import { registerAs } from "@nestjs/config";

export default registerAs('config', () => {
  return {
    application: {
      name: process.env.APP_NAME,
      port: process.env.APP_PORT,
      domain: process.env.APP_DOMAIN,
      url: process.env.APP_URL,
    },
    database: {
      connection: process.env.DB_CONNECTION,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      root_password: process.env.DB_ROOT_PASSWORD,
    },
    apiKey: process.env.API_KEY,
  }
})

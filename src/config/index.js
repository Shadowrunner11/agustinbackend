import 'dotenv/config'

const {env} = process

export const server= {
  port: env.PORT ?? 5000
}

export const dataBase = {
  port: env.MONGO_PORT,
  password: env.MONGO_PASSWORD,
  user: env.MONGO_USER
}
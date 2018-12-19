import Koa from 'koa'

import { middleware1 } from './middlewares'

export default (localConfig = {}) => {
  const app = new Koa()

  app.use(middleware1)
  app.use(ctx => { ctx.body = 'Hello Koa' })

  return app
}

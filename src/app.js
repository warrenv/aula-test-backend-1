import Koa from 'koa'

import { middleware1, songs } from './middlewares'

export default (localConfig = {}) => {
  const app = new Koa()

  app.use(middleware1)
  app.use(songs)
  app.use(ctx => { ctx.body = 'Hello Koa' })

  return app
}

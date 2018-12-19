import Koa from 'koa'

import { middleware1, songs, song } from './middlewares'

export default (localConfig = {}) => {
  const app = new Koa()

  app.use(middleware1)
  app.use(songs)
  app.use(song)
  app.use(ctx => { ctx.body = 'Hello Koa' })

  return app
}

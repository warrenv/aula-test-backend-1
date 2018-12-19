import Koa from 'koa'

import { song, songs } from './middlewares'

export default (localConfig = {}) => {
  const app = new Koa()

  app.use(songs)
  app.use(song)

  return app
}

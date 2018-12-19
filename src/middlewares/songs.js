import * as fs from 'fs'

export default async (ctx, next) => {
  if (ctx.request.url === '/songs') {
    ctx.body = await fs.createReadStream('./data/songs.json')
  } else {
    await next()
  }
}

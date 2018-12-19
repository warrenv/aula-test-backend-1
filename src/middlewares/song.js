import * as fs from 'fs'

const songPath = new RegExp('^/song/[0-9]+$')

export default async (ctx, next) => {
  if (ctx.request.url.match(songPath)) {
    ctx.body = await fs.createReadStream(`./data/songs/${ctx.request.url.split('/').pop()}`)
  } else {
    await next()
  }
}

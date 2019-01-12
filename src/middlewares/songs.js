export default async (ctx, next) => {
  if (ctx.request.url === '/songs') {
    ctx.body = ctx.state.songs
  } else {
    await next()
  }
}

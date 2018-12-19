import { describe } from 'riteway'
import fetch from 'node-fetch'

import app from '../../src/app'

const port = process.env.PORT || 8081
const host = process.env.HOST || 'localhost'

describe('tests/functional/retrieve_song', async assert => {
  const server = app().listen({ port, host }, () => { })

  const songsRequest = await fetch(`http://${host}:${port}/songs`)
  const songsResponse = await songsRequest.json()
  const { id } = songsResponse[0]
  const songRequest = await fetch(`http://${host}:${port}/song/${id}`)

  assert({
    given: 'a request for a song by id',
    should: 'return success',
    actual: songRequest.status,
    expected: 200,
  })

  await server.close()
})

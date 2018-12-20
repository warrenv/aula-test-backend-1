This is a test exercise for the Aula full-stack engineer position.
It is an api server for a song library that:
  - Returns a song catalog containing song metadata.
  - Returns a streamed file when given a song id.

To show basic functionality, text files are returned instead of audio files.

## PreReqs
  - Check `.nvmrc` for the version of nodejs that is required.
  - docker (optional).

## Running the api server

### Using a Terminal

```bash
  $ npm install
  $ npm test
  $ npm start
  # To retrieve the list of songs.
  $ curl http://localhost:8080/songs
  # To retrieve song with id of 1.
  $ curl http://localhost:8080/song/1
```

### Using Docker

```bash
  $ docker build -t aula-backend .
  $ docker run --rm -p 8080:8080 -it aula-backend test
  $ docker run --rm -p 8080:8080 -it aula-backend
  # To retrieve the list of songs.
  $ curl http://localhost:8080/songs
  # To retrieve song with id of 1.
  $ curl http://localhost:8080/song/1
```

## Future Improvements
  - Restrict route verbs (GET, POST, etc).
  - Add logging.
  - Add a health endpoint.
  - Add integration tests.
  - Add a test coverage tool for unit and integration tests.
  - Add user accounts and require login.
  - Add an OpenAPI doc.
  - Add the ability to upload files.
      - extract metadata and update the songs list.
  - Add redis to cache the song catalog.
  - Add better error handling/reporting.
  - Add header parsing and code to allow for playback to start anywhere in the file.

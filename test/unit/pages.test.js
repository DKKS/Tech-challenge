// application tests go here
const app = require('../../src/app.js')
const supertest = require('supertest')
const request = supertest(app)

describe('root endpoint', () => {

it('gets the / endpoint', async () => {
  const response = await request.get('/').send()

  expect(response.statusCode).toEqual(200)
  expect(response.text).toEqual("Hello World")
})

it('gets the /status endpoint', async () => {
  const response = await request.get('/status').send()

  expect(response.statusCode).toEqual(200)
})

afterAll(done => {
     app.close(done)
 })
})

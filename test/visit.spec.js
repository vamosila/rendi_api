import request from 'supertest'
import app from '../app/app.js'

describe('/api/visits', () => {
    const restype= 'application/json; charset=utf-8'
    var token = null

    it('post /visits ', async () => {
      await request(app)
        .post('/api/visits')
        .set('Accept', 'application/json')
        .send({
            name: 'Something'
        })
        .expect('Content-Type', restype)
        .expect(201)

    })
    it('get /visits', async () => {
      await request(app)
        .get('/api/visits')
        .set('Accept', 'application/json')
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('put /visits/:id', async () => {
      await request(app)
        .put('/api/visits/1')
        .set('Accept', 'application/json')
        .send({
            name: 'Another'
        })
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('delete /visits/:id', async () => {
      await request(app)
        .delete('/api/visits/1')
        .set('Accept', 'application/json')
        .expect(200)
    })
})

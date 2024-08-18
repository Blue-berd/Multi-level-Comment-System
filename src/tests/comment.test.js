import request from 'supertest';
import { expect } from 'chai';
import app from '../server.js'; // Adjust if the export is different

describe('Comments API', () => {
  let token;

  before(async () => {
    // Register and log in a user to obtain a token
    await request(app)
      .post('/api/users/register')
      .send({ username: 'testuser', password: 'password' });
    
    const res = await request(app)
      .post('/api/users/login')
      .send({ username: 'testuser', password: 'password' });
    
    token = res.body.token;
  });

  it('should create a comment', async () => {
    const res = await request(app)
      .post('/api/posts/1/comments')
      .set('Authorization', `Bearer ${token}`)
      .send({ text: 'This is a comment' });
    
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('text', 'This is a comment');
  });

  it('should reply to a comment', async () => {
    const res = await request(app)
      .post('/api/posts/1/comments/1/reply')
      .set('Authorization', `Bearer ${token}`)
      .send({ text: 'This is a reply' });
    
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('text', 'This is a reply');
  });

  it('should get comments for a post', async () => {
    const res = await request(app)
      .get('/api/posts/1/comments');
    
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should expand comments', async () => {
    const res = await request(app)
      .get('/api/posts/1/comments/1/expand?page=1&pageSize=10');
    
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });
});

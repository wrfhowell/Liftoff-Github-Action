// src/__tests__/routes/songs.test.ts
import express, { Request, Response } from 'express';
import request from 'supertest';
import { router as songsRouter } from '../src/songs';
import { data } from '../src/seed';

jest.mock('../src/seed', () => ({
  data: [
    { id: 1, title: 'Yesterday', artist: 'The Beatles', album: 'Help!' },
    { id: 2, title: 'Imagine', artist: 'John Lennon', album: 'Imagine' },
  ],
}));

const app = express();
app.use('/songs', songsRouter);

describe('Song Routes', () => {
  it('GET /songs - should return all songs', async () => {
    const response = await request(app).get('/songs');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data.songs);
  });

  it('GET /songs/:id - should return a song by ID', async () => {
    const response = await request(app).get('/songs/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(data.songs[0]);
  });

});

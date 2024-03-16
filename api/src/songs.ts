// src/routes/songs.ts
import express, { Request, Response } from 'express';
import { Song, data } from './seed';


const router = express.Router();

// Get all songs
router.get('/', (req: Request, res: Response) => {
  res.json(data.songs);
});

// Get a song by ID
router.get('/:id', (req: Request, res: Response) => {
  const song = data.songs.find(s => s.id === parseInt(req.params.id));
  console.log(song);
  if (song) {
    res.json(song);
  } else {
    res.status(404).send('Song not found');
  }
});

router.post('/', (req: Request, res: Response) => {
  const newSong: Song = {
    id: data.songs.length + 1, // Simple ID generation
    ...req.body
  };
  data.songs.push(newSong);
  res.status(201).json(newSong);
});

// Update a song
router.put('/:id', (req: Request, res: Response) => {
  const songIndex = data.songs.findIndex(s => s.id === parseInt(req.params.id));
  if (songIndex !== -1) {
    data.songs[songIndex] = { ...data.songs[songIndex], ...req.body };
    res.json(data.songs[songIndex]);
  } else {
    res.status(404).send('Song not found');
  }
});

// Delete a song
router.delete('/:id', (req: Request, res: Response) => {
  const songIndex = data.songs.findIndex(s => s.id === parseInt(req.params.id));
  if (songIndex !== -1) {
    data.songs.splice(songIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Song not found');
  }
});

export { router}

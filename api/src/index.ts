// src/index.ts
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { router as songsRouter } from './songs';

const app = express();
const port = 3000; 
// test
app.use(cors()); 
app.use(bodyParser.json());

app.use('/songs', songsRouter); 

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

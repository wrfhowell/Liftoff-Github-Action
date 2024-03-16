"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// src/routes/songs.ts
const express_1 = __importDefault(require("express"));
const seed_1 = require("./seed");
const router = express_1.default.Router();
exports.router = router;
// Get all songs
router.get('/', (req, res) => {
    res.json(seed_1.data.songs);
});
// Get a song by ID
router.get('/:id', (req, res) => {
    console.log(seed_1.data.songs);
    const song = seed_1.data.songs.find(s => s.id === parseInt(req.params.id));
    console.log(song);
    if (song) {
        res.json(song);
    }
    else {
        res.status(404).send('Song not found');
    }
});
// Create a new song
router.post('/', (req, res) => {
    const newSong = Object.assign({ id: seed_1.data.songs.length + 1 }, req.body);
    seed_1.data.songs.push(newSong);
    res.status(201).json(newSong);
});
// Update a song
router.put('/:id', (req, res) => {
    const songIndex = seed_1.data.songs.findIndex(s => s.id === parseInt(req.params.id));
    if (songIndex !== -1) {
        seed_1.data.songs[songIndex] = Object.assign(Object.assign({}, seed_1.data.songs[songIndex]), req.body);
        res.json(seed_1.data.songs[songIndex]);
    }
    else {
        res.status(404).send('Song not found');
    }
});
// Delete a song
router.delete('/:id', (req, res) => {
    const songIndex = seed_1.data.songs.findIndex(s => s.id === parseInt(req.params.id));
    if (songIndex !== -1) {
        seed_1.data.songs.splice(songIndex, 1);
        res.status(204).send();
    }
    else {
        res.status(404).send('Song not found');
    }
});

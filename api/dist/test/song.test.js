"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/__tests__/routes/songs.test.ts
const express_1 = __importDefault(require("express"));
const supertest_1 = __importDefault(require("supertest"));
const songs_1 = require("../src/songs");
const seed_1 = require("../src/seed");
jest.mock('../src/seed', () => ({
    data: [
        { id: 1, title: 'Yesterday', artist: 'The Beatles', album: 'Help!' },
        { id: 2, title: 'Imagine', artist: 'John Lennon', album: 'Imagine' },
    ],
}));
const app = (0, express_1.default)();
app.use('/songs', songs_1.router);
describe('Song Routes', () => {
    it('GET /songs - should return all songs', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get('/songs');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(seed_1.data.songs);
    }));
    it('GET /songs/:id - should return a song by ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get('/songs/1');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(seed_1.data.songs[0]);
    }));
});

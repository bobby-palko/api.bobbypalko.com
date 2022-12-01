"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.get('/ping', (_, res) => {
    res.send({
        message: 'pong',
    });
});
app.listen(PORT, () => {
    console.log('Server is listening on port', PORT);
});

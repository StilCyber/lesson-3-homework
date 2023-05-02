"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8888;
const parserMiddleware = (0, body_parser_1.default)({});
app.use(parserMiddleware);
const products = [{ id: 1, title: 'cherry' }, { id: 2, title: 'lemon' }];
app.get('/', (req, res) => {
    res.send('Hi');
});
app.get('/products', (req, res) => {
    res.send(products);
});
app.get('/items', (req, res) => {
    res.send('New field');
});
app.post('/products', (req, res) => {
    const newProduct = {
        id: +(new Date()),
        title: req.body.title
    };
    products.push(newProduct);
    res.send(newProduct);
});
app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`);
});

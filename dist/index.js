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
const products = [{ id: 1, title: 'cherry' }, { id: 2, title: 'lemon' }, { id: 3, title: 'orange' }, { id: 4, title: 'banana' },];
app.get('/', (req, res) => {
    res.send('Hi');
});
app.get('/products', (req, res) => {
    res.send(products);
});
app.get('/items', (req, res) => {
    res.send('New field');
});
// app.post('/products', (req: Request, res: Response) => {
//     const newProduct = {
//         id: +(new Date()),
//         title: req.body.title
//     }
//     products.push(newProduct)
//     res.send(newProduct)
// })
app.delete('/products/:id', (req, res) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1);
            res.send(204);
            return;
        }
    }
    res.send(404);
});
app.get('/products/:id', (req, res) => {
    let oneProduct = products.find(f => f.id === +req.params.id);
    if (oneProduct) {
        res.send(oneProduct);
    }
    else {
        res.send(404);
    }
});
app.put('/products/:id', (req, res) => {
    let product = products.find(p => p.id === +req.params.id);
    if (product) {
        product.title = req.body.title;
        res.send(req.body.title);
    }
    else {
        res.send(404);
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`);
});

import express, { Request, Response} from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT || 8888

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)

const products = [{id: 1, title: 'cherry'}, {id: 2, title: 'lemon'}]

app.get('/', (req: Request, res: Response) => {
    res.send('Hi')
})

app.get('/products', (req: Request, res: Response) => {
    res.send(products)
})

app.get('/items', (req: Request, res: Response) => {
    res.send('New field')
})

app.post('/products', (req: Request, res: Response) => {
    const newProduct = {
        id: +(new Date()),
        title: req.body.title
    }
    products.push(newProduct)
    res.send(newProduct)
})

app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
 })
 
 
 
 
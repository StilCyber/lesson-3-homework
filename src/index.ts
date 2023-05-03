import express, { Request, Response} from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT || 8888

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)

const products = [{id: 1, title: 'cherry'}, {id: 2, title: 'lemon'}, {id: 3, title: 'orange'}, {id: 4, title: 'banana'},]

app.get('/', (req: Request, res: Response) => {
    res.send('Hi')
})

app.get('/products', (req: Request, res: Response) => {
    res.send(products)
})

app.get('/items', (req: Request, res: Response) => {
    res.send('New field')
})

// app.post('/products', (req: Request, res: Response) => {
//     const newProduct = {
//         id: +(new Date()),
//         title: req.body.title
//     }
//     products.push(newProduct)
//     res.send(newProduct)
// })


app.delete('/products/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++) {
        if(products[i].id === +req.params.id) {
            products.splice(i, 1)
            res.send(204)
            return
        }
    }
    res.send(404)
})


app.get('/products/:id', (req: Request, res: Response) => {
    let oneProduct = products.find(f => f.id === +req.params.id)
    if(oneProduct) {
        res.send(oneProduct)
    } else {
        res.send(404)
    }
})


app.put('/products/:id', (req: Request, res: Response) => {
    let product = products.find(p => p.id === +req.params.id)
    if(product) {
       product.title = req.body.title
       res.send(req.body.title)
    } else {
       res.send(404)
    }
    
 })

app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
 })
 
 
 
 
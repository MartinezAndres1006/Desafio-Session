// llamado de dependencias
const express = require('express')
const app= express()


// llamado a rutas
const login = require('./routes/login')
const productsRouters = require('./routes/products')
const productsRouter = require('./routes/fakerRoutes')
const port= 8080
const session = require('express-session')

const path=require('path')
// config
// app.engine('handlebars', handlebars.engine())
app.set('views',path.join(__dirname,'views'))
// app.set('views', './views')
app.set('view engine', 'ejs')


const server = app.listen(port,()=> console.log(`Server Iniciado en el ${port}🔥`))


// usos
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('views'))
app.use(express.static('public'))
// app.use("/api/products-test",productsRouter)
app.use("/products",productsRouters)
app.use('/',login)







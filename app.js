const express = require('express')
const handlebars = require('express-handlebars')
const app= express()
const productsRouters = require('./routes/products')
const server = app.listen(8080,()=> console.log("Server up"))
const productsRouter = require('./routes/fakerRoutes')
const path=require('path')
// config
app.engine('handlebars', handlebars.engine())
app.set('views',path.join(__dirname,'views'))
// app.set('views', './views')
app.set('view engine', 'ejs')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('views'))
app.use(express.static('public'))



app.use("/",productsRouter)
app.use("/products",productsRouters)



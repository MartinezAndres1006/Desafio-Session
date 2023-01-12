const router=require('express').Router()

const datos = require('../controller/fakerProducts')



router.get('/',datos)
console.log(datos)



module.exports=router
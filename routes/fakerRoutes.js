const router=require('express').Router()

const datos = require('../controller/fakerProducts')

router.get('/',datos)


module.exports=router
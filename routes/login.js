const express = require('express')
const router = express.Router()
const session = require('express-session')
const FileStore= require('session-file-store')
const cookieParser = require('cookie-parser')
const User= require('../models/user')



const Store = FileStore(session)
router.use(cookieParser())

router.use(session({
    store: new Store({
        path: './session',
        ttl: 60000,
    }),
    cookie: {maxAge: 60000},
    key: 'user_sid', 
    secret: 'c0d3r',
    resave: true,
    saveUninitialized: true,
}))



router.get('/',(req,res)=>{

    res.redirect('/login')
})


router.get("/login", (req, res) => {
    res.render("login");
});


router.post("/", (req, res) => {
    const { nombre } = req.body.username;
    console.log(nombre);
    req.session.nombre = nombre;
    res.redirect("/");
});




module.exports=router;
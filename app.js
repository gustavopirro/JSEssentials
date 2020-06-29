const express = require ('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get('/', (req, res)=>{
    res.render("home");
})

server.get('/content', (req,res)=>{
    res.render("content")
})

server.get('/about', (req,res)=>{
    res.render("about") 
})

server.listen(3333, function(){
    console.log('Server running 3333!');
});
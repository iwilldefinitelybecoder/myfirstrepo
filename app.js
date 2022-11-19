const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        console.log('new connection...')
        res.end('welcome to our home page')
    
    }
    else if(req.url ==='/about'){
        console.log('sfddd')
        res.end('here is our brief history')
    }
    else{
        console.log('oops some one typed wrong url')
        res.end(`
        <h1>Oops!</h1>
        <h1>404 Page Not found</h1>
        <a href="/">back home</a>
    `)
    }
})

server.listen(5000)
console.log('listening on port 5000')


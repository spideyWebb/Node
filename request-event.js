const http = require('http')

const server = http.createServer()

server.on('request', (req, res)=>{
    console.log("Hello Brother")
    res.end(`<h1>Sachin</h1>`)
})

server.listen(5000)
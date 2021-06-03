const http = require("http")

const server = http.createServer((req, res) => {
    console.log("You there right now")
    res.writeHead(200)
    res.end("Hello, God is good all the time")
})

server.listen(5100, () => {
    console.log("Server is running on port 5100")
})
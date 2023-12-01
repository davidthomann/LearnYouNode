const http = require('http');
const port = process.argv[2]

const server = http.createServer(function (req, res) {

    const iso = req.url.split("?iso=")[1]
    const date = new Date(iso)
    let response = ""
    const urlpath = req.url.split("?")[0]

    if (urlpath === '/api/parsetime') {
        response = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        }
    } else if (urlpath === '/api/unixtime') {
        response = { unixtime: new Date(date).getTime() }
    }



    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(response))
})
server.listen(port)
const http = require('http');
const pid = process.pid

const server = http.createServer((req, res) => {
  console.log('Request PId',pid)
  res.end(`Hel2lo from Node.js!!! ${pid}`)
}).listen(8800, () => {
  console.log(`Process listen in port 8800, PID: ${pid}`)
})

process.on('SIGINT', () => {
  console.log(`server closed PID: ${pid}`)
  server.close(() => {
    process.exit();
  })
})

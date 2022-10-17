import http from 'http'

const server = http.createServer((req, res)=>{
  if(req.method === 'GET'){
    if(req.url === '/agustin'){
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write('<h1>Hla soy Agustin</h1>')
      return res.end()
    }
  }
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write('<h1>Hello world</h1>')
  res.end()
})

server.listen(5000)

server.on('listening', ()=>{
  console.log('se incio el servidor en http://localhost:5000/')
})

server.on('request', (req)=>{
  console.log(req.method+ ' at http://localhost:5000'+req.url)
})
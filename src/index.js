import server from "./server/index.js";
import {server as serverConfig} from './config/index.js'

server.listen(serverConfig.port, ()=>{
  console.log(`listenig at http://localhost:${serverConfig.port}`)
})


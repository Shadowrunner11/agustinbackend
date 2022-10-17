import Express from "express"
import morgan from "morgan"
import mainRouter from "../routes/index.js"

const server = Express()

server.use(morgan('dev'))

server.use(mainRouter)

server.on('error', ()=>{
  console.log('Upss la cague')
})


export default server
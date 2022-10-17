import { Router } from "express";

const agustinRouter = new Router()

export default agustinRouter

agustinRouter.get('/agustin',(_, res)=>{
  res.json({success:true, name: 'Agustin', lastName: 'Godoy'})
})

agustinRouter.get('/piero',(_, res)=>{
  res.json({success:true, name: 'Piero', lastName: 'Ramirez'})
})
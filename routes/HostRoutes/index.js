import express from 'express';
import Host from '../../db/models/HostSchema.js';

const router=express.Router()


router.post('/signup',async(req,res)=>{
  
  res.status(201).json({message:'signup successfully'})


 
})
router.post('/login',async(req,res)=>{
 
  res.status(201).json({message:'login successfully'})
})

export default router;
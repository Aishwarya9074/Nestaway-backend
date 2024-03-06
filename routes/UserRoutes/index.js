import express from 'express';

const router=express.Router()


router.post('/signup',(req,res)=>{
  res.status(201).json({message:'Signup is successfull'})
})
router.post('/login',(req,res)=>{
    res.status(201).json({message:'login successfully'})
})

export default router;
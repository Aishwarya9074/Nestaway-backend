import express from 'express'
import HostRoutes from "./HostRoutes/index.js";
import UserRoutes from "./UserRoutes/index.js";
import HomestayRoutes from "./HomestayRoutes/index.js";
import imageRoutes from './imageRoutes/index.js';
import BookingRoutes from "./BookingRoutes/index.js";


const router=express.Router()


router.use('/host', HostRoutes)
router.use('/user',UserRoutes)
router.use('/homestay',HomestayRoutes)
router.use('/images',imageRoutes)
router.use('/booking',BookingRoutes)


export default router;
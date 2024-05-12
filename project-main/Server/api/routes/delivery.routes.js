import express from 'express'
import { addDeliveryDetails } from '../controllers/delivery.controller'

const router = express.Router();

router.post('/adddelivery', addDeliveryDetails);
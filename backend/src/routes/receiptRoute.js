import express from 'express'
import { processReceipt } from '../controllers/receiptController.js'

const router = express.Router()

router.post('/', processReceipt)

export default router

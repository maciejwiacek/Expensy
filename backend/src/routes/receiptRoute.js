import express from 'express'
import { parseReceipt } from '../controllers/receiptController.js'

const router = express.Router()

router.post('/parse-receipt', parseReceipt)

export default router

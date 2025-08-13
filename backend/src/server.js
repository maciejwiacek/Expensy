import express from 'express'
import receiptRoute from './routes/receiptRoute.js'
import multer from 'multer'
import 'dotenv/config'

const PORT = process.env.PORT || 3000
const app = express()

const upload = multer({
  storage: multer.memoryStorage(),
})

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' })
})

app.use('/api/receipts', upload.single('file'), receiptRoute)

app.listen(PORT, () => {
  console.log('Server is up and running on PORT:', PORT)
})

import express from 'express'
import receiptRoute from './routes/receiptRoute.js'
import 'dotenv/config'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json({ limit: '10mb' }))

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' })
})

app.use('/api/receipt', receiptRoute)

app.listen(PORT, () => {
  console.log('Server is up and running on PORT:', PORT)
})

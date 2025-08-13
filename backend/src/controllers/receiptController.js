import { getReceiptData, parseReceiptData } from '../utils/receiptUtils.js'

export const processReceipt = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' })
  }

  const ocrResult = await getReceiptData(req.file)
  const aiResponse = await parseReceiptData(ocrResult)

  res.json({ text: aiResponse })
}

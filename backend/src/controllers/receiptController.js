import { getReceiptData, parseReceiptData } from '../utils/receiptUtils.js'

export const processReceipt = async (req, res) => {
  const { imageBase64 } = req.body

  const ocrResult = await getReceiptData(imageBase64)
  const aiResponse = await parseReceiptData(ocrResult)

  res.json({ text: aiResponse })
}

import client from '../config/google-vision.js'

export const parseReceipt = async (req, res) => {
  const { imageBase64 } = req.body
  const imageBuffer = Buffer.from(imageBase64, 'base64')

  const [result] = await client.textDetection({
    image: { content: imageBuffer },
  })

  const detections = result.textAnnotations
  res.json({ text: detections[0]?.description || '' })
}

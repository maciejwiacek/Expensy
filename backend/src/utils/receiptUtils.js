import client from '../config/google-vision.js'
import ai from '../config/gemini-ai.js'

export const getReceiptData = async (receiptImage) => {
  const imageBuffer = Buffer.from(receiptImage, 'base64')

  const [result] = await client.textDetection({
    image: { content: imageBuffer },
  })

  const detections = result.textAnnotations
  return detections[0]?.description || ''
}

export const parseReceiptData = async (ocrResult) => {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `
        You are an expert at correcting and normalizing receipt data in Polish. The following OCR extract may have small errors (like ENERPIO instead of ENERBIO, Flurry_Pistacja instead of McFlurry Pistacjowe, or misrecognized shop and product names). Your task is to improve, normalize, and structure the data, returning it as JSON in Polish with the following structure:

        json
        {
        "shopName": "", // normalized shop name, e.g., "ROSSMANN", "Biedronka", "Lidl"
        "date": "", // date of receipt, format: YYYY-MM-DD
        "products": [
            {
            "name": "", // normalized product name
            "quantity": 1, // integer
            "price": 0.00 // price per item
            }
        ]
        }
        If there are mistakes in OCR (e.g., misspelled names), correct them. Do not include products or lines that are not products. Output only valid JSON and all text and keys in Polish.

        Here is the OCR result:

        text
        ${ocrResult}
    `,
  })

  return response.text
}

import vision from '@google-cloud/vision'

const client = new vision.ImageAnnotatorClient({
  keyFilename: './google-vision.json',
})

export default client

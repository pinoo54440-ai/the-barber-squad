// Minimal static server for Railway (serves the built Vite app in /dist)
import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, 'dist')
const port = process.env.PORT || 3000

const app = express()
app.use(express.static(dist))
// Single-page app: send index.html for any unknown route
app.get('*', (_req, res) => res.sendFile(join(dist, 'index.html')))

app.listen(port, '0.0.0.0', () => {
  console.log(`The Barber Squad running on http://0.0.0.0:${port}`)
})

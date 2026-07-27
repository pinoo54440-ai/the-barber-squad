// Minimal static server for Railway (serves the built Vite app in /dist)
import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, 'dist')
const port = process.env.PORT || 3000

const app = express()
// Serve static assets, but let "/" fall through so we can pick the page by host
app.use(express.static(dist, { index: false }))

// The "academie." subdomain serves the academy page as its home;
// everything else serves the main single-page app.
app.get('*', (req, res) => {
  const host = (req.headers.host || '').toLowerCase()
  if (host.startsWith('academie.')) {
    return res.sendFile(join(dist, 'academie.html'))
  }
  res.sendFile(join(dist, 'index.html'))
})

app.listen(port, '0.0.0.0', () => {
  console.log(`The Barber Squad running on http://0.0.0.0:${port}`)
})

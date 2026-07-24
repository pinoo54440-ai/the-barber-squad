import { useEffect } from 'react'
import page from './page.html?raw'
import { initSite } from './init.js'

/**
 * The Barber Squad — one-page site.
 *
 * The markup lives in ./page.html (easy to edit, no JSX escaping) and is
 * injected here; all the interactions (preloader, custom cursor, magnetic
 * buttons, scroll-reveal, FR/EN toggle, booking modal) are wired up in
 * ./init.js. This keeps the design 1:1 with the approved version while giving
 * you a real Vite + React project you can grow into components later.
 * framer-motion is installed and ready if you want to animate components.
 */
export default function App() {
  useEffect(() => {
    initSite()
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: page }} />
}

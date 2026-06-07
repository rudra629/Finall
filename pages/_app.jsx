import { useEffect } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initializing WOW.js on the client side
    const WOW = require('wowjs')
    new WOW.WOW().init()
  }, [])

  return <Component {...pageProps} />
}
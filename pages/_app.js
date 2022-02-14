import { AppWrapper } from '../context/ProfileContext'

import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp

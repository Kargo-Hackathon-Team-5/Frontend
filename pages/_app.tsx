import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import UtilsProvider from '../context/utils';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <UtilsProvider>
    <Component {...pageProps} />
  </UtilsProvider>
  )
}

export default MyApp

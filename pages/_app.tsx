import React, { Fragment } from 'react'
import { ViewportProvider } from '../providers/viewport'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ViewportProvider>
        <Component {...pageProps} />
      </ViewportProvider>
    </Fragment>
  )
}
export default MyApp

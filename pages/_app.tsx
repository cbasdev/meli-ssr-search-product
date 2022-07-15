import type { AppProps } from 'next/app'
import MainLayout from '@/layouts/MainLayout'
import '@/assets/styles/globals.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

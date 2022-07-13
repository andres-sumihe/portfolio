import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'

const Main: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Andres Sumihe</title>
        <meta name="description" content="Portfolio - Andres Sumihe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <Home />
      </main>
      <Footer/>
    </>
  )
}

export default Main

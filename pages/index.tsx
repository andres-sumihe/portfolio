import type { NextPage } from 'next'
import Head from 'next/head'
import About from './components/about'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'

const Main: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Andres Sumihe</title>
        <meta name="description" content="Portfolio - Andres Sumihe" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <Home />
        <About />
      </main>
      <Footer/>
    </>
  )
}

export default Main

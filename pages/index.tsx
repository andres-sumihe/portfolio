import type { NextPage } from 'next'
import Head from 'next/head'
import About from './components/about'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import Resume from './components/resume'

const Main: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Andres Sumihe</title>
        <meta name="description" content="Portfolio - Andres Sumihe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,700,800&amp;display=swap" rel="stylesheet" />
      </Head>
      <Header />

      <main>
        <Home />
        <About />
        <Resume />
      </main>
      <Footer/>
    </>
  )
}

export default Main

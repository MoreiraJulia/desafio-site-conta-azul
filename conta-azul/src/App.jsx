import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Sections from './components/Sections'

function App() {

  return (
    <>
    <Header />
    <main className="mt-6">
      <Sections />
    </main>
    <Footer />
    </>
  )
}

export default App

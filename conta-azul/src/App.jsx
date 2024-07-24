import Header from './components/Header'
import Footer from './components/Footer'
import Sections from './components/Sections'

function App() {

  return (
    <>
    <Header />
    <main className="pt-14 sm:pt-16 md:pt-20">
      <Sections />
    </main>
    <Footer />
    </>
  )
}

export default App

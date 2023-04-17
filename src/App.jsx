import React, {useState} from "react"

import Navbar from "./components/Navbar"
import MainPage from "./components/MainPage"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"


function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
    <main className="px-6 md:px-20 lg:px-40 text-slate-200 bg-indigo-950" >
      <section className='min-h-screen'>
        <Navbar />
        <MainPage />
      </section>
      <section>
        <Technologies />
      </section>
      <section>
        <Projects />
      </section>
    </main>

    </>
  )
}

export default App

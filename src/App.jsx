import { Header } from './components/Header'
import { Presentation } from './components/Presentation'
import { Projects } from './components/Projects'

function App() {

  return (
    <>
      <div className="background_container">
          <div className="radial-pulse"></div>
          <div className="noise-pattern"></div>
          <div className="radial-gradient"></div>
      </div>
      <main>
          <Header />
          <Presentation />
          <Projects />
      </main>
    </>
  )
}

export default App

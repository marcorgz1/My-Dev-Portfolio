import { Header } from './components/Header'
import { Presentation } from './components/Presentation'
import { Projects } from './components/Projects'
import { DevelopmentTools } from './components/DevelopmentTools'
import { Studies } from './components/Studies'
import { AboutMe } from './components/AboutMe'
import { Experience } from './components/Experience'

function App() {

  return (
    <>
      <main>
          <Header />
          <Presentation />
          <Studies />
          <Experience />
          <DevelopmentTools />
          <Projects />
          <AboutMe />
      </main>
    </>
  )
}

export default App

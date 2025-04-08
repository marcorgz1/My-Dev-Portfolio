import { Header } from './components/Header'
import { Presentation } from './components/Presentation'
import { Projects } from './components/Projects'
import { DevelopmentTools } from './components/DevelopmentTools'
import { Studies } from './components/Studies'

function App() {

  return (
    <>
      <main>
          <Header />
          <Presentation />
          <Studies />
          <DevelopmentTools />
          {/* <Projects /> */}
      </main>
    </>
  )
}

export default App

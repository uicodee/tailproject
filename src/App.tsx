import {Layout} from "./components/Layout.tsx";
import {Hero} from "./components/Hero.tsx";
import {Partners} from "./components/Partners.tsx";
import {Mission} from "./components/Mission.tsx";
import {Coaching} from "./components/Coaching.tsx";

function App() {

  return (
      <Layout>
          <Hero />
          <Partners />
          <Mission />
          <Coaching />
      </Layout>
  )
}

export default App

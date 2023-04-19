import { BrowserRouter } from "react-router-dom"
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Summary from './components/Summary'
import Graph from './components/Graph'

const App = () => {

  return (
    <BrowserRouter  >
      <div className="bg-[#ffffff] h-screen w-full flex gap-1">

        <SideBar />
        <div >
          <Navbar />
          <div className="absolute min-w-[64rem] w-[75%] left-[20.37rem] top-[12.7rem] flex justify-center items-center gap-[1rem]">
            <Graph />
            <Summary />
          </div>
          <Stats />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

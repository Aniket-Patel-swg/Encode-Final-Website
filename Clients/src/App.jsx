import Canvas from './canvas';
import AboutEncode from './pages/AboutEncode';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import HomePage from './pages/Homepage';
import Secondpage from './pages/SecondPage';
import UpcommingEvents from './pages/UpcommingEvents';

function App() {
  return (
    <>
    <HomePage />
    <AboutEncode />
    <main className="realtive app transition-all ease-in">
      {/* <Home />
      <Canvas />
      <Customizer /> */}
    </main>
    {/* <Secondpage /> */}
    <UpcommingEvents />
    </>
  )
}

export default App

import Canvas from './canvas';
import AboutEncode from './pages/AboutEncode';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import HomePage from './pages/Homepage';
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
    <UpcommingEvents />
    </>
  )
}

export default App

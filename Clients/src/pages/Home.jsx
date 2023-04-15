import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import '../index.css';
import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
import SecondPage from './SecondPage';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <>
    <div className="absolute ">
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          {/* <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'
              alt="logo"
              className="w-12 h-12 object-contain"
            />
          </motion.header> */}

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                Encode <br className="xl:block hidden" /> Club.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
              Create your unique and exclusive shirt with our 3D customization tool. Join the <strong>Science and technical club of PDEU</strong>{" "} and define your own way.
              </p>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      
      )}
    </AnimatePresence>
    </div>
    
    </>
  )
}

export default Home
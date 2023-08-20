import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import WorkSlider from "../../components/WorkSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ParticlesContainer from "../../components/ParticlesContainer";

const Work = () => {
  return (
    <div className="md:bg-black/80 bg-black py-36 flex items-center h-full">
      <Circles />
      <ParticlesContainer />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-2xl font-semibold pt-16 pb-6 md:h2 xl:mt-20"
            >
              {" "}
              My Works <span className="text-pink-600">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Creating Understanding of Intelligent Interfaces: Converting
              Concepts into Fluid Experiences. Improve your project using my
              knowledge in front-end development.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;

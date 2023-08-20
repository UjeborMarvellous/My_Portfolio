import ParticlesContainer from "../../components/ParticlesContainer";
import TestimonialSlider from "../../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <div className="md:bg-black/80 bg-black py-36 flex text-center h-full">
      <ParticlesContainer />
      <div className="container mx-auto h-full flex flex-col justify-center">
        <h1 className="h2 mt-16 mb-8 xl:mb-0">
          What Clients<span className="text-pink-600"> Say.</span>
        </h1>
        <div>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

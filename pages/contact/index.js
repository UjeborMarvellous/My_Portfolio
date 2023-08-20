import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="md:bg-black/80 bg-black py-36 flex text-center h-full">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="grid max-w-[780px]">
          <h2 className="h2 text-center mb-12">Get In Touch <span className="text-pink-600">With Me.</span></h2>
          <form className="flex-1 flex flex-col gap-6 w-full mx-auto">
            <div className="flex gap-x-4">
              <input type="text" placeholder="Name" className="bg-transparent border border-white/20 rounded-lg py-3 w-full px-6 focus:border focus:border-green-600"/>
              <input type="email" placeholder="Email" className="bg-transparent border border-white/20 rounded-lg py-3 w-full px-6 focus:border focus:border-green-600  invalid:border-red-500 invalid:border-2"/>
            </div>
              <input type="text" placeholder="Subject" className="bg-transparent border border-white/20 rounded-lg py-3 w-full px-6 focus:border focus:border-green-600 placeholder:text-white/20"/>
              <textarea name="" id=""  placeholder="Message" className="bg-transparent border border-white/20 rounded-lg py-3 w-full px-6 focus:border focus:border-green-600 placeholder:text-white/20 pb-32"></textarea> 
              <button className="btn rounded-full border border-white/50 max-w-[50%] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-pink-600 group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Let's talk</span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all dutation-300 absolute text-[32px]"/>
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

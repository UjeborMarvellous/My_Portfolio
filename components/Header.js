import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between item-center gap-y-6 py-8">
          <Link href={'/'}>
            <h1 className="lg:text-4xl md:text-3xl sm:text-3xl text-center font-normal uppercase">Marvellous <span className="font-thin md:text-3xl text-xl">Ujebor</span><span className="text-pink-600 text-xl font-semibold">.</span></h1>
          </Link>
          <div>
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

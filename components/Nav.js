// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "About", path: "/about", icon: <HiUser /> },
  { name: "Services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "Work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "Testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className=" flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] x-50 z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/20 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-pink-600"
              } relative flex items-center text-lg group hover:text-pink-600 transition-all duration-300`}
              href={link.path}
              key={index}
            >
              <div className="pr-14 absolute right-0 hidden xl:group-hover:flex">
                <div className="bg-white/80 font-semibold px-10 rounded-full relative flex text-primary items-center p-[6px]">
                  <div className="text-[14px]">{link.name}</div>
                </div>
                {/* <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute right-12 top-3"></div> */}
              </div>
              {link.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;

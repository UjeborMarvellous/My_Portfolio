import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-n-none">
      <Image src={"/Ava4.png"} alt="" width={600} height={600} className="translate-z-0 w-[50%] h-[50%]" />
    </div>
  );
};

export default Avatar;

import Image from "next/image";

const UpperNavbar = () => {
  return (
    <nav className="container py-[7px] bg-[#1FE0BA] hidden md:block">
      <div className="flex items-center justify-center gap-x-[15px]">
          <Image
            src="/assets/icon/star.png"
            width={13}
            height={13}
            alt="clock icon"
            className="w-[13px] h-[13px]"
          />
          <p className="text-xs  xl:text-sm font-bold text-[#4D4D4D]">
          Create your dream space in Toronto with Fuzion Designs
          </p>
          <Image
            src="/assets/icon/star.png"
            width={13}
            height={13}
            alt="clock icon"
            className="w-[13px] h-[13px]"
          />
        </div>
    </nav>
  );
};

export default UpperNavbar;

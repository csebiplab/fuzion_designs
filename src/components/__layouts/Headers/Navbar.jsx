"use client";

// import constants from "@/components/lib/constants";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import UpperNavbar from "./UpperNav";
import "./Navbar.css";

const our_service_menu_items = {
  interior: [
    {
      title: "Home Additions in Toronto",
      route: "/home_additions_in_toronto",
    },
    {
      title: "Basement Renovations in Toronto",
      route: "/basement_renovations_in_toronto",
    },
  ],
};

function OurServiceManu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = (data = []) => {
    return data?.map(({ route, title }, key) => (
      <Link href={route} key={key}>
        <MenuItem className="rounded-md">
          <Typography color="blue-gray">{title}</Typography>
        </MenuItem>
      </Link>
    ));
  };

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
        className="bg-gray-100"
      >
        <MenuHandler>
          <Typography
            as={Link}
            href="/our-services"
            variant="small"
            color="blue-gray"
            className="font-medium text-lg"
          >
            <ListItem
              className="flex items-center gap-2 rounded-full py-1  pr-4 font-normal  text-sm lg:text-base 5xl:text-[17px]   text-black"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Our Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-[100vw] w-screen lg:block border-0 outline-0 bg-gray-100">
          <div className="container grid grid-cols-3 gap-y-2">
            <div>
              <h3 className="mb-1 text-primary font-semibold">Interior</h3>
              <ul>{renderItems(our_service_menu_items.interior)}</ul>
            </div>
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <h4 className="text-primary mb-1 font-semibold">Interior</h4>
          <ul>{renderItems(our_service_menu_items.interior)}</ul>
          <hr className="my-1" />
        </Collapse>
      </div>
    </>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row  border-0 outline-none">
      <Typography
        as={Link}
        href="/about_us"
        variant="small"
        color="blue-gray"
        className="font-normal rounded-full text-sm lg:text-base 5xl:text-[17px]  text-black"
      >
        <ListItem className="flex items-center rounded-full px-1 lg:px-2 2xl:px-4 4xl:px-6">
          About Us
        </ListItem>
      </Typography>

      <Typography
        as={Link}
        href="/how_we_work"
        variant="small"
        color="blue-gray"
        className="font-normal rounded-full text-sm lg:text-base 5xl:text-[17px]  text-black"
      >
        <ListItem className="flex items-center rounded-full px-1 lg:px-2 2xl:px-4 4xl:px-6">
          How We Work
        </ListItem>
      </Typography>
      <div className="mt-[6px]">
        <OurServiceManu />
      </div>
      <Typography
        as={Link}
        href="/gallery"
        variant="small"
        color="blue-gray"
        className="font-normal rounded-full text-sm lg:text-base 5xl:text-[17px]  text-black"
      >
        <ListItem className="flex items-center rounded-full px-1 lg:px-2 2xl:px-4 4xl:px-6">
          Gallery
        </ListItem>
      </Typography>

      <Typography
        as={Link}
        href="/blogs"
        variant="small"
        color="blue-gray"
        className="font-normal rounded-full text-sm lg:text-base 5xl:text-[17px]  text-black"
      >
        <ListItem className="flex items-center rounded-full px-1 lg:px-2 2xl:px-4 4xl:px-6">
          Blogs
        </ListItem>
      </Typography>

      <Typography
        as={Link}
        href="/contact-us"
        variant="small"
        color="blue-gray"
        className="font-normal rounded-full text-sm lg:text-base 5xl:text-[17px]   text-black"
      >
        <ListItem className="flex items-center rounded-full px-1 lg:px-2 2xl:px-4 4xl:px-6">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarHeader() {
  const pathname = usePathname();
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  if (pathname.startsWith("/admin")) return null;
  return (
    <>
      <header className="sticky top-0 z-50">
        {/* large device  */}
        <div className="hidden lg:block">
          <div>
            <UpperNavbar />
          </div>

          <div className="custom-container main__nav">
            <Navbar className="container rounded-none py-2 shadow-none max-w-full">
              <div className="flex items-center justify-between text-blue-gray-900">
                <Link href="/" className="mr-10 cursor-pointer">
                  <Image
                    src="/assets/icon/nav_icon.png"
                    width={200}
                    height={83}
                    alt="brand logo"
                    className="w-[200px] h-[83px]"
                  />
                </Link>
                <div className="w-full">
                  <div className="flex justify-between pl-6">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src="/assets/icon/email_icon.png"
                        width={21}
                        height={21}
                        alt="email icon"
                        className="w-[21px] h-[21px]"
                      />
                      <div>
                        <a
                          href="email:info@fuziondesigns.ca"
                          className="text-[15px] xl:text-base 3xl:text-lg font-bold text-[#0C1C3C]"
                        >
                          info@fuziondesigns.ca
                        </a>
                      </div>
                    </div>
                    <div className="mt-1">
                      <a href="tel:+1 416-571-0011">
                        <button className="nav__btn flex items-center gap-[5px] text-base font-normal text-white py-[7px] px-[12px]">
                          Estimate
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="12"
                            viewBox="0 0 21 12"
                            fill="none"
                          >
                            <path
                              d="M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM0 6.75H20V5.25H0V6.75Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className="w-full h-0.5 bg-[#0170B9] my-1" />

                  <div className="flex justify-between ">
                    <div className="hidden lg:block">
                      <NavList />
                    </div>

                    <div>
                      <a href="tel:+1 416-571-0011">
                        <button className="nav__btn flex items-center gap-[5px] text-base font-normal text-white py-[7px] px-[12px]">
                          <Image
                            src="/assets/icon/phone_icon.png"
                            width={17}
                            height={17}
                            alt="phone icon"
                            className="w-[17px] h-[17px]"
                          />
                          +1 416-571-0011
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Navbar>
          </div>
        </div>

        {/* small device  */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-center gap-x-[15px] bg-primary py-[8px]">
            <Image
              src="/assets/icon/star.png"
              width={13}
              height={13}
              alt="clock icon"
              className="w-[13px] h-[13px]"
            />
            <p className="text-[10px] font-bold text-[#4D4D4D]">
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
          <div className="flex justify-around items-center bg-white py-2">
            <div>
              <a href="tel:+1 416-571-0011">
                <button className="nav__btn flex items-center gap-[5px] text-base font-normal text-white py-[7px] px-[12px]">
                  <Image
                    src="/assets/icon/phone_icon.png"
                    width={17}
                    height={17}
                    alt="phone icon"
                    className="w-[17px] h-[17px]"
                  />
                  +1 416-571-0011
                </button>
              </a>
            </div>

            <div className="">
              <a href="tel:+1 416-571-0011">
                <button className="nav__btn flex items-center gap-[5px] text-base font-normal text-white py-[7px] px-[12px]">
                  Get a Quotes{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="12"
                    viewBox="0 0 21 12"
                    fill="none"
                  >
                    <path
                      d="M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM0 6.75H20V5.25H0V6.75Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </a>
            </div>
            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                // <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                <Image
                  src="/assets/icon/menu_icon.png"
                  width={24}
                  height={24}
                  alt="Menu"
                  className="w-[24px] h-[24px]"
                />
              )}
            </IconButton>
          </div>
          <div className="flex items-center justify-center bg-white py-1">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/assets/icon/nav_icon.png"
                width={150}
                height={60}
                alt="brand logo"
                className="w-[150px] h-[60px]"
              />
            </Link>
          </div>
        </div>
      </header>
      <Drawer
        placement="right"
        open={openNav}
        onClose={() => setOpenNav(false)}
        className="p-4 overflow-y-auto pb-24 !z-[1000000000000000000]"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Fuzion Designs
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenNav(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <NavList />
      </Drawer>
      {/* <BottomMenu /> */}
    </>
  );
}

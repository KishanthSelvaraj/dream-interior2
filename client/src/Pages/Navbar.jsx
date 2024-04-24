import { Fragment, useEffect, useRef, useState } from "react";
import '../App.css'
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import { gsap } from "gsap";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const companyNameRef = useRef (null);

  useEffect(() => {
    gsap.fromTo(
      companyNameRef.current,
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5 }
    );
  }, []);
  return (
    <div >
    {/* Navbar */}
    <nav className="absolute top-0 left-0 right-0 z-10 bg-transparent mx-auto flex items-center justify-between overflow-x-hidden p-2 md:py-3 md:px-6 lg:p-1 xl:py-1 xl:px-8 lg:px-8 bg-white ">
      <div className="flex lg:flex-1 items-center ">
      <img src="/dream-interior-logo.png" alt="dream interior logo" className="w-10  h-10 lg:w-20 lg:h-20 " />
        <a href="#" className="-m-1.5 p-1.5 pt-3">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-500 font" ref={companyNameRef}>
            Dream Interior
          </h1>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <a
          href="#home"
          className="text-md font-semibold leading-6 text-gray-700"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-md font-semibold leading-6 text-gray-700"
        >
          About
        </a>
        <a
          href="#service"
          className="text-md font-semibold leading-6 text-gray-700"
        >
          Service
        </a>
        <a
          href="#contact"
          className="text-md font-semibold leading-6 text-gray-700"
        >
          Contact
        </a>
      </Popover.Group>
    </nav>

    {/* Mobile Menu */}
    <Dialog
      as="div"
      className="lg:hidden "
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#dbdddc] px-6 py-2 md:py-3 md:px-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
       
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
          <img src="/dream-interior-logo.png" alt="dream interior logo" className="w-10  h-10 lg:w-20 lg:h-20 " />
            <span className="sr-only">Your Company</span>
            <h1 className="font-bold text-2xl md:text-2xl lg:text-2xl text-gray-500 font pt-2 ps-3">
              Dream Interior
            </h1>
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a
                href="#home"
                className="-mx-3 block rounded-lg px-3  py-2 text-lg font-semibold leading-7 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#service"
                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Service
              </a>
              <a
                href="#contact"
                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}

              >
                Contact
              </a>
            </div>
          
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </div>
  );
}

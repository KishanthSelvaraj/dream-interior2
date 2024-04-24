import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import a1 from "/about1.jpg";
import a2 from "/about2.jpg";
import a3 from "/about3.jpg";
import a4 from "/about4.jpg";
import a5 from "/about5.jpg";
import a6 from "/about6.jpg";
import about from "/home.jpg";
import bedroom from "/bedroom.jpg";
import dinning from "/dinning.jpg";
import kitchen from "/kitchen.jpg";
import hall from "/hall.jpg";
import axios from "axios";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";
import { MdTableRestaurant } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoBed } from "react-icons/io5";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoIosHome } from "react-icons/io";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const callouts = [
  {
    name: "Relaxing",
    description: "Bed Room",
    imageSrc: bedroom,
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Efficient",
    description: "Kitchen",
    imageSrc: kitchen,
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Welcoming",
    description: "Dinning Room",
    imageSrc: dinning,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Comfortable",
    description: "Living Room",
    imageSrc: hall,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
function Home() {
  const ref = useRef(null);

  useEffect(() => {
    // Initial animation
    const tl = gsap.timeline({
      onComplete: () => {
        // Animation to play after the initial animation completes
        gsap.to(ref.current, {
          opacity: 0,
          duration: 0.1,
          repeat: 3,
          yoyo: true,
        });
      },
    });

    tl.fromTo(
      ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, scrub: 5 }
    );
  }, []);

  const ref2 = useRef(null);

  useEffect(() => {
    // Initial animation
    const tl = gsap.timeline({
      onComplete: () => {
        // Animation to play after the initial animation completes
        gsap.fromTo(
          ref2.current,
          { opacity: 0, y: 100, duration: 0.1, repeat: 3, yoyo: true },
          { opacity: 1, y: 0 }
        );
      },
    });
  }, []);

  const ref3 = useRef(null);

  useEffect(() => {
    // Initial animation
    const tl = gsap.timeline({
      onComplete: () => {
        // Animation to play after the initial animation completes
        gsap.fromTo(
          ref3.current,
          { opacity: 0, y: 100, duration: 0.1, repeat: 3, yoyo: true },
          { opacity: 1, y: 0 }
        );
      },
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Animation for each div
    gsap.utils.toArray(".animated-left").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 50%",
            scrub: 3,
          },
        }
      );
    });
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Animation for each div
    gsap.utils.toArray(".animated-left").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 50%",
            scrub: 3,
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Animation for each div
    gsap.utils.toArray(".animated-right").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 50%",
            scrub: 3,
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Animation for each div
    gsap.utils.toArray(".animated-up").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });
  }, []);
  // const [user, setUser] = useState({
  //   username: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser((prevUser) => ({
  //     ...prevUser,
  //     [name]: value,
  //   }));
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post("http://localhost:3000/signup", user);
  // };

  const [user, setUser] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false); // State to track form submission

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true); // Disable submit button while submitting

    try {
      const response = await axios.post("https://dream-interior-2-3.onrender.com/signup", user);
      console.log("Response from server:", response.data); 
      sendwhatsapp(); // Log the response from the server

      // You can add further actions for successful submission, e.g., showing a success message
    } catch (error) {
      console.error("Error submitting form:", error); // Log any errors
      // You can add further actions for error handling, e.g., showing an error message
    } finally {
      setSubmitting(false);
      // Re-enable submit button after submission or error
    }
  };
  function sendwhatsapp() {
    let phonenumber = "+917845780933";
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phonenumber").value;
    let message = document.querySelector("#message").value;

    let url =
      "https://wa.me/" +
      phonenumber +
      "?text=" +
      "Name :" +
      name +
      "%0a" +
      "Email :" +
      email +
      "%0a" +
      "Phone :" +
      phone +
      "%0a" +
      "Message :" +
      message +
      "%0a%0a" +
      "Thank you!!!";
    window.open(url, "_blank").focus;
  }
  return (
    <div className="relative bg-transparent overflow-x-hidden">
      {/* Background Image */}
      <div
        id="home"
        className="relative bg-transparent mx-auto flex max-w-full items-center justify-between p-6 lg:px-8"
        style={{
          backgroundImage: ` url("/interior-design.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center mx-3 mb-5">
          <h1
            className="text-5xl font-bold tracking-tight sm:text-6xl text-gray-500"
            ref={ref}
          >
            We Create Your Space Better
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-8" ref={ref2}>
            Your home should tell the story of who you are, and be a collection
            of what you love.
          </p>
          <div className="my-5">
            <ul class="wrapper">
              <li class="icon facebook">
                <span class="tooltip">Facebook</span>
                <span>
                  <a href="https://www.facebook.com/profile.php?id=61550334992051&mibextid=LQQJ4d"><FaFacebook /></a>
                </span>
              </li>
              {/* <li class="icon twitter">
    <span class="tooltip">Twitter</span>
    <span><i class="fab fa-twitter"></i></span>
  </li> */}
              <li class="icon instagram">
                <span class="tooltip">Instagram</span>
                <span>
                  <a href="https://www.instagram.com/dream_interior23?igsh=dmpoa2Z5Y2d0OHRj&utm_source=qr">
                    <FaInstagram />
                  </a>
                </span>
              </li>
              {/* <li class="icon github">
    <span class="tooltip">Github</span>
    <span><i class="fab fa-github"></i></span>
  </li>
  <li class="icon youtube">
    <span class="tooltip">Youtube</span>
    <span><i class="fab fa-youtube"></i></span>
  </li> */}
            </ul>
          </div>
          <div className=" flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              ref={ref3}
            >
              Contact Us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      {/* about us start */}
      <section
        id="about"
        className="overflow-hidden px-5 pt-5 pb-10 lg:pt-[50px] lg:pb-[60px] bg-gray-200 dark:bg-dark "
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className=" items-center -mx-3 sm:-mx-4 sm:flex md:flex lg:flex">
                <div className="w-full px-3 sm:px-4 ">
                  <div className="relative z-10 my-4">
                    <img
                      src={about}
                      alt=""
                      className="animated-left  w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 xl:w-5/12">
              <div className="animated-right  mt-10 lg:mt-0 px-3">
                <h2 className="mb-5  text-3xl font-bold text-gray-500 sm:text-[40px]/[48px]">
                  What We do
                </h2>
                <p className="mb-4 text-base lg:text-lg text-gray-800 dark:text-dark-6">
                  We are passionate about transforming spaces into beautiful,
                  functional, and inspiring environments. Our team of skilled
                  designers and architects collaborate seamlessly to bring your
                  vision to life, whether you're revamping a single room or
                  redesigning an entire property.
                </p>

                <p className="mb-4 text-base lg:text-lg text-gray-800 dark:text-dark-6">
                  Our transparent pricing ensures that there are no surprises
                  along the way.
                </p>
                <p className="mb-4 text-base lg:text-lg text-gray-800 dark:text-dark-6">
                  Luxury doesn't have to come with a hefty price tag. We work
                  with clients to establish realistic budgets and offer creative
                  solutions to maximize value without compromising on quality or
                  style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about us end */}
      {/* All Catogory Content */}
      <div className="bg-gray-200">
        <div className="container-lg container-fluid py-3 pb-10">
          <h3 className="animated-up text-xl font-bold text-gray-500 sm:text-[30px]/[38px] text-center pt-10 py-8">
            HOME INTERIOR CATEGORIES
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {/* Cards start */}
            <div className="py-3">
              <div className="animated-left p-4 text-center square-card flex flex-col justify-center items-center">
                <MdKitchen className="w-16 h-16 mb-2 text-3xl text-gray-900" />
                <p className="text-sm mb-0 text-gray-600">Modular Kitchen</p>
              </div>
            </div>
            <div className="py-3">
              <div className="animated-right p-4 text-center square-card flex flex-col justify-center items-center">
                <IoBagCheckOutline className="w-16 h-16 mb-2 text-3xl text-gray-900" />
                <p className="text-sm mb-0 text-gray-600">Pooja Unit</p>
              </div>
            </div>
            <div className="py-3">
              <div className="animated-left p-4 text-center square-card flex flex-col justify-center items-center">
                <HiOutlineOfficeBuilding className="w-16 h-16 mb-2 text-3xl text-gray-900" />
                <p className="text-sm mb-0 text-gray-600">Dinning Room</p>
              </div>
            </div>
            <div className="py-3">
              <div className="animated-right p-4 text-center square-card flex flex-col justify-center items-center">
                <IoBed className="w-16 h-16 mb-2 text-3xl text-gray-900" />
                <p className="text-sm mb-0 text-gray-600">Kids Bed Room</p>
              </div>
            </div>
            <div className="py-3">
              <div className="animated-left p-4 text-center square-card flex flex-col justify-center items-center">
                <MdTableRestaurant className="w-16 h-16 mb-2 text-3xl text-gray-900" />
                <p className="text-sm mb-0 text-gray-600 ">Wardrobe</p>
              </div>
            </div>
            <div className="py-3">
              <div className="animated-right p-4 text-center square-card flex flex-col justify-center items-center">
                <IoIosHome className="w-16 h-16 mb-2 text-3xl text-gray-900" />
                <p className="text-sm mb-0 text-gray-600">Living Room</p>
              </div>
            </div>
            {/* Cards end */}
          </div>
        </div>
      </div>
      {/* All Catogory Content end */}

      {/* services start */}
      <div className="bg-gray-200 pt-10" id="service">
        <div className="mx-auto  lg:mx-0 text-center">
          <h2 className="animated-up  text-3xl font-bold text-gray-500 sm:text-[40px]/[48px]">
            Our Services
          </h2>
          <p className="animated-up mt-2 text-lg leading-8 text-gray-600">
            Elevate your space with our custom interior design solutions
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-5 sm:py-5 lg:max-w-none lg:py-5">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="animated-left relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="animated-left mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="animated-left text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* services end */}
      {/* testimonial start */}
      {/* <div className="bg-[#D1DCE5]">
  <section className="md:py-10 py-5">
    <h2 className="text-3xl font-bold mb-4 text-center">Customer Testimonials</h2>
    <div className="flex flex-wrap justify-center gap-4 md:px-5 px-3">
      <div className="bg-white p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3">
        <p className="mb-4">
          "I recently purchased a dining set from your store, and I must say I'm thoroughly impressed! The quality of the craftsmanship is exceptional, and the design perfectly complements my home decor. Thank you for providing such exquisite furniture!"
        </p>
        <p className="text-gray-600">- Emily Johnson, Happy Customer</p>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3">
        <p className="mb-4">
          "I've been shopping at your furniture store for years, and each time I'm amazed by the wide selection and the attention to detail in your products. From bedroom sets to office furniture, everything I've purchased has exceeded my expectations. Keep up the fantastic work!"
        </p>
        <p className="text-gray-600">- Michael Adams, Loyal Customer</p>
      </div>
    </div>
  </section>
</div> */}
      {/* testimonial end */}
      {/* Contact Page Start */}
      <section className="bg-gray-200 pb-10" id="contact">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="animated-up text-3xl font-bold text-gray-500 sm:text-[40px]/[48px] text-center">
            Contact Us
          </h2>
          <p className="animated-up mb-8 lg:mb-16  text-center text-gray-600 text-sm mt-5">
            Looking to upgrade your living space with premium furniture? Don't
            hesitate to reach out! Fill in the form below and let's transform
            your home together.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid lg:flex lg:justify-between">
              <div className="lg:w-1/2 lg:mr-2 py-lg-0 py-4">
                <label className="animated-left block mb-2 text-sm font-medium text-gray-900 d">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="animated-left shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="Enter your name"
                  name="username"
                  value={user.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="lg:w-1/2 lg:ml-2 py-4">
                <label className="animated-left block mb-2 text-sm font-medium text-gray-900 ">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="animated-left shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="Enter your email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="animated-left block mb-2 text-sm font-medium text-gray-900">
                Phone Number
              </label>
              <input
                type="number"
                id="phonenumber"
                className="animated-left block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                name="phonenumber"
                placeholder="Enter your phone number"
                value={user.phonenumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="animated-left sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Leave a comment..."
                name="message"
                value={user.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            {/* <div className="flex justify-center"> */}
            <button
              type="submit"
              // onClick={sendwhatsapp}
              className="py-3 px-4 text-sm font-medium text-white rounded-lg bg-gray-500 w-fit hover:bg-gray-600 focus:ring-4 focus:outline-none"
              disabled={submitting} // Disable button when submitting
            >
              {submitting ? "Submitting..." : "Send message"}
            </button>
            {/* </div> */}
          </form>

          <div className="pt-5 text-center border-black flex justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.191663459121!2d80.16330817512048!3d12.830888087471681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52593ec19dcc6b%3A0xd7d50c92e33d21c6!2sDream%20interior!5e0!3m2!1sen!2sin!4v1713883412557!5m2!1sen!2sin"
              width="1000"
              height="350"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        </section>
        {/* contact us end */}
        {/* <div className="w-full md:text-sm text-[13px] justify-center flex text-white bg-black">
        Copyright © 2024. All rights reserved.
      </div> */}
        <footer className="bg-white text-center text-neutral-600 lg:text-left">
          <div className="flex items-center justify-center border-b-2  p-6 lg:justify-between">
            <div className="mr-12 hidden lg:block">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* <!-- Social network icons container --> */}
            <div className="flex justify-center">
              <a className="mr-6 text-neutral-600 " href="https://www.facebook.com/profile.php?id=61550334992051&mibextid=LQQJ4d">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
             
            
              <a className="mr-6 text-neutral-600" href="https://www.instagram.com/dream_interior23?igsh=dmpoa2Z5Y2d0OHRj&utm_source=qr">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              
            </div>
          </div>

          {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
          <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {/* <!-- TW Elements section --> */}
              <div className="flex flex-col items-center justify-center">
                <div className="flex mb-4 items-center justify-center">
                  <img
                    src="/dream-interior-logo.png"
                    alt="dream interior logo"
                    className="w-10 h-10 lg:w-20 lg:h-20 "
                  />
                  <a href="#" className=" p-1.5 pt-3 ">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-500 font">
                      Dream Interior
                    </h1>
                  </a>
                </div>
                <p>
                  Your home should tell the story of who you are, and be a
                  collection of what you love.
                </p>
              </div>

              {/* <!-- Products section --> */}
              {/* <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Pages
            </h6>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200" href="/home"
              >Home</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200" href="/about"
              >About</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200" href="/services"
              >Services</a>
            </p>
            <p>
              <a className="text-neutral-600 dark:text-neutral-200" href="/contact"
              >Contact</a>
            </p>
          </div> */}

              {/* <!-- Contact section --> */}
              <div>
                <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start text-gray-500 text-xl ">
                  {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path
                  d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg> */}
                  Contact
                </h6>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path
                  d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg> */}
                  No. 812, Pillayar Koil Street, Medavakkam Main Road,
                  Mambakkam,Chengalpattu,Tamil nadu - 600127
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  dreaminterior23@gmail.com
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  +91 7845780933
                </p>
                {/* <p className="flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                  clipRule="evenodd" />
              </svg>
              + 01 234 567 89
            </p> */}
              </div>
            </div>
          </div>

          {/* <!--Copyright section--> */}
          <div className="bg-gray-200 p-3 text-center ">
            Copyright © 2024. All rights reserved.
          </div>
          {/* <div className="w-full md:text-sm text-[13px] justify-center flex text-white bg-black">
        Copyright © 2024. All rights reserved.
      </div> */}
        </footer>
    
    </div>
  );
}

export default Home;

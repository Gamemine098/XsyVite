"use client";

// Import CSS
import "../style/index.css";
// Import other pages
import About from "./about";
// Import other things that require
import React from "react";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Avatar,
  Tabs,
  Modal,
  Button,
} from "flowbite-react";
import { Link, Route, Routes } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaDiscord,
  FaTwitch,
} from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

const About_Nice: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="min-h-screen">
        <Breadcrumb
          aria-label="Default breadcrumb"
          className="m-2 rounded-3xl bg-slate-600 px-3 py-2 drop-shadow-md"
        >
          <BreadcrumbItem className="ml-1">
            <Link
              to="/"
              className="text-slate-400 transition-colors hover:text-white hover:transition-colors"
            >
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link
              to="/about"
              className="text-slate-400 transition-colors hover:text-white hover:transition-colors"
            >
              About
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span className="text-slate-300">Nice</span>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Content */}
        <div className="animate__animated animate__fadeInDown animate__faster mx-6 mt-5 rounded-xl bg-slate-400 bg-opacity-40 pb-32 pt-16 text-center drop-shadow-xl">
          <h1 className="pb-9 text-2xl drop-shadow-md">About Me!</h1>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Avatar size="xl" alt="placeholder" />
            <p className="text-xl">Hello!</p>
          </div>
          <div className="mobile:mx-3 mx-36 mt-10 overflow-x-auto">
            <Tabs
              aria-label="Full width tabs"
              variant="fullWidth"
              className="dark"
            >
              <Tabs.Item active title="About">
                This is{" "}
                <span className="font-medium text-gray-800">
                  Profile tabs associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="FAQ">
                This is{" "}
                <span className="font-medium text-gray-800">
                  Dashboard tabs associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Contacts">
                <div className="mx-20 mt-10 flex flex-wrap justify-center gap-20 text-center text-xl">
                  <Link to="" className="my-5 flex gap-3">
                    <FaFacebook className="h-7 w-5" />
                    Facebook
                  </Link>
                  <Link to="" className="my-5 flex gap-3">
                    <FaInstagram className="h-7 w-5" />
                    Instagram
                  </Link>
                  <Link to="" className="my-5 flex gap-3">
                    <FaYoutube className="h-7 w-5" />
                    Youtube <span className="cursor-pointer">(Gaming)</span>
                  </Link>
                  <Link to="" className="my-5 flex gap-3">
                    <FaYoutube className="h-7 w-5" />
                    Youtube{" "}
                    <span className="cursor-pointer">(Animation, Art)</span>
                  </Link>
                  <Link
                    to="https://github.com/Gamemine098"
                    className="my-5 flex gap-3"
                    target="_blank"
                  >
                    <FaGithub className="h-7 w-5" />
                    Github
                  </Link>
                  <Link to="" className="my-5 flex gap-3">
                    <FaBluesky className="h-7 w-5" />
                    Bluesky
                  </Link>
                  <a
                    className="my-5 flex cursor-pointer gap-3"
                    onClick={() => setOpenModal(true)}
                  >
                    <FaDiscord className="h-7 w-5" />
                    Discord
                  </a>
                  <Link to="" className="my-5 flex gap-3">
                    <FaTwitch className="h-7 w-5" />
                    Twitch
                  </Link>
                  <Link to="" className="my-5 flex gap-3">
                    <img
                      loading="lazy"
                      src="/toyhouse.svg"
                      alt="Toyhouse Icon"
                      className="h-7 w-5"
                    />
                    Toyhouse (Soon)
                  </Link>

                  {/* modal */}
                  <Modal
                    show={openModal}
                    size="md"
                    onClose={() => setOpenModal(false)}
                    popup
                    className="dark"
                  >
                    <Modal.Header />
                    <Modal.Body>
                      <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                          <span className="text-white">gamemine098</span> and{" "}
                          <span className="text-white">nicelyne_th</span>
                        </h3>
                        <div className="flex justify-center gap-4">
                          <Button
                            color="gray"
                            onClick={() => setOpenModal(false)}
                          >
                            Close
                          </Button>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Portfolio">
                This is{" "}
                <span className="font-medium text-gray-800">
                  Contacts tabs associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default About_Nice;

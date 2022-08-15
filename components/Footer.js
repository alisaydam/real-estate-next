import { useContext } from "react";
import { AppContext } from "../lib/state";
import Link from "next/link";
import SocialRow from "./SocialRow";

export default function Footer() {
  const { theme } = useContext(AppContext);

  return (
    <div className="bg-gradient-to-b from-clrGradient to-clrBG ">
      <div
        className="flex flex-col pt-10"
        style={{
          maxWidth: "80rem",
          margin: "auto",
        }}
      >
        <picture className="w-2/12 max-w-4/12">
          <img
            src={theme === "dark" ? "/logo.png" : "/logo-w.png"}
            alt="romis real estate"
          />
        </picture>
        <div className="flex flex-col flex-col  justify-between border-b md:flex-row ">
          <div className="flex justify-around w-full md:w-6/12">
            <div className="flex flex-col justify-center ">
              <p className="text-3xl font-semibold mt-5 text-center ">Agents</p>
              <div className="flex flex-col mx-auto mt-5">
                <picture className="rounded-full">
                  <img
                    className="rounded-full  w-32 mx-auto"
                    src="/face.png"
                    alt="face"
                  />
                </picture>
                <p className="text-xl">App-Developer</p>
                <p className="text-lg">Reza Shahabzadeh</p>
                <p className="text-lg">rezzashahabzadeh@gmail.com</p>
              </div>
              <div className="flex flex-col mx-auto mt-5">
                <picture className="rounded-full">
                  <img
                    className="rounded-full  w-32 mx-auto"
                    src="/face.png"
                    alt="face"
                  />
                </picture>
                <p className="text-xl">App-Developer</p>
                <p className="text-lg">Reza Shahabzadeh</p>
                <p className="text-lg">rezzashahabzadeh@gmail.com</p>
              </div>
            </div>
            <div>
              <p className="text-3xl font-semibold my-5 text-center ">
                Gategories
              </p>
              <ul className="text-center md:text-left">
                <li className="mb-4">
                  <Link href="#">
                    <a className="text-2xl font-medium ">Properties</a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <a className="text-2xl font-medium ">Blogs</a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <a className="text-2xl font-medium ">Romis TV</a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <a className="text-2xl font-medium ">About Us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-full md:w-6/12">
            <p className="text-3xl font-semibold my-5 text-center ">
              Get In touch
            </p>
            <form>
              <div className="flex gap-6">
                <div className="flex flex-col gap-8">
                  <input
                    type="text"
                    className="h-16 rounded-tl-3xl rounded-br-3xl bg-btnGreen focus:outline-none text-slate-500 text-2xl pl-2"
                    placeholder="Firstname"
                  />
                  <input
                    type="text"
                    className="h-16 rounded-tl-3xl rounded-br-3xl bg-btnGreen focus:outline-none text-slate-500 text-2xl pl-2"
                    placeholder="Lastname"
                  />
                  <input
                    type="text"
                    className="h-16 rounded-tl-3xl rounded-br-3xl bg-btnGreen focus:outline-none text-slate-500 text-2xl pl-2"
                    placeholder="Email"
                  />
                </div>
                <textarea
                  placeholder="Your message"
                  className="rounded-tl-3xl rounded-br-3xl w-full bg-btnGreen focus:outline-none text-2xl pl-2 "
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="submit"
                  value="Submit"
                  className="bg-btnGreen font-semibold cursor-pointer text-clrSecondaryText rounded-tl-3xl rounded-br-3xl text-2xl px-16 py-2 mt-8 mb-8"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-start pt-4">
          <SocialRow size="30" />
        </div>
        <p className="text-center mt-12">
          © Copyright 2021 Alanja Web. All rights reserved.
        </p>
      </div>
    </div>
  );
}

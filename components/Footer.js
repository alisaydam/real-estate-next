import { useContext } from "react";
import { AppContext } from "../lib/state";
import Link from "next/link";

export default function Footer() {
  const { theme } = useContext(AppContext);

  return (
    <div className="bg-gradient-to-b from-clrGradient to-clrBG flex flex-col pt-32 pr-32 pl-32 ">
      <picture className="w-3/12 max-w-4/12">
        <img
          src={theme === "dark" ? "/logo.png" : "/logo-w.png"}
          alt="romis real estate"
        />
      </picture>
      <div className="flex justify-between border-b pb-24">
        <div className="flex flex-col justify-center">
          <p className="text-5xl font-semibold mt-20 text-center ">Agents</p>
          <div className="flex flex-col  gap-2 mx-auto w-48 mt-20">
            <picture className="rounded-full">
              <img className="rounded-full" src="face.png" alt="face" />
            </picture>
            <p className="text-2xl">App-Developer</p>
            <p className="text-xl">Reza Shahabzadeh</p>
            <p className="text-xl">rezzashahabzadeh@gmail.com</p>
          </div>
          <div className="flex flex-col  gap-2 mx-auto w-48 mt-20">
            <picture className="rounded-full">
              <img className="rounded-full" src="face.png" alt="face" />
            </picture>
            <p className="text-2xl">App-Developer</p>
            <p className="text-xl">Reza Shahabzadeh</p>
            <p className="text-xl">rezzashahabzadeh@gmail.com</p>
          </div>
        </div>
        <div>
          <p className="text-5xl font-semibold my-20 text-center ">
            Gategories
          </p>
          <ul>
            <li className="mb-10">
              <Link href="#">
                <a className="text-4xl font-medium ">Properties</a>
              </Link>
            </li>
            <li className="mb-10">
              <Link href="#">
                <a className="text-4xl font-medium ">Blogs</a>
              </Link>
            </li>
            <li className="mb-10">
              <Link href="#">
                <a className="text-4xl font-medium ">Romis TV</a>
              </Link>
            </li>
            <li className="mb-10">
              <Link href="#">
                <a className="text-4xl font-medium ">About Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-6/12 h-full ">
          <p className="text-5xl font-semibold my-20 text-center ">
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
                className="rounded-tl-3xl rounded-br-3xl bg-btnGreen focus:outline-none text-slate-500 text-2xl pl-2 flex-1"
              />
            </div>
            <div className="flex justify-center">
              <input
                type="submit"
                value="Submit"
                className="bg-btnGreen font-semibold cursor-pointer text-clrSecondaryText rounded-tl-3xl rounded-br-3xl text-2xl px-16 py-2 mt-8"
              />
            </div>
          </form>
        </div>
      </div>
      <p className="text-center mt-24">
        © Copyright 2021 Alanja Web. All rights reserved.
      </p>
    </div>
  );
}

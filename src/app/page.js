'use client'
import Image from "next/image";
import CryptoJS from "crypto-js";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [resultmd5, setResultmd5] = useState("");
  const [resultsha1, setResultsha1] = useState("");
  const [resultripemd160, setResultripemd160] = useState("");

  const md5func = () => {
    const md5 = CryptoJS.MD5(input).toString();
    const sha1 = CryptoJS.SHA1(input);
    const ripemd160 = CryptoJS.RIPEMD160(input).toString();
    setResultmd5(`${md5}`);
    setResultsha1(`${sha1}`);
    setResultripemd160(`${ripemd160}`)
  };
  return (
    <> 
      <section className="bg-white dark:bg-gray-950 ">
        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-4 xl:gap-0 lg:py-16 lg:grid-cols-12 h-screen">
            <div className="mr-auto place-self-center lg:col-span-8 w-full">
              <h1 className="max-w-2xl mb-4 text-center sm:text-left text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Welcome to our Encryption Tool</h1>
              <p className="max-w-2xl mb-6 font-light text-center sm:text-left text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Simply type your string below</p>
                

              <div className="max-w-sm">
                <div className="mb-5 flex justify-center font-bold">
                  <input 
                    type="text" 
                    id="email"
                    onChange={(e) => setInput(e.target.value)} 
                    className="rounded-full  focus:outline-none border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-3xs sm:w-4xl md:w-[300px]" placeholder="Type your string here" required />
                  <button 
                    type="submit"
                    onClick={md5func} 
                    className="md:mx-5 sm:mx-3 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-auto sm:w-2xl md:w-[158px]">Go</button>
                </div>
              </div>
              <dl className="block sm:hidden max-w-md text-gray-900 place-self-center divide-y divide-gray-200 dark:text-white dark:divide-gray-700 lg:w-4xl">
                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">MD5</dt>
                    <dd className="text-lg font-semibold overflow-x-scroll w-3xs py-5">{resultmd5 && <p style={{ marginTop: "20px" }}>{resultmd5}</p>}</dd>
                </div>
                <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">SHA1</dt>
                    <dd className="text-lg font-semibold overflow-x-scroll w-3xs py-5">{resultsha1 && <p style={{ marginTop: "20px" }}>{resultsha1}</p>}</dd>
                </div>
                <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">RIPEMD-160</dt>
                    <dd className="text-lg font-semibold overflow-x-scroll w-3xs py-5">{resultripemd160 && <p style={{ marginTop: "20px" }}>{resultripemd160}</p>}</dd>
                </div>
              </dl>
            </div>
            <dl className="hidden sm:block max-w-md text-gray-900 place-self-center divide-y divide-gray-200 dark:text-white dark:divide-gray-700 lg:w-4xl">
                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">MD5</dt>
                    <dd className="text-lg font-semibold py-5">{resultmd5 && <p style={{ marginTop: "20px" }}>{resultmd5}</p>}</dd>
                </div>
                <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">SHA1</dt>
                    <dd className="text-lg font-semibold py-5">{resultsha1 && <p style={{ marginTop: "20px" }}>{resultsha1}</p>}</dd>
                </div>
                <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">RIPEMD-160</dt>
                    <dd className="text-lg font-semibold py-5">{resultripemd160 && <p style={{ marginTop: "20px" }}>{resultripemd160}</p>}</dd>
                </div>
              </dl>
        </div>

    </section>
    </>
  );
}

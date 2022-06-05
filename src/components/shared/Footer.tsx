import React from "react";
import { BsFacebook } from "react-icons/bs";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <div className="bg-blue py-10 px-5 md:px-20">
            <div className="flex flex-col-reverse md:flex-row items-stretch">
                <div className="w-full flex items-stretch">
                    <div className="w-full">
                        <a href="/story">
                            <p className="text-white itc tracking-small text-xs my-2 cursor-pointer hover:text-brown w-max">
                                KNOW 89ALKALINE
                            </p>
                        </a>
                        <a href="/whyus">
                            <p className="text-white itc tracking-small text-xs my-2 cursor-pointer hover:text-brown w-max">
                                WHY US
                            </p>
                        </a>
                    </div>
                    <div className="w-full">
                        <a href="/contact">
                            <p className="text-white itc tracking-small text-xs my-2 cursor-pointer hover:text-brown w-max">
                                CONTACT US
                            </p>
                        </a>
                        <a
                            href="https://facebook.com/89alkaline"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            <p className="text-white itc tracking-small text-xs my-2 cursor-pointer hover:text-brown w-max">
                                FACEBOOK
                            </p>
                        </a>
                        <a
                            href="https://instagram.com/89alkaline"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            <p className="text-white itc tracking-small text-xs my-2 cursor-pointer hover:text-brown w-max">
                                INSTAGRAM
                            </p>
                        </a>
                    </div>
                </div>
                <div className="mb-5 md:mb-0 w-full flex justify-end">
                    <div className="max-w-sm ml-full">
                        <p className="text-white itc tracking-small text-sm mb-3">
                            SUBSCRIBE TO 89ALKALINE NEWSLETTER
                        </p>
                        <input
                            style={{
                                letterSpacing: "2px",
                                border: "1px solid rgba(255,255,255,.3)",
                            }}
                            className="bg-transparent itc w-full text-gray-300 p-3 uppercase focus:outline-none text-xs"
                            placeholder="EMAIL ADDRESS"
                        />
                    </div>
                </div>
            </div>
            <hr className="my-5 bt border-gray-500" />
            <div>
                <p
                    style={{ letterSpacing: "2px" }}
                    className="text-small itc text-white"
                >
                    &copy; {new Date().getFullYear()} 89ALKALINE INDIA
                </p>
                {/* <div className="flex items-center mt-1 uppercase">
                    <a
                        href={"/terms"}
                        style={{ letterSpacing: "2px" }}
                        className="text-small itc text-white hover:text-brown"
                    >
                        TERMS OF USE
                    </a>
                    <span className="mx-1 text-white">&bull;</span>
                    <a
                        href={"/terms"}
                        style={{ letterSpacing: "2px" }}
                        className="text-small itc text-white hover:text-brown"
                    >
                        PRIVACY POLICY
                    </a>
                    <span className="mx-1 text-white">&bull;</span>
                    <a
                        href={"/terms"}
                        style={{ letterSpacing: "2px" }}
                        className="text-small itc text-white hover:text-brown"
                    >
                        COOKIE POLICY
                    </a>
                </div> */}
            </div>
        </div>
    );
};

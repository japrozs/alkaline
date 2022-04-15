import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <div className="bg-blue py-10 px-5 md:px-20">
            <div className="flex flex-col-reverse md:flex-row items-stretch">
                <div className="w-full flex items-stretch">
                    <div className="w-full">
                        <p className="text-white itc tracking-small text-xs my-2 cursor-pointer hover:text-brown w-max">
                            KNOW COCOA
                        </p>
                        <p className="text-white itc tracking-small text-xs my-2 cursor-pointer hover:text-brown w-max">
                            STORY
                        </p>
                    </div>
                    <div className="w-full">
                        <p className="text-white itc tracking-small text-xs my-2 cursor-pointer hover:text-brown w-max">
                            CONTACT
                        </p>
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
                    2020 OLAM INTERNATIONAL LIMITED - ALL RIGHTS RESERVED CO.
                    REG NO. 199504676H
                </p>
                <div className="flex items-center mt-1 uppercase">
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
                </div>
            </div>
        </div>
    );
};

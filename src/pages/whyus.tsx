import React from "react";
import Head from "next/head";
import { Navbar } from "../components/shared/Navbar";
import { BsChevronDown } from "react-icons/bs";
import { Request } from "../components/ui/Request";
import { Footer } from "../components/shared/Footer";

interface storyProps {}

const Story: React.FC<storyProps> = ({}) => {
    return (
        <div>
            <Head>
                <title>89 Alkaline - Why Us</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div
                style={{ height: "100vh" }}
                className="bg-blue text-center p-10 md:p-20"
            >
                <svg
                    className="h-14 w-auto mx-auto mt-12 mb-16"
                    width="1168"
                    height="427"
                    viewBox="0 0 1168 427"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M910.895 111.16L828.215 265.6H993.575L910.895 111.16ZM1075.21 419L1032.05 337.88H790.775L747.615 419H655.055L855.255 42.52H968.095L1167.77 419H1075.21Z"
                        fill="white"
                    />
                    <path
                        d="M153.48 426.08C129.094 426.08 107.264 423.13 87.9905 417.23C69.1105 410.937 53.1805 402.48 40.2005 391.86C27.2205 381.24 17.1905 368.653 10.1105 354.1C3.4238 339.547 0.0804704 323.617 0.0804704 306.31C0.0804704 279.957 7.35714 258.52 21.9105 242C36.4638 225.087 56.1305 213.287 80.9105 206.6V201.88C60.8505 194.407 44.3305 183 31.3505 167.66C18.7638 152.32 12.4705 132.653 12.4705 108.66C12.4705 92.9266 15.4205 78.3733 21.3205 65C27.6138 51.6267 36.6605 40.22 48.4605 30.78C60.6538 20.9466 75.4038 13.4733 92.7105 8.35998C110.41 2.85331 130.667 0.0999775 153.48 0.0999775C176.294 0.0999775 196.354 2.85331 213.66 8.35998C231.36 13.4733 246.11 20.9466 257.91 30.78C270.104 40.22 279.15 51.6267 285.05 65C291.344 78.3733 294.49 92.9266 294.49 108.66C294.49 132.653 288 152.32 275.02 167.66C262.434 183 246.11 194.407 226.05 201.88V206.6C250.83 213.287 270.497 225.087 285.05 242C299.604 258.52 306.88 279.957 306.88 306.31C306.88 323.617 303.34 339.547 296.261 354.1C289.574 368.653 279.74 381.24 266.76 391.86C253.78 402.48 237.654 410.937 218.38 417.23C199.5 423.13 177.867 426.08 153.48 426.08ZM153.48 358.23C173.147 358.23 188.094 353.707 198.32 344.66C208.94 335.22 214.25 322.24 214.25 305.72V293.92C214.25 277.4 208.94 264.617 198.32 255.57C188.094 246.13 173.147 241.41 153.48 241.41C133.814 241.41 118.67 246.13 108.05 255.57C97.8238 264.617 92.7105 277.4 92.7105 293.92V305.72C92.7105 322.24 97.8238 335.22 108.05 344.66C118.67 353.707 133.814 358.23 153.48 358.23ZM153.48 176.51C172.36 176.51 186.717 172.183 196.55 163.53C206.384 154.483 211.3 142.29 211.3 126.95V117.51C211.3 102.17 206.384 90.1733 196.55 81.52C186.717 72.4733 172.36 67.95 153.48 67.95C134.6 67.95 120.244 72.4733 110.41 81.52C100.577 90.1733 95.6605 102.17 95.6605 117.51V126.95C95.6605 142.29 100.577 154.483 110.41 163.53C120.244 172.183 134.6 176.51 153.48 176.51ZM629.97 163.53C629.97 192.637 625.447 219.973 616.4 245.54C607.747 271.107 596.34 294.903 582.18 316.93C568.413 338.563 552.68 358.033 534.98 375.34C517.673 392.647 500.17 407.2 482.47 419H360.34C385.513 400.907 408.13 383.797 428.19 367.67C448.25 351.15 465.557 334.63 480.11 318.11C495.057 301.59 507.25 284.873 516.69 267.96C526.13 250.653 533.013 232.167 537.34 212.5L532.03 210.73C528.49 218.597 524.163 226.267 519.05 233.74C514.33 241.213 508.233 247.9 500.76 253.8C493.68 259.307 485.223 263.83 475.39 267.37C465.557 270.91 454.15 272.68 441.17 272.68C424.257 272.68 408.327 269.73 393.38 263.83C378.827 257.537 366.043 248.883 355.03 237.87C344.41 226.857 335.953 213.483 329.66 197.75C323.76 182.017 320.81 164.317 320.81 144.65C320.81 123.41 324.35 103.94 331.43 86.24C338.903 68.54 349.327 53.3966 362.7 40.81C376.467 27.83 392.79 17.8 411.67 10.72C430.55 3.63998 451.79 0.0999775 475.39 0.0999775C499.777 0.0999775 521.607 4.03331 540.88 11.9C560.153 19.3733 576.28 30.3867 589.26 44.94C602.633 59.1 612.663 76.21 619.35 96.27C626.43 116.33 629.97 138.75 629.97 163.53ZM475.39 204.83C495.057 204.83 510.397 199.52 521.41 188.9C532.423 177.887 537.93 162.35 537.93 142.29V131.67C537.93 111.61 532.423 96.27 521.41 85.65C510.397 74.6366 495.057 69.13 475.39 69.13C455.723 69.13 440.383 74.6366 429.37 85.65C418.357 96.27 412.85 111.61 412.85 131.67V142.29C412.85 162.35 418.357 177.887 429.37 188.9C440.383 199.52 455.723 204.83 475.39 204.83Z"
                        fill="white"
                    />
                </svg>

                <p className="text-white itc text-xl md:text-3xl max-w-3xl mx-auto my-20 light">
                    89Alkaline Water Technology removes thousands of potential
                    contaminants, whether it{"'"}s micro-plastics,
                    pharmaceuticals, or unknown contaminants, our technology
                    removes {"99.9%"} of potential contaminants.
                </p>
                <div className="mx-auto cursor-pointer mt-28">
                    <a href="#main">
                        <p className="text-white itc tracking-small text-small">
                            EXPLORE NOW
                        </p>
                        <BsChevronDown className="mx-auto mt-2 text-white" />
                    </a>
                </div>
            </div>
            <div id="main" className="py-8">
                <div className="flex flex-col md:flex-row items-stretch py-8 ">
                    <div className="w-full px-14 h-full">
                        <p className="text-blue itc tracking-small text-sm">
                            BALANCES PH
                        </p>
                        <p className="text-blue itc text-xl md:text-2xl mt-2 md:mt-16 light">
                            Your body tries to maintain the pH level naturally.
                            However, if your body is too acidic or you are not
                            eating alkaline food, your systems need to work
                            extra hard to maintain the pH balance. When your
                            body is too acidic, it also interferes with the
                            functioning of your body cells. It affects the pH
                            level of your body and you are more vulnerable to
                            diseases. As compared to plain water, drinking
                            alkaline water helps you maintain the pH level in
                            your body and avoid diseases.
                        </p>
                    </div>
                    <div className="w-full">
                        <img
                            alt=""
                            className="w-full h-auto"
                            src="img/lake.jpg"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center py-8 ">
                    <div className="w-full md:p-14 pr-0">
                        <img
                            alt=""
                            className="w-full h-auto"
                            src="img/scientist.jpg"
                        />
                    </div>
                    <div className="w-full px-14 h-full">
                        <p className="text-blue itc text-xl md:text-2xl light max-w-md">
                            One of the major benefits of drinking alkaline water
                            regularly is detoxification. Alkaline water flushes
                            out toxins from the body as toxins leads to a number
                            of health problems. Other than to eating a lot of
                            fruits and vegetables, you also need to drink daily
                            3-4 liters of 89alkaline water to detoxify your
                            body. The reason is alkaline water increases the pH
                            level of your urine; thereby result in improving
                            your kidney function and detoxifying your body.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-stretch py-8 ">
                    <div className="w-full px-14 h-full">
                        <p className="text-blue itc tracking-small text-sm">
                            IMPROVING IMMUNITY
                        </p>
                        <p className="text-blue itc text-xl md:text-2xl mt-2 md:mt-16 light">
                            Consuming 89alkaline water on a daily basis plays an
                            important part in boosting the immunity. When your
                            body is in the alkaline state and having the higher
                            pH level, it boosts your immune system and naturally
                            neutralized the free radicals. Drinking alkaline
                            water regularly will significantly improve your
                            immune system and provide lots of long-term health
                            benefits.
                        </p>
                    </div>
                    <div className="w-full">
                        <img
                            alt=""
                            className="w-full h-auto"
                            src="img/sleeping.jpg"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-stretch py-8 ">
                    <div className="w-full md:p-14 pr-0">
                        <img
                            alt=""
                            className="w-full h-auto"
                            src="img/mother.jpg"
                        />
                    </div>
                    <div className="w-full p-14 h-full">
                        <p className="text-blue itc tracking-small text-sm">
                            BETTER HYDRATION
                        </p>
                        <p className="text-blue itc text-xl md:text-2xl mt-2 md:mt-16 light max-w-md">
                            Many studies have shown that due to the reduced
                            water cluster size alkaline water provides better
                            hydration than plain water. Alkaline water hydrates
                            as well as rehydrates much faster than plain water
                            in our body. Drinking alkaline water can be of great
                            help to deal with chronic dehydration and stay
                            healthy.
                        </p>
                    </div>
                </div>
            </div>
            <Request />
            <Footer />
        </div>
    );
};

export default Story;

import React, { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { VscMenu, VscClose } from "react-icons/vsc";

interface NavbarProps {}

const navigation = [
    { name: "HEALTH BENEFITS", href: "/benefits", current: false },
    { name: "OUR TECHNOLOGY", href: "/technology", current: false },
    { name: "CONTACT", href: "/contact", current: false },
    { name: "STORY", href: "/story", current: false },
    { name: "WHAT DOCTORS SAY", href: "/doctors", current: false },
    { name: "EXPERTS' OPINION", href: "/expert", current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export const Navbar: React.FC<NavbarProps> = ({}) => {
    return (
        <Disclosure as="nav" className="bg-blue sticky top-0 z-10">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-20">
                        <div className="relative flex items-center justify-between h-12">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none cursor-pointer">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <VscClose
                                            className="block h-7 w-7"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <VscMenu
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <a href={"/"}>
                                        <svg
                                            className="block lg:hidden h-5 w-auto"
                                            width="1168"
                                            height="427"
                                            viewBox="0 0 1168 427"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M910.895 111.16L828.215 265.6H993.575L910.895 111.16ZM1075.21 419L1032.05 337.88H790.775L747.615 419H655.055L855.255 42.52H968.095L1167.77 419H1075.21Z"
                                                fill="#FD000B"
                                            />
                                            <path
                                                d="M153.48 426.08C129.094 426.08 107.264 423.13 87.9905 417.23C69.1105 410.937 53.1805 402.48 40.2005 391.86C27.2205 381.24 17.1905 368.653 10.1105 354.1C3.4238 339.547 0.0804704 323.617 0.0804704 306.31C0.0804704 279.957 7.35714 258.52 21.9105 242C36.4638 225.087 56.1305 213.287 80.9105 206.6V201.88C60.8505 194.407 44.3305 183 31.3505 167.66C18.7638 152.32 12.4705 132.653 12.4705 108.66C12.4705 92.9266 15.4205 78.3733 21.3205 65C27.6138 51.6267 36.6605 40.22 48.4605 30.78C60.6538 20.9466 75.4038 13.4733 92.7105 8.35998C110.41 2.85331 130.667 0.0999775 153.48 0.0999775C176.294 0.0999775 196.354 2.85331 213.66 8.35998C231.36 13.4733 246.11 20.9466 257.91 30.78C270.104 40.22 279.15 51.6267 285.05 65C291.344 78.3733 294.49 92.9266 294.49 108.66C294.49 132.653 288 152.32 275.02 167.66C262.434 183 246.11 194.407 226.05 201.88V206.6C250.83 213.287 270.497 225.087 285.05 242C299.604 258.52 306.88 279.957 306.88 306.31C306.88 323.617 303.34 339.547 296.261 354.1C289.574 368.653 279.74 381.24 266.76 391.86C253.78 402.48 237.654 410.937 218.38 417.23C199.5 423.13 177.867 426.08 153.48 426.08ZM153.48 358.23C173.147 358.23 188.094 353.707 198.32 344.66C208.94 335.22 214.25 322.24 214.25 305.72V293.92C214.25 277.4 208.94 264.617 198.32 255.57C188.094 246.13 173.147 241.41 153.48 241.41C133.814 241.41 118.67 246.13 108.05 255.57C97.8238 264.617 92.7105 277.4 92.7105 293.92V305.72C92.7105 322.24 97.8238 335.22 108.05 344.66C118.67 353.707 133.814 358.23 153.48 358.23ZM153.48 176.51C172.36 176.51 186.717 172.183 196.55 163.53C206.384 154.483 211.3 142.29 211.3 126.95V117.51C211.3 102.17 206.384 90.1733 196.55 81.52C186.717 72.4733 172.36 67.95 153.48 67.95C134.6 67.95 120.244 72.4733 110.41 81.52C100.577 90.1733 95.6605 102.17 95.6605 117.51V126.95C95.6605 142.29 100.577 154.483 110.41 163.53C120.244 172.183 134.6 176.51 153.48 176.51ZM629.97 163.53C629.97 192.637 625.447 219.973 616.4 245.54C607.747 271.107 596.34 294.903 582.18 316.93C568.413 338.563 552.68 358.033 534.98 375.34C517.673 392.647 500.17 407.2 482.47 419H360.34C385.513 400.907 408.13 383.797 428.19 367.67C448.25 351.15 465.557 334.63 480.11 318.11C495.057 301.59 507.25 284.873 516.69 267.96C526.13 250.653 533.013 232.167 537.34 212.5L532.03 210.73C528.49 218.597 524.163 226.267 519.05 233.74C514.33 241.213 508.233 247.9 500.76 253.8C493.68 259.307 485.223 263.83 475.39 267.37C465.557 270.91 454.15 272.68 441.17 272.68C424.257 272.68 408.327 269.73 393.38 263.83C378.827 257.537 366.043 248.883 355.03 237.87C344.41 226.857 335.953 213.483 329.66 197.75C323.76 182.017 320.81 164.317 320.81 144.65C320.81 123.41 324.35 103.94 331.43 86.24C338.903 68.54 349.327 53.3966 362.7 40.81C376.467 27.83 392.79 17.8 411.67 10.72C430.55 3.63998 451.79 0.0999775 475.39 0.0999775C499.777 0.0999775 521.607 4.03331 540.88 11.9C560.153 19.3733 576.28 30.3867 589.26 44.94C602.633 59.1 612.663 76.21 619.35 96.27C626.43 116.33 629.97 138.75 629.97 163.53ZM475.39 204.83C495.057 204.83 510.397 199.52 521.41 188.9C532.423 177.887 537.93 162.35 537.93 142.29V131.67C537.93 111.61 532.423 96.27 521.41 85.65C510.397 74.6366 495.057 69.13 475.39 69.13C455.723 69.13 440.383 74.6366 429.37 85.65C418.357 96.27 412.85 111.61 412.85 131.67V142.29C412.85 162.35 418.357 177.887 429.37 188.9C440.383 199.52 455.723 204.83 475.39 204.83Z"
                                                fill="white"
                                            />
                                        </svg>

                                        <svg
                                            className="hidden lg:block h-4 w-auto"
                                            width="4420"
                                            height="427"
                                            viewBox="0 0 4420 427"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M936.863 111.16L854.183 265.6H1019.54L936.863 111.16ZM1101.18 419L1058.02 337.88H816.743L773.583 419H681.023L881.223 42.52H994.063L1193.74 419H1101.18ZM1250.17 419V42.52H1341.69V346.72H1631.33V419H1250.17ZM2063.59 419L1887.31 238.56L1791.11 306.16V419H1699.59V42.52H1791.11V217.76L2039.15 42.52H2164.99L1956.47 190.2L2183.71 419H2063.59ZM2449.64 111.16L2366.96 265.6H2532.32L2449.64 111.16ZM2613.96 419L2570.8 337.88H2329.52L2286.36 419H2193.8L2394 42.52H2506.84L2706.52 419H2613.96ZM2762.95 419V42.52H2854.47V346.72H3144.11V419H2762.95ZM3212.36 419V42.52H3303.88V419H3212.36ZM3768.45 419L3513.13 150.16H3511.57V419H3420.05V42.52H3526.65L3781.97 311.88H3784.05V42.52H3875.57V419H3768.45ZM3996.42 419V42.52H4404.62V114.8H4087.94V191.76H4307.9V264.04H4087.94V346.72H4419.18V419H3996.42Z"
                                                fill="#FD000B"
                                            />
                                            <path
                                                d="M153.48 426.08C129.094 426.08 107.264 423.13 87.9905 417.23C69.1105 410.937 53.1805 402.48 40.2005 391.86C27.2205 381.24 17.1905 368.653 10.1105 354.1C3.4238 339.547 0.0804704 323.617 0.0804704 306.31C0.0804704 279.957 7.35714 258.52 21.9105 242C36.4638 225.087 56.1305 213.287 80.9105 206.6V201.88C60.8505 194.407 44.3305 183 31.3505 167.66C18.7638 152.32 12.4705 132.653 12.4705 108.66C12.4705 92.9266 15.4205 78.3733 21.3205 65C27.6138 51.6267 36.6605 40.22 48.4605 30.78C60.6538 20.9466 75.4038 13.4733 92.7105 8.35998C110.41 2.85331 130.667 0.0999775 153.48 0.0999775C176.294 0.0999775 196.354 2.85331 213.66 8.35998C231.36 13.4733 246.11 20.9466 257.91 30.78C270.104 40.22 279.15 51.6267 285.05 65C291.344 78.3733 294.49 92.9266 294.49 108.66C294.49 132.653 288 152.32 275.02 167.66C262.434 183 246.11 194.407 226.05 201.88V206.6C250.83 213.287 270.497 225.087 285.05 242C299.604 258.52 306.88 279.957 306.88 306.31C306.88 323.617 303.34 339.547 296.261 354.1C289.574 368.653 279.74 381.24 266.76 391.86C253.78 402.48 237.654 410.937 218.38 417.23C199.5 423.13 177.867 426.08 153.48 426.08ZM153.48 358.23C173.147 358.23 188.094 353.707 198.32 344.66C208.94 335.22 214.25 322.24 214.25 305.72V293.92C214.25 277.4 208.94 264.617 198.32 255.57C188.094 246.13 173.147 241.41 153.48 241.41C133.814 241.41 118.67 246.13 108.05 255.57C97.8238 264.617 92.7105 277.4 92.7105 293.92V305.72C92.7105 322.24 97.8238 335.22 108.05 344.66C118.67 353.707 133.814 358.23 153.48 358.23ZM153.48 176.51C172.36 176.51 186.717 172.183 196.55 163.53C206.384 154.483 211.3 142.29 211.3 126.95V117.51C211.3 102.17 206.384 90.1733 196.55 81.52C186.717 72.4733 172.36 67.95 153.48 67.95C134.6 67.95 120.244 72.4733 110.41 81.52C100.577 90.1733 95.6605 102.17 95.6605 117.51V126.95C95.6605 142.29 100.577 154.483 110.41 163.53C120.244 172.183 134.6 176.51 153.48 176.51ZM629.97 163.53C629.97 192.637 625.447 219.973 616.4 245.54C607.747 271.107 596.34 294.903 582.18 316.93C568.413 338.563 552.68 358.033 534.98 375.34C517.673 392.647 500.17 407.2 482.47 419H360.34C385.513 400.907 408.13 383.797 428.19 367.67C448.25 351.15 465.557 334.63 480.11 318.11C495.057 301.59 507.25 284.873 516.69 267.96C526.13 250.653 533.013 232.167 537.34 212.5L532.03 210.73C528.49 218.597 524.163 226.267 519.05 233.74C514.33 241.213 508.233 247.9 500.76 253.8C493.68 259.307 485.223 263.83 475.39 267.37C465.557 270.91 454.15 272.68 441.17 272.68C424.257 272.68 408.327 269.73 393.38 263.83C378.827 257.537 366.043 248.883 355.03 237.87C344.41 226.857 335.953 213.483 329.66 197.75C323.76 182.017 320.81 164.317 320.81 144.65C320.81 123.41 324.35 103.94 331.43 86.24C338.903 68.54 349.327 53.3966 362.7 40.81C376.467 27.83 392.79 17.8 411.67 10.72C430.55 3.63998 451.79 0.0999775 475.39 0.0999775C499.777 0.0999775 521.607 4.03331 540.88 11.9C560.153 19.3733 576.28 30.3867 589.26 44.94C602.633 59.1 612.663 76.21 619.35 96.27C626.43 116.33 629.97 138.75 629.97 163.53ZM475.39 204.83C495.057 204.83 510.397 199.52 521.41 188.9C532.423 177.887 537.93 162.35 537.93 142.29V131.67C537.93 111.61 532.423 96.27 521.41 85.65C510.397 74.6366 495.057 69.13 475.39 69.13C455.723 69.13 440.383 74.6366 429.37 85.65C418.357 96.27 412.85 111.61 412.85 131.67V142.29C412.85 162.35 418.357 177.887 429.37 188.9C440.383 199.52 455.723 204.83 475.39 204.83Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                </div>
                                <div className="hidden sm:block sm:ml-10 w-full">
                                    <div className="flex space-x-4 w-full ">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "text-brown"
                                                        : "text-white hover:text-brown",
                                                    "px-3 py-2 rounded-md text-small itc tracking-small font-medium uppercase"
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "text-brown"
                                            : "text-white hover:text-brown",
                                        "block px-3 py-2 text-small itc font-medium uppercase tracking-small"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

import React, { useState, Fragment } from "react";
import { BiChevronRight } from "react-icons/bi";
import { Dialog, Transition } from "@headlessui/react";
import { VscClose } from "react-icons/vsc";

interface RequestProps {}

export const Request: React.FC<RequestProps> = ({}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={() => setOpen(false)}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-opacity-40 bg-black" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div
                                className="inline-block p-3 overflow-x-hidden overflow-y-scroll text-left align-bottom transition-all transform bg-white rounded shadow-xl dark:bg-black-700 sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
                                style={{
                                    maxHeight: "35rem",
                                }}
                            >
                                <div className="flex items-center mb-2">
                                    <p className="text-blue itc text-md">
                                        REQUEST A FREE DEMO
                                    </p>
                                    <VscClose
                                        onClick={() => setOpen(false)}
                                        className="text-blue block h-7 w-7 ml-auto mr-2 hover:text-brown cursor-pointer"
                                        aria-hidden="true"
                                    />
                                </div>
                                <p className="text-xs text-gray-500 mb-6">
                                    Free sample kit of our 5L bottle is only
                                    open to registered foodservice operators in
                                    the UK, contact must be over 18 years of
                                    age. Business must be registered with the
                                    Environmental Health Department of the
                                    relevant Local Authority, serving meals to
                                    customers on a take-away or eat-in basis.
                                </p>
                                <div className="mb-5">
                                    <p className="text-blue itc tracking-small text-sm mb-0.5">
                                        FIRST NAME
                                    </p>
                                    <input
                                        className="w-full py-1.5 px-2 text-sm border border-blue focus:outline-none rounded-sm"
                                        placeholder="First name"
                                    />
                                </div>
                                <div className="mb-5">
                                    <p className="text-blue itc tracking-small text-sm mb-0.5">
                                        LAST NAME
                                    </p>
                                    <input
                                        className="w-full py-1.5 px-2 text-sm border border-blue focus:outline-none rounded-sm"
                                        placeholder="Last name"
                                    />
                                </div>
                                <div className="mb-5">
                                    <p className="text-blue itc tracking-small text-sm mb-0.5">
                                        MOBILE NO.
                                    </p>
                                    <input
                                        className="w-full py-1.5 px-2 text-sm border border-blue focus:outline-none rounded-sm"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div className="mb-5">
                                    <p className="text-blue itc tracking-small text-sm mb-0.5">
                                        COMMENTS
                                    </p>
                                    <textarea
                                        style={{ minHeight: "40px" }}
                                        className="w-full py-1.5 px-2 text-sm border border-blue focus:outline-none rounded-sm"
                                        placeholder="Comments"
                                    />
                                </div>
                                <button
                                    style={{ fontSize: "12px" }}
                                    className="w-full bg-blue py-2.5 px-5 itc tracking-small uppercase text-white"
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>

            <button
                onClick={() => setOpen(true)}
                style={{
                    fontSize: "12px",
                    letterSpacing: "2px",
                    position: "fixed",
                    zIndex: "100",
                    bottom: 15,
                    right: 10,
                }}
                className="flex items-center justify-center bg-blue py-4 mt-6  px-9 itc uppercase text-white border border-white hover:bg-white hover:border-blue hover:text-blue transition"
            >
                <p>REQUEST A FREE DEMO</p>
                <BiChevronRight className="text-lg" />
            </button>
        </>
    );
};

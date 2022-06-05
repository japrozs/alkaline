import React, { useState, Fragment } from "react";
import { BiChevronRight } from "react-icons/bi";
import { Dialog, Transition } from "@headlessui/react";
import { VscClose } from "react-icons/vsc";
import axios from "axios";
import { useRouter } from "next/router";

interface RequestProps {}

export const Request: React.FC<RequestProps> = ({}) => {
    const [open, setOpen] = useState(false);
    const [vis, setVis] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [comments, setComments] = useState("");

    const submit = async (event: any) => {
        event.preventDefault();
        let apiKey = "1be9a6884abd4c3ea143b59ca317c6b2";
        const data = await axios.get(
            "https://api.ipdata.co?api-key=46e261b086e97ba2279dddae922392ee28434240c7632389f2926203"
        );

        let res = await axios.post(`${window.location.origin}/api/email`, {
            firstName,
            lastName,
            mobile,
            comments,
            ipAddress: data.data,
        });
        console.log("res.data :: ", res.data);
        setFirstName("");
        setLastName("");
        setMobile("");
        setComments("");
        setVis(true);
    };

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
                            <form
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
                                <p className="text-xs text-gray-500 mb-3">
                                    Free sample kit of our 5L bottle is only
                                    open to registered foodservice operators in
                                    the UK, contact must be over 18 years of
                                    age. Business must be registered with the
                                    Environmental Health Department of the
                                    relevant Local Authority, serving meals to
                                    customers on a take-away or eat-in basis.
                                </p>
                                {vis && (
                                    <p className="text-green-500 font-medium mb-3 text-center">
                                        Thank you for your request. We will
                                        contact you shortly!
                                    </p>
                                )}
                                <div className="mb-5">
                                    <p className="text-blue itc tracking-small text-sm mb-0.5">
                                        FIRST NAME
                                    </p>
                                    <input
                                        value={firstName}
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                        required
                                        className="w-full py-1.5 px-2 text-sm border border-blue focus:outline-none rounded-sm"
                                        placeholder="First name"
                                    />
                                </div>
                                <div className="mb-5">
                                    <p className="text-blue itc tracking-small text-sm mb-0.5">
                                        LAST NAME
                                    </p>
                                    <input
                                        value={lastName}
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                        required
                                        className="w-full py-1.5 px-2 text-sm border border-blue focus:outline-none rounded-sm"
                                        placeholder="Last name"
                                    />
                                </div>
                                <div className="mb-5">
                                    <p className="text-blue itc tracking-small text-sm mb-0.5">
                                        MOBILE NO.
                                    </p>
                                    <input
                                        value={mobile}
                                        onChange={(e) => {
                                            /*
                                            *
                                            The below shit solution just makes sure
                                            that numbers cannot be entered into the input
                                            because apparently the browser is allowing numbers
                                            to be entered into the input even though I have set the 
                                            `type` and the `maxLength` prop on the input

                                            let hours_wasted : number = 2;
                                            *
                                            */
                                            const str = e.target.value;
                                            if (
                                                !isNaN(
                                                    parseInt(
                                                        str.slice(
                                                            mobile.length,
                                                            str.length
                                                        )
                                                    )
                                                )
                                            ) {
                                                setMobile(str);
                                            }
                                        }}
                                        maxLength={13}
                                        required
                                        className="w-full py-1.5 px-2 text-sm border border-blue focus:outline-none rounded-sm"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div className="mb-5">
                                    <p className="text-blue itc tracking-small text-sm mb-0.5">
                                        COMMENTS
                                    </p>
                                    <textarea
                                        value={comments}
                                        onChange={(e) =>
                                            setComments(e.target.value)
                                        }
                                        required
                                        style={{ minHeight: "40px" }}
                                        className="w-full py-1.5 px-2 text-sm border border-blue focus:outline-none rounded-sm"
                                        placeholder="Comments"
                                    />
                                </div>
                                <button
                                    onClick={submit}
                                    style={{ fontSize: "12px" }}
                                    className="w-full bg-blue py-2.5 px-5 itc tracking-small uppercase text-white"
                                >
                                    SUBMIT
                                </button>
                            </form>
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

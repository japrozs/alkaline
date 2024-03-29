import React from "react";
import Head from "next/head";
import { Footer } from "../components/shared/Footer";
import { Navbar } from "../components/shared/Navbar";

interface StoryProps {}

const Story: React.FC<StoryProps> = ({}) => {
    return (
        <div>
            <Head>
                <title>89 Alkaline - Story</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <div className="mx-auto max-w-4xl p-7 itc">
                <h1 className="text-center text-blue text-4xl md:text-5xl md:font-bold mb-6">
                    Our Story
                </h1>
                <div className="mx-auto w-4/5 reg">
                    <p className="text-blue my-7">
                        In 2020 during Covid-19 pandemic lock down in India, we
                        all realized that health is paramount in our life.
                        Everyone one around the world is talking about the
                        immunity and value of alkaline food &amp; fruits in
                        improving the same. But when we looked around and found
                        that most of our junk foods are highly acidic and doing
                        absolutely reverse and harming the inner body and
                        damaging our immunity system.
                    </p>
                    <p className="text-blue my-7">
                        But we all are equally responsible for this mess and
                        hold the responsibility to make this right for the sake
                        of our children, grand children &amp; future generation.
                    </p>
                    <p className="text-blue my-7">
                        Thinking about Mother Nature, we embarked on a quest to
                        provide our fellow citizens and Indian community with
                        the best drinking water possible. Our water is sold in
                        bulk 20L reusable (recyclable as well) and 5L bottles to
                        reduce the impact on environment to the minimum. This
                        enables us to save the lot of bottling cost which allows
                        us to offer the pure &amp; healthy alkaline water at the
                        lowest possible cost.
                    </p>
                    <p className="text-blue my-7">
                        At 89Alkaline, we are committed to quality,
                        sustainability, wellness and the environment.
                    </p>
                </div>
                <div className="text-blue w-4/5 mx-auto">
                    <h1 className="text-2xl md:text-3xl md:font-bold mb-3">
                        Our Values
                    </h1>
                    <ul style={{}} className="reg list-disc">
                        <li>Absolute commitment to quality</li>
                        <li>Respect &amp; Devotion to Mother Nature</li>
                        <li>Humanity &amp; Humility while serving</li>
                        <li>No discrimination in service</li>
                        <li>Service with Integrity</li>
                    </ul>
                </div>
                <div className="text-blue w-4/5 mx-auto my-6">
                    <h1 className="text-2xl md:text-3xl md:font-bold mb-3">
                        Quality
                    </h1>
                    <p className="reg">
                        The quality of technology and science that goes into our
                        process reflects our commitment to your health. We have
                        invested in best technology &amp; scientific research,
                        because there is no other way to get the quality of
                        water that we would want to drink.
                    </p>
                </div>
                <div className="text-blue w-4/5 mx-auto my-6">
                    <h1 className="text-2xl md:text-3xl md:font-bold mb-3">
                        Our Mission
                    </h1>
                    <p className="reg">
                        To be trusted globally in providing the purest &amp;
                        healthy water to humanity and being the most caring
                        child of Mother Nature.
                    </p>
                </div>
                <div className="text-blue w-4/5 mx-auto my-6">
                    <h1 className="text-2xl md:text-3xl md:font-bold mb-3">
                        Thank You!
                    </h1>
                    <p className="reg">
                        We humbly appreciate your support. It’s you who allow us
                        to continue offering our water from 89Alkaline family to
                        yours, thank you.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Story;

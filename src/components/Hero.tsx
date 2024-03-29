import {FC} from "react";
import {Button} from "./Button.tsx";
import poster from "../assets/photo.jpg"
import {FeatureCard} from "./FeatureCard.tsx";


export const Hero: FC = () => {
    return (
        <section className="mt-4 bg-[#f3f5f7] p-4 w-full rounded-xl">
            <div className="flex items-center px-24 py-24 gap-x-2">
                <div className="flex flex-col gap-y-8 w-1/2">
                    <h1 className="text-4xl font-semibold">Individually Designed</h1>
                    <h1 className="text-4xl font-semibold">Coaching Exclusively</h1>
                    <h1 className="text-4xl font-semibold">For You.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad dolorem eum facilis harum libero
                        non numquam similique ullam ut.</p>
                    <div className="flex gap-4 mt-4">
                        <Button type="primary">Schedule Appointment</Button>
                        <Button type="outline">Discover now</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-y-8 w-1/2">
                    <div className="flex gap-x-6 justify-end">
                        <img src={poster} className="rounded-xl w-1/2 h-2/3" alt="poster"/>
                        <div className="flex flex-col w-1/4 gap-y-6">
                            <FeatureCard heading="94%" title="Satisfied Client" subtitle="+12% In this month"/>
                            <FeatureCard heading="48" title="Experienced Mentor" subtitle="Master's Graduate Mentor"/>
                            <FeatureCard heading="12" title="Life Coach Type" subtitle="Coaching Start For 65$"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

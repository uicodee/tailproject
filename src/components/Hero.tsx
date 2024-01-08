import {FC} from "react";
import {Button} from "./Button.tsx";

export const Hero: FC = () => {
    return (
        <section className="mt-4 bg-[#f3f5f7] p-4 w-full h-full rounded-xl">
            <div className="flex items-center px-24 py-12 gap-x-2">
                <div className="flex flex-col gap-y-8 w-1/2">
                    <h1 className="text-4xl font-semibold">Individually Designed</h1>
                    <h1 className="text-4xl font-bold">Coaching Exclusively</h1>
                    <h1 className="text-4xl font-semibold">For You.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad dolorem eum facilis harum libero non numquam similique ullam ut.</p>
                    <div className="flex gap-4 mt-4">
                        <Button type="primary">Schedule Appointment</Button>
                        <Button type="outline">Discover now</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-y-8 w-1/2">
                </div>
            </div>
        </section>
    );
};

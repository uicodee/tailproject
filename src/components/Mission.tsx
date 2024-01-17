import {FC} from "react";
import mission_1 from "../assets/mission_1.jpg"
import mission_2 from "../assets/mission_2.jpg"
import mission_3 from "../assets/mission_3.jpg"

export const Mission: FC = () => {
    return (
        <section className="flex w-full px-24 h-lvh gap-x-24">
            <div className="grid grid-cols-2 gap-y-6 gap-x-2">
                <div className="flex w-full flex-col">
                    <span className="uppercase text-2xl tracking-widest mb-4 text-gray-600">Mission statement</span>
                </div>
                <div className="flex w-full flex-col gap-y-4">
                    <p className="flex text-2xl text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet excepturi ipsum iure, maiores nemo quasi qui recusandae sed suscipit vitae.</p>
                    <p className="flex text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, reiciendis!</p>
                </div>
                <div className="flex w-full h-96">
                    <img src={mission_1} className="w-full rounded-md "/>
                </div>
                <div className="flex w-full h-48">
                    <div className="flex gap-x-2 w-full">
                        <img src={mission_2} className="flex w-1/2 rounded-md "/>
                        <img src={mission_3} className="flex w-1/2 rounded-md "/>
                    </div>
                </div>
            </div>
        </section>
    );
};

import {FC} from "react";
import {PartnersCard} from "./PartnersCard.tsx";


export const Partners: FC = () => {
    return (
        <section className="flex w-full px-24 h-lvh items-center gap-x-24">
            <div className="flex w-1/3 flex-col">
                <span className="uppercase text-2xl tracking-widest mb-4 text-gray-600">Our partners</span>
                <p className="text-4xl mb-6">Partnering For Positive Change</p>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut delectus doloribus ipsum iusto magni perspiciatis sapiente sed soluta vitae!</p>
            </div>
            <div className="w-2/3">
                <div className="grid grid-cols-3 gap-5 h-96">
                    <PartnersCard title="Spherule" type="solid"/>
                    <PartnersCard title="Luminious" type="outline"/>
                    <PartnersCard title="Interlock" type="solid"/>
                    <PartnersCard title="Layers" type="outline"/>
                    <PartnersCard title="Quotient" type="solid"/>
                    <PartnersCard title="Boltshift" type="outline"/>
                </div>
            </div>
        </section>
    );
};

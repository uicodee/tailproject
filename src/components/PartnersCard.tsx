import {FC} from "react";

type PartnersCardType = "solid" | "outline"

interface PartnersCardProps {
    title: string;
    type: PartnersCardType;
}

export const PartnersCard: FC<PartnersCardProps> = ({title, type}) => {
    return (
        <div className={`flex h-48 rounded-xl ${type === "solid" ? "bg-[#2b7f75]" : "bg-[#f3f5f7]"}`}>
            <div className="flex w-full items-center justify-center">
                <p className={`flex text-xl font-semibold ${type === "solid" ? "text-white" : "text-black"}`}>{title}</p>
            </div>
        </div>
    );
};

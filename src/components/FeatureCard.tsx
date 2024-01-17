import {FC} from "react";

interface FeatureCardProps {
    heading: string;
    title: string;
    subtitle: string
}

export const FeatureCard: FC<FeatureCardProps> = ({heading, title, subtitle}) => {
    return (
        <div className="flex w-full h-1/3 rounded-xl bg-white border-t-4 border-t-[#2b7f75] px-4 items-center">
            <div className="flex flex-col gap-y-2">
                <span className="text-2xl font-semibold">{heading}</span>
                <p className="text-sm">{title}</p>
                <p className="text-sm text-gray-400">{subtitle}</p>
            </div>
        </div>
    );
};

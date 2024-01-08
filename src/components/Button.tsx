import {FC, ReactNode} from "react";

type ButtonType = "primary" | "outline"

interface ButtonProps {
    type: ButtonType
    children: ReactNode
}

export const Button: FC<ButtonProps> = ({children, type}) => {
    return (
        <button className={`hidden md:flex px-8 py-3 border-gray-400 border rounded-md text-sm ${type === "primary" ? "bg-[#2b7f75] text-white border-0" : ""}`}>
            {children}
        </button>
    );
};

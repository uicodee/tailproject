import {FC, ReactNode} from "react";
import {Header} from "./Header.tsx";

interface LayoutProps {
    children: ReactNode
}

export const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className="mx-12 mt-2">
            <Header />
            <div className="">
                {children}
            </div>
        </div>
    );
};

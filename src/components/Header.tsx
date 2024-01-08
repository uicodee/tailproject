import {FC} from "react";
import {Button} from "./Button.tsx";

export const Header: FC = () => {
    return (
        <header className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">LifePath</h1>
            <ul className="hidden md:flex gap-6 items-center text-neutral-500 text-sm ">
                <li>Find a Coach</li>
                <li>Blog</li>
                <li>Courses</li>
                <li>Private Coaching</li>
                <li>About Us</li>
            </ul>
            <Button type="outline">Contact Us</Button>
            {/*<button className="hidden md:flex px-4 py-2 border-gray-400 border rounded-md text-sm">*/}
            {/*    Contact Us*/}
            {/*</button>*/}
        </header>
    );
};

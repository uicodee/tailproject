import {FC} from "react";

export const Coaching: FC = () => {
    return (
        <section className="flex w-full h-lvh items-center py-8">
            <div className="flex bg-[#2b7f75] h-[750px] w-lvw rounded-xl justify-center">
                <div className="flex flex-col items-center justify-center px-12 gap-y-2">
                    <span className="uppercase text-sm tracking-widest mb-4 text-gray-300">Type coaching</span>
                    <h1 className="text-3xl text-white font-light capitalize">Customized coaching packages for personal or team growth.</h1>
                    <p className="text-sm text-white mb-8">Unlock growth with personalized coaching at Life Coach Club. Tailored packages, expert guidance, and positive change await.</p>

                    <ul className="flex flex-wrap text-sm text-center gap-x-8 font-light mb-10">
                        <li className="me-2">
                            <a className="inline-block px-4 py-3 text-gray-300 rounded-lg hover:bg-[#428F86]" aria-current="page">FREE Consultaiton</a>
                        </li>
                        <li className="me-2">
                            <a className="inline-block px-4 py-3 rounded-lg bg-[#428F86] text-white">Individual Coaching</a>
                        </li>
                        <li className="me-2">
                            <a className="inline-block px-4 py-3 text-gray-300 rounded-lg hover:bg-[#428F86]">Group Coaching</a>
                        </li>
                    </ul>
                    <div className="flex w-full h-[300px] gap-x-4">
                        <div className="w-1/2 bg-[#428F86] rounded-xl"></div>
                        <div className="flex flex-col w-1/2 gap-y-4">
                            <div className="flex bg-[#428F86] h-1/3 rounded-xl"></div>
                            <div className="flex bg-[#428F86] h-2/3 rounded-xl"></div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

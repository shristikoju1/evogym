import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean;
};


const Navbar = ({
    selectedPage,
    setSelectedPage,
    isTopOfPage,
}: Props) => {

    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

    return (
        <nav >
            <div
                className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
            >
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div
                        className={`${flexBetween} w-full gap-16 `}
                    >
                        <img src={Logo} alt="logo" />

                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>

                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

                                    <Link
                                        page="Benefits"
                                        selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

                                    <Link
                                        page="Our Classes"
                                        selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

                                    <Link
                                        page="Contact Us"
                                        selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton>Become a member</ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button className="p-2 rounded-full bg-secondary-500"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="w-6 h-6 text-white" />
                            </button>

                        )}


                    </div>

                </div>
            </div>

            {/* Mobile menu */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl p-12">
                    <div className="flex justify-end p-12">
                        <button
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                            className="fixed top-0 right-0 p-10"
                        >
                            <XMarkIcon className="w-6 h-6 text-gray-400" />

                        </button>
                        <div className='ml-[33%] flex flex-col gap-10 text-xl'>

                            <Link
                                page="Home"
                                selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

                            <Link
                                page="Benefits"
                                selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

                            <Link
                                page="Our Classes"
                                selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

                            <Link
                                page="Contact Us"
                                selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
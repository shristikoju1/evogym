import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section
            id="home"
            className="gap-16 py-10 bg-gray-20 md:h-full md:pb-0"
        >
            {/* image and main header */}
            <motion.div className="items-center justify-center w-5/6 mx-auto md:flex md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* main header */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* headings */}
                    <motion.div 
                    className="md:-mt-20 "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-50},
                        visible: {opacity: 1, x:0},
                    }}
                    >
                        <div className="relative ">
                            <div className="before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]">
                                <img src={HomePageText} alt="home-page-text" />
                            </div>
                        </div>

                        <p className="mt-8 text-sm">Welcome to EVOGYM, where your fitness journey begins! With expert trainers, personalized workout plans, and top-tier equipment, we're here to help you achieve your health and wellness goals. Join us today and transform your body and mind!</p>
                    </motion.div>

                


                  
                    {/* actions */}
                    <motion.div className="flex items-center gap-8 mt-8 md:justify-start"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: true, amount: 0.5}}
                      transition={{delay: 0.2, duration: 0.5}}
                      variants={{
                          hidden: {opacity: 0, x:-50},
                          visible: {opacity: 1, x:0},
                      }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink className='text-sm font-bold underline text-primary-500 hover:text-secondary-500'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>

                        </AnchorLink>
                    </motion.div>

                </div>

                {/* image */}
                <div className="flex justify-center basis-3/5 md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img src={HomePageGraphic} alt="home-page-graphic" />
                </div>
            </motion.div>

            {/* sponsors */}
            {isAboveMediumScreens && (
                <div className="h-[150px] w-full bg-primary-100 py-10">
                    <div className="w-5/6 mx-auto">
                        <div className="flex items-center justify-between w-3/5">
                        <img src={SponsorRedBull} alt="sponsor-redbull" />
                        <img src={SponsorForbes} alt="sponsor-forbes" />
                        <img src={SponsorFortune} alt="sponsor-fortune" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home
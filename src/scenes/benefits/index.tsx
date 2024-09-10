import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'


const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="w-6 h-6" />,
    title: "State of the Art Facilities",
    description: "Our gym is equipped with the latest machines and amenities for all fitness levels.",
  },
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: "Expert Trainers",
    description: "Our certified trainers provide personalized guidance to help you achieve your goals.",
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6" />,
    title: "Supportive Community",
    description: "Join a welcoming community that motivates and supports your fitness journey.",
  },

];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
  
}


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits"
    className="w-5/6 min-h-full py-20 mx-auto"
    >
      <motion.div
       onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* header */}
        <motion.div
              className="md:my-5 md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.5}}
              variants={{
                  hidden: {opacity: 0, x:-50},
                  visible: {opacity: 1, x:0},
              }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">Our gym offers personalized workout plans, top-notch equipment, and expert trainers to help you reach your fitness goals. With a variety of classes and a supportive environment, we ensure a balanced path to a healthier, stronger you.</p>
        </motion.div>

        {/* benefits */}
        <motion.div className="items-center justify-between gap-8 mt-5 md:flex" 
           initial="hidden"
           whileInView="visible"
           viewport={{once: true, amount: 0.5}}
           variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
          ) )}
        </motion.div>
             
    {/* graphics and description */}
          <div className="items-center justify-between gap-20 mt-16 md:mt-28 md:flex">
            {/* graphic */}
            <img src={BenefitsPageGraphic} alt="benefits-page-graphic" className="mx-auto"/>
            
            {/* description */}
            <div>
              {/* title */}
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                  <motion.div
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once: true, amount: 0.5}}
                     transition={{duration: 0.5}}
                     variants={{
                         hidden: {opacity: 0, x:50},
                         visible: {opacity: 1, x:0},
                     }}
                  >
                    <HText>
                      MILLIONS OF HAPPY MEMBERS GETTING{" "}
                        <span className="text-primary-500">FIT</span>
                    </HText>
                  </motion.div>
                </div>
              </div>

              {/* description */}
              <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once: true, amount: 0.5}}
                 transition={{delay: 0.2, duration: 0.5}}
                 variants={{
                     hidden: {opacity: 0, x:-50},
                     visible: {opacity: 1, x:0},
                 }}
              >
           
                <p className="my-5">Millions of individuals worldwide are discovering the benefits of staying active and healthy. Our fitness community is growing every day, filled with people who have achieved their goals and continue to push forward. With tailored workout plans, supportive trainers, and a variety of classes, we help every member feel empowered on their fitness journey.</p>
                
                <p className="mb-5">From beginners to seasoned athletes, millions of happy members have found success in getting fit. Through innovative programs, expert guidance, and a community that supports every step, our platform creates an environment where fitness goals are attainable, and long-term health becomes a priority.</p>
                
              </motion.div>
              {/* button */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:left-40 before:z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </div>
                
              </div>
            </div>
          </div>
        
      </motion.div>
    </section>
 
  )
}

export default Benefits
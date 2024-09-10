import { SelectedPage, ClassType  } from "@/shared/types";
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from './Class';

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Strengthen your muscles and improve endurance with our weight training sessions designed for all fitness levels.",
    image: image1
  },
  {
    name: "Yoga Classes",
    // description: "Enhance your flexibility, balance, and mental focus through guided yoga practices suitable for all ages.",
    image: image2
  },
  {
    name: "Cardio Training Classes",
    description: "Boost your cardiovascular health with high-energy cardio exercises aimed at improving stamina and heart health.",
    image: image3
  },
  {
    name: "Crossfit Classes",
    description: "Challenge yourself with a mix of strength and conditioning workouts designed to build functional fitness.",
    image: image4
  },
  {
    name: "Pilates Classes",
    description: "Improve core strength, posture, and overall body flexibility with low-impact Pilates exercises.",
    image: image5
  },
  {
    name: "Zumba Classes",
    // description: "Enjoy a fun and energetic dance workout combining various dance styles for a full-body workout.",
    image: image6
  }
];


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className="w-full py-40 bg-primary-100 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
          <motion.div className="w-5/6 mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.5}}
              variants={{
                  hidden: {opacity: 0, x:-50},
                  visible: {opacity: 1, x:0},
              }}
          >
            <div className="md:w-3/5">
              <HText>OUR CLASSES</HText>
                <p className="py-5">Millions of members have transformed their lives by embracing fitness routines that suit their needs. Whether it's weight loss, muscle gain, or improving overall well-being, we provide the tools and motivation to ensure success.</p>
            </div>
          </motion.div>
              <div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                  <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                      <Class 
                      key = {`${item.name}-${index}`}
                      name = {item.name}
                      description = {item.description}
                      image = {item.image}
                      />
                    ))}
                  </ul>
                </div>
              </div>
      </motion.div>
    </section>
  )
}

export default OurClasses
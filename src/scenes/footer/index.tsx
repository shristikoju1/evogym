import { SelectedPage } from "@/shared/types";
import Logo from '@/assets/Logo.png';

// type Props = {
//     setSelectedPage: (value: SelectedPage) => void;

// }

const Footer = () => {
    return (
        <footer id="footer" className="py-16 bg-primary-100">
        <div className="w-5/6 gap-16 mx-auto justify-content md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="EvoGym Logo" />
                <p className="my-5">
                    Stay committed to your fitness goals, and let us support you every step of the way. Follow us for tips, updates, and inspiration!
                </p>
                <p>© 2024 EvoGym. All rights reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Quick Links</h4>
                <ul>
                    <li className="my-5">
                        <a href="/services" className="hover:underline">Our Services</a>
                    </li>
                    <li className="my-5">
                        <a href="/about" className="hover:underline">About Us</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:underline">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">123 Fitness Street, New York</p>
                <p className="my-5">info@evogym.com</p>
                <p>(555) 345-098-783</p>
            </div>
        </div>
    </footer>
    )    
}

export default Footer
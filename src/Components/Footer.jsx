import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFFDD0] text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h6 className="text-xl font-bold mb-4">Location</h6>
            <p className="text-lg">1362/7 South Dania</p>
            <p className="text-lg">Dhaka, Bangladesh</p>
            <p className="text-lg mt-4">Visit us:</p>
            <a href="#" className="text-lg hover:font-bold">Google Maps</a>
          </div>
          <div>
            <h6 className="text-xl font-bold mb-4">Contact</h6>
            <p className="text-lg">Phone: +88-01851918442</p>
            <p className="text-lg">Email: hasanriazul4@gmail.com</p>
            <p className="text-lg mt-4 mb-4">Connect with us:</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/dn.dipu.9/" target="_blank" className="text-xl hover:font-bold"><FaSquareFacebook size={40} /></a>
              <a href="https://www.instagram.com/p_r_i_n_c_eeee/" target="_blank" className="text-xl hover:font-bold"><FaInstagram size={40} /></a>
              <a href="https://github.com/princerh" target="_blank" className="text-xl hover:font-bold"><FaGithub size={40} /></a>
            </div>
          </div>
          <div>
            <h6 className="text-xl font-bold mb-4">Legal</h6>
            <ul className="space-y-2">
              <li><a href="#" className="text-lg hover:font-bold">Terms of Use</a></li>
              <li><a href="#" className="text-lg hover:font-bold">Privacy Policy</a></li>
              <li><a href="#" className="text-lg hover:font-bold">Cookie Policy</a></li>
              <li><a href="#" className="text-lg hover:font-bold">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="flex items-center justify-center mt-8">
          <p className="text-lg mr-2">© 2024 All rights reserved by <span className="dancing">Havenly Habitat</span></p>
  
        </div>
      </div>
    </footer>
  );
};

export default Footer;

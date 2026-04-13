import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
      <footer className="bg-[#ffffff] py-10 px">
        <div className="w-[90%] mx-auto bg-[#f9f9f9] rounded-3xl p-8 md:p-12">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            
            {/* Logo + Description */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  <div className="w-5 h-5 border-2 border-orange-500 rounded-full"></div>
                  <div className="w-5 h-5 border-2 border-orange-300 rounded-full -ml-2"></div>
                </div>
                <span className="text-xl font-semibold">
                  auto<span className="text-orange-500">mate</span>
                </span>
              </div>
  
              <p className="text-gray-600 mb-6">
                Automate transforms your operations with seamless AI integration.
              </p>
  
              {/* Social Icons */}
              <div className="flex gap-3">
  {[FaInstagram,CiFacebook,FaXTwitter,FaLinkedinIn].map((Icon, i) => (
    <div
      key={i}
      className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-lg text-gray-600 hover:bg-gray-300 cursor-pointer transition"
    >
      <Icon size={18} />
    </div>
  ))}
</div>
            </div>
            {/* Company */}
            <div>
              <h3 className="text-orange-500 font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>About Us</li>
                <li>Our Solutions</li>
                <li>Contact Us</li>
                <li>Blog</li>
              </ul>
            </div>
  
            {/* Products */}
            <div>
              <h3 className="text-orange-500 font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Pricing</li>
                <li>Solutions</li>
                <li>Testimonials</li>
                <li>Case Study</li>
                <li>System Status</li>
              </ul>
            </div>
  
            {/* Features */}
            <div>
              <h3 className="text-orange-500 font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Natural Language</li>
                <li>24/7 Availability</li>
                <li>Seemless Integration</li>
                <li>Multiple Login</li>
                <li>Flow Builder</li>
              </ul>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t my-8"></div>
  
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
            <p>
              © 2026 Automate Elementor Template Kit by Underline Webb
            </p>
  
            <div className="flex gap-5">
              <span className="cursor-pointer hover:text-black">Legal</span>
              <span className="cursor-pointer hover:text-black">
                Privacy Policy
              </span>
              <span className="cursor-pointer hover:text-black">
                Site Terms
              </span>
              <span className="cursor-pointer hover:text-black">
                Cookie Policy
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
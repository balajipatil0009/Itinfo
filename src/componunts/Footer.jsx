import { FaFacebook, FaWhatsapp , FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">About ITINFO ACADEMY</h3>
            <p className="text-sm leading-relaxed">
              We are committed to delivering top-tier IT education, equipping students with the skills to thrive in the tech world.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Contact Us</h3>
            <p className="text-sm">Email: Itinfoacademy@yahoo.com</p>
            <p className="text-sm">Phone: 8830257210 | 8007633732</p>
            <p className="text-sm">Address: 2nd floor blue sapphire building near KFC vijaynagar, Sangli</p>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/ciPrf9ixUD4eeeeT/" className="text-white hover:text-yellow-400 transition duration-300 transform hover:scale-110">
                <FaFacebook size={24} />
              </a>
           
              <a href="https://www.instagram.com/itinfoacademy?igsh=ZHRoYWN2d3o1aWdi" className="text-white hover:text-yellow-400 transition duration-300 transform hover:scale-110">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/itinfo-academy-aa05a02a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white hover:text-yellow-400 transition duration-300 transform hover:scale-110">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm border-t border-blue-700 pt-4">
          <p>&copy; 2024 ITINFO ACADEMY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
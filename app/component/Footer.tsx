function Footer() {
    return (
      <footer className="w-full bg-gray-800 border-t border-gray-700">
        <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <div className="mb-4 md:mb-0">
              <p className="text-sm sm:text-base">© {new Date().getFullYear()} Mohd Laiqur Rahman. All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <a href="tel:+your-phone-number" className="hover:text-white transition-colors duration-300 mb-2 md:mb-0 md:mr-4">+91 8626014623</a>
              <a href="mailto:your-email@example.com" className="hover:text-white transition-colors duration-300">Shaikhlaique211@gmail.com</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors duration-300">GitHub</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
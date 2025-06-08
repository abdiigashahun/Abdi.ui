import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

export const UniversalFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 sm:px-10">
      <div className="">
        <h2 className="text-lg flex items-center justify-center font-bold mb-4">Follow Me</h2>
        <div className="flex items-center justify-center space-x-4">
          <a href="https://twitter.com/abdi_mik" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="https://facebook.com/abdi_mik" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaFacebook />
          </a>
          <a href="https://instagram.com/abdi_mik" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaInstagram />
          </a>
          <a href="https://github.com/abdi-mangashahun" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
        © 2025 UI Library. All rights reserved.
      </div>
    </footer>
  );
};

export default UniversalFooter;

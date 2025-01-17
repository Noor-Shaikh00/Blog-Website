import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about flex flex-col md:flex-row items-center bg-white p-8 md:p-16">
      {/* Left Section for Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image width={1000} height={1000}
          src="/girl-pic.jpg" 
          alt="Noor Shaikh"
          className="rounded-md h-3/4 w-3/4"
        />
      </div>
      {/* Right Section for Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">ABOUT ME</h1>
        <h2 className="text-xl text-purple-600 font-semibold mb-4">Noor Shaikh - Developer</h2>
        <p className="text-gray-600 mb-6">
        I am a passionate and results-driven web developer skilled in both front-end and back-end technologies, I specialize in creating user-friendly, visually appealing, and high-performance web applications. My expertise includes working with modern frameworks, tools, and programming languages such as HTML5, CSS3, JavaScript, React, Node.js, and more.
        </p>
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <Link href="https://behance.net">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-behance"></i>
            </div>
          </Link>
          <Link href="https://dribbble.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-dribbble"></i>
            </div>
          </Link>
          <Link href="https://twitter.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-twitter"></i>
            </div>
          </Link>
          <Link href="https://instagram.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-instagram"></i>
            </div>
          </Link>
          <Link href="https://linkedin.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-linkedin"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
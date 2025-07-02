"use client";
import React from "react";

function MainComponent() {
  const { useState, useEffect } = React;
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm px-4 md:px-6 py-4 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold text-blue-600 animate-slide-in-left">
            Ganesh Wankhade
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#achievements"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 relative group"
            >
              Achievements
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
          >
            <i
              className={`fas ${
                isMobileMenuOpen ? "fa-times" : "fa-bars"
              } text-xl transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
            ></i>
          </button>

          <a
            href="/"
            className="hidden md:block text-blue-600 hover:text-blue-800 font-medium transition-all duration-300 hover:scale-105"
          >
            ← Back to Aaryavarta
          </a>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
              >
                Projects
              </a>
              <a
                href="#achievements"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
              >
                Achievements
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
              >
                Contact
              </a>
              <a
                href="/"
                className="text-blue-600 hover:text-blue-800 font-medium transition-all duration-300 hover:translate-x-2"
              >
                ← Back to Aaryavarta
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 md:px-6 py-12 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div
              className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Ganesh{" "}
                <span className="text-blue-600 animate-gradient-text">
                  Wankhade
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-purple-600 font-semibold mb-6">
                Embedded System Specialist
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                Passionate embedded systems engineer with expertise in
                microcontroller programming, hardware-software integration, and
                real-time system optimization. Dedicated to creating efficient,
                reliable, and innovative embedded solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="border-2 border-blue-500 text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 text-center"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div
              className={`w-full md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-500">
                  <img
                    src="/ganesh.jpg"
                    alt="Ganesh Wankhade"
                    className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-purple-300 shadow-xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                  <i className="fas fa-code text-xl md:text-2xl text-white"></i>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow"
                  style={{ animationDelay: "1s" }}
                >
                  <i className="fas fa-cog text-lg md:text-xl text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 md:px-6 py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Embedded Systems Expert
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With a deep passion for embedded systems and hardware-software
                integration, I specialize in developing robust, efficient, and
                scalable embedded solutions. My expertise spans across
                microcontroller programming, real-time systems, and performance
                optimization.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I have extensive experience working with various microcontroller
                families including ARM Cortex, AVR, PIC, and STM32. My approach
                combines theoretical knowledge with practical implementation,
                ensuring that every project meets both technical requirements
                and real-world constraints.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As part of the Aaryavarta team, I contribute to innovative IoT
                and embedded system projects, focusing on system architecture,
                hardware design, and performance optimization to deliver
                cutting-edge solutions.
              </p>
            </div>

            <div
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 className="font-bold text-gray-900 mb-2">
                  Experience Focus
                </h4>
                <p className="text-gray-600">
                  Microcontroller programming, real-time systems, and
                  hardware-software integration
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 className="font-bold text-gray-900 mb-2">Specialization</h4>
                <p className="text-gray-600">
                  ARM Cortex, STM32, performance optimization, and system
                  debugging
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 className="font-bold text-gray-900 mb-2">Team Role</h4>
                <p className="text-gray-600">
                  Embedded System Specialist at Aaryavarta, driving technical
                  innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="px-4 md:px-6 py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              Technical <span className="text-purple-600">Skills</span>
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Comprehensive expertise in embedded systems development, from
              low-level programming to system integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Embedded Programming */}
            <div
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-code text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Embedded Programming
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">C/C++</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Assembly Language</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Real-time Programming</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Firmware Development</span>
                </div>
              </div>
            </div>

            {/* Microcontrollers & Hardware */}
            <div
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-microchip text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                Microcontrollers & Hardware
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">ARM Cortex</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">AVR, PIC</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">STM32</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Arduino, Raspberry Pi</span>
                </div>
              </div>
            </div>

            {/* Development Tools */}
            <div
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-tools text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                Development Tools
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Keil uVision</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">MPLAB, Atmel Studio</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">PlatformIO</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-600 text-sm">
                    Oscilloscopes, Logic Analyzers
                  </span>
                </div>
              </div>
            </div>

            {/* Communication Protocols */}
            <div
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-network-wired text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                Communication Protocols
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">UART, SPI, I2C</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">CAN Bus</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Modbus</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Ethernet</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specialized Skills */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8 animate-fade-in-up">
              Specialized <span className="text-blue-600">Skills</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div
                className="bg-white rounded-lg p-4 md:p-6 text-center shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <i className="fas fa-drafting-compass text-2xl md:text-3xl text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                  Hardware Design
                </h4>
                <p className="text-gray-600 text-xs md:text-sm">
                  Circuit design and PCB layout optimization
                </p>
              </div>
              <div
                className="bg-white rounded-lg p-4 md:p-6 text-center shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <i className="fas fa-puzzle-piece text-2xl md:text-3xl text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                  System Integration
                </h4>
                <p className="text-gray-600 text-xs md:text-sm">
                  Seamless hardware-software integration
                </p>
              </div>
              <div
                className="bg-white rounded-lg p-4 md:p-6 text-center shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <i className="fas fa-tachometer-alt text-2xl md:text-3xl text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                  Performance Optimization
                </h4>
                <p className="text-gray-600 text-xs md:text-sm">
                  Code and system performance tuning
                </p>
              </div>
              <div
                className="bg-white rounded-lg p-4 md:p-6 text-center shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <i className="fas fa-bug text-2xl md:text-3xl text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                  Debugging
                </h4>
                <p className="text-gray-600 text-xs md:text-sm">
                  Advanced debugging and troubleshooting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="px-4 md:px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Showcasing expertise in embedded systems development and
              hardware-software integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Project 1 */}
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="h-40 md:h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <img
                  src="/a-photograph-of-a-sleek-futuristic-vehic_NYciPrjhTYWc8g3SJsMKSw_2Z81PH09QcOM-JbI5NVeTg.jpeg"
                  alt="Advance Vehicle Safety System"
                  className="object-cover w-full h-full max-h-48 sm:max-h-56 md:max-h-64 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Advance Vehicle Safety System
                  <span className="ml-2 inline-block bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full align-middle">Team Project</span>
                </h3>
                <p className="text-gray-500 text-xs mb-2">This project is a collaborative effort by Mayur, Ganesh, and Yash.</p>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Led the development of an intelligent automotive safety system featuring real-time collision detection, lane departure warnings, and emergency response capabilities. The system integrates multiple IoT sensors with AI-powered decision making to enhance vehicle safety and reduce accident rates.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors duration-200">Arduino</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors duration-200">ESP32</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors duration-200">OpenCV</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors duration-200">TensorFlow Lite</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors duration-200">MQTT</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors duration-200">React Native</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center justify-center sm:justify-start transition-all duration-300 hover:translate-x-2">
                    <i className="fab fa-github mr-2"></i>
                    View Code
                  </button>
                  <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center justify-center sm:justify-start transition-all duration-300 hover:translate-x-2">
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Live Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="h-40 md:h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <i className="fas fa-cogs text-5xl md:text-6xl text-white group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  Hardware-Software Integration
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Seamlessly integrated complex hardware components with custom
                  firmware, implementing multiple communication protocols and
                  ensuring robust system performance.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs hover:bg-purple-200 transition-colors duration-200">
                      SPI/I2C
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs hover:bg-purple-200 transition-colors duration-200">
                      CAN Bus
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs hover:bg-purple-200 transition-colors duration-200">
                      PCB Design
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs hover:bg-purple-200 transition-colors duration-200">
                      Firmware
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-medium">
                    System Integration
                  </span>
                  <i className="fas fa-arrow-right text-purple-600 group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="h-40 md:h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <i className="fas fa-tachometer-alt text-5xl md:text-6xl text-white group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  Performance Optimization
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Optimized embedded system performance through advanced
                  debugging techniques, memory management, and code
                  optimization, achieving significant efficiency improvements.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs hover:bg-green-200 transition-colors duration-200">
                      Assembly
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs hover:bg-green-200 transition-colors duration-200">
                      Profiling
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs hover:bg-green-200 transition-colors duration-200">
                      Memory Mgmt
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs hover:bg-green-200 transition-colors duration-200">
                      Debugging
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium">
                    Optimization
                  </span>
                  <i className="fas fa-arrow-right text-green-600 group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section
        id="achievements"
        className="px-4 md:px-6 py-12 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              Key <span className="text-purple-600">Achievements</span>
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Milestones and accomplishments in embedded systems development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <i className="fas fa-project-diagram text-lg md:text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                15+
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Embedded Projects Completed
              </p>
            </div>

            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <i className="fas fa-microchip text-lg md:text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                8
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Microcontroller Families Mastered
              </p>
            </div>

            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <i className="fas fa-award text-lg md:text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                95%
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Performance Optimization Rate
              </p>
            </div>

            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <i className="fas fa-users text-lg md:text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                3
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Team Collaborations
              </p>
            </div>
          </div>

          <div
            className="mt-12 md:mt-16 bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Professional Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-blue-600 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-600 text-sm md:text-base">
                      Expert in ARM Cortex and STM32 microcontroller programming
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-blue-600 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-600 text-sm md:text-base">
                      Specialized in real-time embedded system development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-blue-600 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-600 text-sm md:text-base">
                      Advanced debugging and performance optimization skills
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-purple-600 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-600 text-sm md:text-base">
                      Proficient in multiple communication protocols
                      implementation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-purple-600 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-600 text-sm md:text-base">
                      Experience with hardware design and PCB layout
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-purple-600 mt-1 mr-3 flex-shrink-0"></i>
                    <span className="text-gray-600 text-sm md:text-base">
                      Strong background in system integration and testing
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 md:px-6 py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Interested in collaborating on embedded systems projects or
              discussing technical solutions? Let's connect and explore
              opportunities together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div
              className="text-center p-4 md:p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-white text-sm md:text-base"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                Email
              </h3>
              <a
                href="mailto:ganeshwankhade8010@gmail.com"
                className="text-blue-600 hover:text-blue-800 text-sm md:text-base transition-colors duration-300"
              >
                ganeshwankhade8010@gmail.com
              </a>
            </div>

            <div
              className="text-center p-4 md:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-github text-white text-sm md:text-base"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                GitHub
              </h3>
              <a
                href="https://github.com/ganeshwankhade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 text-sm md:text-base transition-colors duration-300"
              >
                github.com/ganeshwankhade
              </a>
            </div>

            <div
              className="text-center p-4 md:p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-linkedin text-white text-sm md:text-base"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                LinkedIn
              </h3>
              <a
                href="https://linkedin.com/in/ganeshwankhade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 text-sm md:text-base transition-colors duration-300"
              >
                linkedin.com/in/ganeshwankhade
              </a>
            </div>
          </div>

          <div
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 md:p-8 text-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Let's Build Something Amazing
            </h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Whether you need embedded system development, hardware-software
              integration, or performance optimization, I'm here to help bring
              your ideas to life.
            </p>
            <a
              href="mailto:ganeshwankhade8010@gmail.com"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <div className="text-xl md:text-2xl font-bold text-blue-400 mb-4">
                Ganesh Wankhade
              </div>
              <p className="text-gray-400 mb-4 text-sm md:text-base">
                Embedded System Specialist passionate about creating innovative
                hardware-software solutions.
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a
                  href="https://linkedin.com/in/ganeshwankhade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/ganeshwankhade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="mailto:ganeshwankhade8010@gmail.com"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-bold mb-4">Expertise</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li className="hover:text-white transition-colors duration-300">
                  Embedded Programming
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  Microcontroller Systems
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  Hardware Integration
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  Performance Optimization
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-bold mb-4">Technologies</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li className="hover:text-white transition-colors duration-300">
                  ARM Cortex, STM32
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  C/C++, Assembly
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  Real-time Systems
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  Communication Protocols
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    Back to Aaryavarta
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
            <p>&copy; 2025 Ganesh Wankhade. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradientText {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-gradient-text {
          background: linear-gradient(-45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
          background-size: 400% 400%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientText 3s ease infinite;
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced transitions */
        * {
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
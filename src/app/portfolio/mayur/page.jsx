"use client";
import React from "react";

function MainComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [showContactModal, setShowContactModal] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 overflow-x-hidden">
      {/* Header with Back Link */}
      <header className="bg-white shadow-sm px-4 md:px-6 py-4 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/"
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all duration-300 hover:scale-105"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Aaryavarta
          </a>

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

          <div className="hidden md:block text-xl font-bold text-gray-800 animate-slide-in-left">
            Mayur Patil Portfolio
          </div>

          <div className="w-32 hidden md:block"></div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
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
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12 hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="flex-shrink-0 animate-fade-in-up">
                <img
                  src="/passphoto-new.png"
                  alt="Mayur Patil - Group Leader and IoT Developer"
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-blue-200 shadow-lg hover:scale-110 hover:border-blue-400 transition-all duration-300"
                />
              </div>
              <div
                className="flex-1 text-center md:text-left animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Mayur{" "}
                  <span className="text-blue-600 animate-gradient-text">
                    Patil
                  </span>
                </h1>
                <h2 className="text-lg md:text-xl lg:text-2xl text-blue-600 font-semibold mb-4">
                  Electronics & Telecommunication Engineer
                </h2>
                <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-6 max-w-3xl">
                  Electronics & Telecommunication Engineer with expertise in embedded systems, sensor interfacing, and IoT development. Proficient in Python, Embedded C, and real-time automation using Raspberry Pi and Arduino. Fast learner with national-level achievements and a drive for hardware innovation.
                </p>
                <div className="flex flex-col sm:flex-row md:flex-row md:items-center gap-4 sm:gap-6 md:gap-8 w-full justify-center sm:justify-start">
                  <a
                    href="/Mayur%20Patil_Resume%20Hardware.pdf"
                    download
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center w-full sm:w-auto md:w-auto"
                    style={{ minHeight: '44px', maxWidth: '220px' }}
                  >
                    <i className="fas fa-download mr-2"></i>
                    Download Resume
                  </a>
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="bg-white border border-blue-500 text-blue-600 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow flex items-center justify-center w-full sm:w-auto md:w-auto"
                    style={{ minHeight: '44px', maxWidth: '220px' }}
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Contact Me
                  </button>
                </div>
                {/* Contact Modal */}
                {showContactModal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 w-full max-w-md shadow-xl relative animate-scale-in">
                      <button
                        onClick={() => setShowContactModal(false)}
                        className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 text-xl font-bold focus:outline-none"
                        aria-label="Close"
                      >
                        &times;
                      </button>
                      <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">Contact Information</h3>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center text-gray-700 text-base">
                          <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
                          Nashik, Maharashtra
                        </div>
                        <div className="flex items-center text-gray-700 text-base">
                          <i className="fas fa-phone-alt text-blue-500 mr-2"></i>
                          +91-8767495255
                        </div>
                        <div className="flex items-center text-gray-700 text-base">
                          <i className="fas fa-envelope text-blue-500 mr-2"></i>
                          <span className="truncate">patilmayur0204@gmail.com</span>
                        </div>
                        <a href="https://www.linkedin.com/in/mayur-patil-0204" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline text-base">
                          <i className="fab fa-linkedin mr-2"></i>
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Technical <span className="text-blue-600">Skills</span>
            </h2>
            <p
              className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Comprehensive expertise across multiple technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Programming Languages */}
            <div
              className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 md:p-3 rounded-lg mr-3 md:mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <i className="fas fa-code text-blue-600 text-lg md:text-xl"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Programming Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-blue-200 transition-colors duration-200">Python</span>
                <span className="bg-blue-100 text-blue-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-blue-200 transition-colors duration-200">Embedded C</span>
                <span className="bg-blue-100 text-blue-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-blue-200 transition-colors duration-200">Java</span>
                <span className="bg-blue-100 text-blue-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-blue-200 transition-colors duration-200">PHP</span>
                <span className="bg-blue-100 text-blue-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-blue-200 transition-colors duration-200">JavaScript</span>
                <span className="bg-blue-100 text-blue-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-blue-200 transition-colors duration-200">SQL</span>
              </div>
            </div>

            {/* IoT & Embedded */}
            <div
              className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 md:p-3 rounded-lg mr-3 md:mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <i className="fas fa-microchip text-purple-600 text-lg md:text-xl"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  Embedded & Hardware
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-purple-200 transition-colors duration-200">
                  Raspberry Pi
                </span>
                <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-purple-200 transition-colors duration-200">
                  Arduino
                </span>
                <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-purple-200 transition-colors duration-200">
                  ESP32
                </span>
                <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-purple-200 transition-colors duration-200">
                  PCB Design
                </span>
                <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-purple-200 transition-colors duration-200">
                  UART
                </span>
                <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-purple-200 transition-colors duration-200">
                  SPI
                </span>
                <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-purple-200 transition-colors duration-200">
                  I2C
                </span>
                <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-purple-200 transition-colors duration-200">
                  ADC
                </span>
                <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-purple-200 transition-colors duration-200">
                  GPIO
                </span>
              </div>
            </div>

            {/* Protocols & Communication */}
            <div
              className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 md:p-3 rounded-lg mr-3 md:mr-4 group-hover:bg-green-200 transition-colors duration-300">
                  <i className="fas fa-network-wired text-green-600 text-lg md:text-xl"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  Protocols & Communication
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-green-200 transition-colors duration-200">
                  MQTT
                </span>
                <span className="bg-green-100 text-green-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-green-200 transition-colors duration-200">
                  HTTP/HTTPS
                </span>
                <span className="bg-green-100 text-green-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-green-200 transition-colors duration-200">
                  I2C
                </span>
                <span className="bg-green-100 text-green-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-green-200 transition-colors duration-200">
                  SPI
                </span>
                <span className="bg-green-100 text-green-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-green-200 transition-colors duration-200">
                  UART
                </span>
                <span className="bg-green-100 text-green-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-green-200 transition-colors duration-200">
                  WiFi
                </span>
                <span className="bg-green-100 text-green-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-green-200 transition-colors duration-200">
                  Bluetooth
                </span>
                <span className="bg-green-100 text-green-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-green-200 transition-colors duration-200">
                  LoRa
                </span>
              </div>
            </div>

            {/* Frameworks & Tools */}
            <div
              className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-2 md:p-3 rounded-lg mr-3 md:mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <i className="fas fa-tools text-orange-600 text-lg md:text-xl"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  Tools & Platforms
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-orange-200 transition-colors duration-200">
                  KiCAD
                </span>
                <span className="bg-orange-100 text-orange-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-orange-200 transition-colors duration-200">
                  Proteus
                </span>
                <span className="bg-orange-100 text-orange-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-orange-200 transition-colors duration-200">
                  Multisim
                </span>
                <span className="bg-orange-100 text-orange-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-orange-200 transition-colors duration-200">
                  Visual Studio Code
                </span>
                <span className="bg-orange-100 text-orange-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-orange-200 transition-colors duration-200">
                  Circuit Designer
                </span>
              </div>
            </div>

            {/* Leadership & Soft Skills */}
            <div
              className="bg-white rounded-xl shadow-lg p-4 md:p-6 md:col-span-2 lg:col-span-1 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 md:p-3 rounded-lg mr-3 md:mr-4 group-hover:bg-red-200 transition-colors duration-300">
                  <i className="fas fa-users text-red-600 text-lg md:text-xl"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  Soft Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 text-red-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-red-200 transition-colors duration-200">
                  Communication
                </span>
                <span className="bg-red-100 text-red-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-red-200 transition-colors duration-200">
                  Teamwork
                </span>
                <span className="bg-red-100 text-red-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-red-200 transition-colors duration-200">
                  Analytical Thinking
                </span>
                <span className="bg-red-100 text-red-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-red-200 transition-colors duration-200">
                  Leadership
                </span>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Languages Spoken:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">English</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">Hindi</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">Marathi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Projects Section */}
      <section id="projects" className="px-4 sm:px-6 md:px-8 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Key <span className="text-blue-600">Projects</span>
            </h2>
            <p
              className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Innovative solutions that demonstrate technical expertise and
              leadership
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {/* Project 1 */}
            <div
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                  <div className="lg:w-1/3">
                    <div className="h-40 md:h-48 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <img
                    src="/a-photograph-of-a-sleek-futuristic-vehic_NYciPrjhTYWc8g3SJsMKSw_2Z81PH09QcOM-JbI5NVeTg.jpeg"
                    alt="Advance Vehicle Safety System"
                    className="object-cover w-full max-w-full h-auto rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      Advanced Vehicle Safety System (AVSS)
                      <span className="ml-2 inline-block bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full align-middle">Team Project</span>
                    </h3>
                    <p className="text-gray-500 text-xs mb-2">This project is a collaborative effort by Mayur, Ganesh, and Yash.</p>
                    <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      Led the development of an intelligent automotive safety
                      system featuring real-time collision detection, lane
                      departure warnings, and emergency response capabilities.
                      The system integrates multiple IoT sensors with AI-powered
                      decision making to enhance vehicle safety and reduce
                      accident rates.
                    </p>
                    <div className="mb-4 md:mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
                        Key Features:
                      </h4>
                      <ul className="text-gray-600 space-y-1 text-xs md:text-sm">
                        <li>• Safety system using Raspberry Pi with fingerprint authentication, alcohol sensing, drowsiness detection, and accident alerts</li>
                        <li>• Sensors integrated using UART, SPI, and I2C</li>
                        <li>• Programmed using Embedded C and Python</li>
                      </ul>
                    </div>
                    <div className="mb-4 md:mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors duration-200">
                          Arduino
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors duration-200">
                          ESP32
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors duration-200">
                          OpenCV
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors duration-200">
                          TensorFlow Lite
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors duration-200">
                          MQTT
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors duration-200">
                          React Native
                        </span>
                      </div>
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
              </div>
            </div>

            {/* Project 2 */}
            <div
              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                  <div className="lg:w-1/3">
                    <div className="h-40 md:h-48 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <img
                    src="/a-photograph-of-a-sleek-modern-hostel-lo_jG8lIKpjQySnwZzrVmHeog_HgtE8COZRfSYk0ybkGMHdw.jpeg"
                    alt="IoT Based Hostel Access and Attendance Monitoring"
                    className="object-cover w-full max-w-full h-auto rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      IoT Based Hostel Access & Attendance System
                    </h3>
                    <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      Designed and implemented a comprehensive hostel management
                      system using RFID technology for access control and
                      automated attendance tracking. The system provides
                      real-time monitoring capabilities and generates detailed
                      reports for hostel administrators.
                    </p>
                    <div className="mb-4 md:mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
                        Key Features:
                      </h4>
                      <ul className="text-gray-600 space-y-1 text-xs md:text-sm">
                        <li>• Secure entry and automatic attendance logging using RFID</li>
                        <li>• Remote logging and network-based backend</li>
                      </ul>
                    </div>
                    <div className="mb-4 md:mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                          Raspberry Pi
                        </span>
                        <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                          RFID RC522
                        </span>
                        <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                          Python
                        </span>
                        <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                          MySQL
                        </span>
                        <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                          Flask
                        </span>
                        <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                          Bootstrap
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="text-purple-600 font-medium hover:text-purple-800 flex items-center justify-center sm:justify-start transition-all duration-300 hover:translate-x-2">
                        <i className="fab fa-github mr-2"></i>
                        View Code
                      </button>
                      <button className="text-purple-600 font-medium hover:text-purple-800 flex items-center justify-center sm:justify-start transition-all duration-300 hover:translate-x-2">
                        <i className="fas fa-external-link-alt mr-2"></i>
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div
              className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                  <div className="lg:w-1/3">
                    <div className="h-40 md:h-48 bg-gradient-to-br from-gray-400 to-blue-500 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <img
                    src="/a-photograph-of-a-sleek-black-ai-based-d_ZbCeUcAaT0qMinjMNOCGJg_Z5SFuRpQRr2Jbftu5NMTRA.jpeg"
                    alt="AI-based Drone for Disaster Conditions"
                    className="object-cover w-full max-w-full h-auto rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      AI-Based Drone for Human Detection & Payload Drop
                    </h3>
                    <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      Developed an autonomous drone system equipped with AI
                      capabilities for disaster response operations. The drone
                      features thermal imaging, object detection, and autonomous
                      navigation to assist in search and rescue missions during
                      emergency situations.
                    </p>
                    <div className="mb-4 md:mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
                        Key Features:
                      </h4>
                      <ul className="text-gray-600 space-y-1 text-xs md:text-sm">
                        <li>• Drone with OpenCV-based human detection and payload drop feature</li>
                        <li>• Won college Hackathon and presented at Avishkar Zonal Competition</li>
                      </ul>
                    </div>
                    <div className="mb-4 md:mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200">
                          Pixhawk
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200">
                          Raspberry Pi 4
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200">
                          OpenCV
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200">
                          YOLO
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200">
                          MAVLink
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200">
                          ROS
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="text-gray-600 font-medium hover:text-gray-800 flex items-center justify-center sm:justify-start transition-all duration-300 hover:translate-x-2">
                        <i className="fab fa-github mr-2"></i>
                        View Code
                      </button>
                      <button className="text-gray-600 font-medium hover:text-gray-800 flex items-center justify-center sm:justify-start transition-all duration-300 hover:translate-x-2">
                        <i className="fas fa-external-link-alt mr-2"></i>
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Achievements & <span className="text-blue-600">Recognition</span>
            </h2>
            <p
              className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Recognition for technical excellence and leadership contributions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Achievement 1 */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="bg-yellow-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-trophy text-yellow-600 text-lg md:text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                National YUVA Conclave (Top 5 in India)
              </h3>
              <p className="text-gray-600 text-sm md:text-base">Represented AVSS project</p>
            </div>
            {/* Achievement 2 */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-user-tie text-blue-600 text-lg md:text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Campus Ambassador for KPIT
              </h3>
              <p className="text-gray-600 text-sm md:text-base">Sandip Institute of Engineering and Management</p>
            </div>
            {/* Achievement 3 */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="bg-purple-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-user-graduate text-purple-600 text-lg md:text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                Academic Secretary (TE Year)
              </h3>
              <p className="text-gray-600 text-sm md:text-base">Sandip Institute of Engineering and Management</p>
            </div>
            {/* Achievement 4 */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="bg-green-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-award text-green-600 text-lg md:text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                University Level AVISHKAR 2024-25
              </h3>
              <p className="text-gray-600 text-sm md:text-base">Represented AVSS project</p>
            </div>
            {/* Achievement 5 */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="bg-pink-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-users text-pink-600 text-lg md:text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                Event Organizer
              </h3>
              <p className="text-gray-600 text-sm md:text-base">Technical & non-technical college events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-4 sm:px-6 md:px-8 py-12 md:py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Let's Build Something Amazing Together
          </h2>
          <p
            className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Ready to collaborate on innovative IoT solutions or discuss exciting
            project opportunities? I'm always open to connecting with fellow
            technology enthusiasts and potential collaborators.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("contact-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <i className="fas fa-envelope mr-2"></i>
              Get In Touch
            </button>
            <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
              <i className="fas fa-calendar mr-2"></i>
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section
        id="contact-section"
        className="px-4 sm:px-6 md:px-8 py-12 md:py-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Interested in collaborating on IoT and embedded systems projects or
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
                href="mailto:patilmayur0204@gmail.com"
                className="text-blue-600 hover:text-blue-800 text-sm md:text-base transition-colors duration-300"
              >
                patilmayur0204@gmail.com
              </a>
            </div>

            <div
              className="text-center p-4 md:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-white text-sm md:text-base"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                Phone
              </h3>
              <a
                href="tel:+918767495255"
                className="text-purple-600 hover:text-purple-800 text-sm md:text-base transition-colors duration-300"
              >
                +91-8767495255
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
                href="https://www.linkedin.com/in/mayur-patil-0204"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 text-sm md:text-base transition-colors duration-300"
              >
                linkedin.com/in/mayur-patil-0204
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
              Whether you need IoT development, embedded system solutions, or
              innovative hardware-software integration, I'm here to help bring
              your ideas to life.
            </p>
            <a
              href="mailto:patilmayur0204@gmail.com"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 md:px-6 py-6 md:py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            &copy; 2025 Mayur Patil. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs md:text-sm">
            Passionate about creating innovative IoT solutions that make a
            difference
          </p>
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
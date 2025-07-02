"use client";
import React from "react";

function MainComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm px-4 md:px-6 py-4 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/"
            className="flex items-center text-orange-600 hover:text-orange-800 font-medium transition-all duration-300 hover:scale-105"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Aaryavarta
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-orange-600 transition-all duration-300 hover:scale-110"
          >
            <i
              className={`fas ${
                isMobileMenuOpen ? "fa-times" : "fa-bars"
              } text-xl transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
            ></i>
          </button>

          <h1 className="hidden md:block text-xl md:text-2xl font-bold text-gray-900 animate-slide-in-left">
            Yash Dhake - Portfolio
          </h1>
          <div className="w-32 hidden md:block"></div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#competencies"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-orange-600 transition-all duration-300 hover:translate-x-2"
              >
                Competencies
              </a>
              <a
                href="#projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-orange-600 transition-all duration-300 hover:translate-x-2"
              >
                Projects
              </a>
              <a
                href="#documentation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-orange-600 transition-all duration-300 hover:translate-x-2"
              >
                Documentation
              </a>
              <a
                href="#achievements"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-orange-600 transition-all duration-300 hover:translate-x-2"
              >
                Achievements
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Profile Section */}
      <section className="px-4 md:px-6 py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <img
              src="/yash.jpg"
              alt="Yash Dhake"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto mb-6 border-4 border-orange-200 hover:scale-110 hover:border-orange-400 transition-all duration-300 group"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Yash{" "}
              <span className="text-orange-600 animate-gradient-text">
                Dhake
              </span>
            </h2>
            <p className="text-lg md:text-xl text-orange-600 font-medium mb-6">
              Embedded System Developer | Technical Documentation Specialist
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-lg">
              A versatile developer with deep expertise in embedded systems and
              a passion for creating comprehensive technical documentation. I
              bridge the gap between complex technical concepts and clear,
              actionable documentation, ensuring project clarity and
              maintainability across development teams.
            </p>
          </div>

          {/* Contact Links */}
          <div
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="mailto:yash.dhake@example.com"
              className="flex items-center justify-center bg-orange-100 text-orange-700 px-4 py-2 rounded-lg hover:bg-orange-200 hover:scale-105 transition-all duration-300"
            >
              <i className="fas fa-envelope mr-2"></i>
              Email
            </a>
            <a
              href="#"
              className="flex items-center justify-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300"
            >
              <i className="fab fa-github mr-2"></i>
              GitHub
            </a>
            <a
              href="#"
              className="flex items-center justify-center bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 hover:scale-105 transition-all duration-300"
            >
              <i className="fab fa-linkedin mr-2"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section
        id="competencies"
        className="px-4 md:px-6 py-12 md:py-16 bg-orange-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 animate-fade-in-up">
            Core <span className="text-orange-600">Competencies</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Embedded Systems */}
            <div
              className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <i className="fas fa-microchip text-orange-600 text-lg md:text-xl group-hover:scale-110 transition-transform duration-300"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  Embedded Systems
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  C/C++ Programming
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  Microcontroller Programming
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  Real-time Systems
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  Hardware Integration
                </li>
              </ul>
            </div>

            {/* Technical Documentation */}
            <div
              className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <i className="fas fa-file-alt text-orange-600 text-lg md:text-xl group-hover:scale-110 transition-transform duration-300"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  Technical Documentation
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  Technical Writing
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  API Documentation
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  User Manuals
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  Process Documentation
                </li>
              </ul>
            </div>

            {/* Documentation Tools */}
            <div
              className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <i className="fas fa-tools text-orange-600 text-lg md:text-xl group-hover:scale-110 transition-transform duration-300"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  Documentation Tools
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  Markdown & LaTeX
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  Confluence & GitBook
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  Sphinx & Doxygen
                </li>
              </ul>
            </div>

            {/* Quality Assurance */}
            <div
              className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <i className="fas fa-shield-alt text-orange-600 text-lg md:text-xl group-hover:scale-110 transition-transform duration-300"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  Quality Assurance
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  Code Review
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  Testing Strategies
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  Quality Standards
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  Process Improvement
                </li>
              </ul>
            </div>

            {/* Development Tools */}
            <div
              className="bg-white rounded-lg shadow-lg p-4 md:p-6 md:col-span-2 lg:col-span-1 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <i className="fas fa-code text-orange-600 text-lg md:text-xl group-hover:scale-110 transition-transform duration-300"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  Development Tools
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  Git & JIRA
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  Visual Studio Code
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  Embedded IDEs
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <i className="fas fa-check text-orange-500 mr-2 text-sm"></i>
                  Testing Frameworks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="px-4 md:px-6 py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 animate-fade-in-up">
            Featured <span className="text-orange-600">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Project 1 */}
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
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
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors duration-300">
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
              className="bg-orange-50 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="h-40 md:h-48 bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <i className="fas fa-microchip text-4xl md:text-6xl text-white group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  Embedded System Development
                </h3>
                <p className="text-orange-600 font-medium mb-3 text-sm md:text-base">
                  2022-2023
                </p>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Embedded Systems Developer focusing on microcontroller
                  programming, real-time systems, and hardware-software
                  integration projects.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs hover:bg-orange-200 transition-colors duration-200">
                    C/C++
                  </span>
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs hover:bg-orange-200 transition-colors duration-200">
                    Microcontrollers
                  </span>
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs hover:bg-orange-200 transition-colors duration-200">
                    Real-time
                  </span>
                </div>
                <button className="text-orange-600 font-medium hover:text-orange-800 transition-all duration-300 group-hover:translate-x-2">
                  View Details →
                </button>
              </div>
            </div>

            {/* Project 3 */}
            <div
              className="bg-orange-50 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="h-40 md:h-48 bg-gradient-to-br from-orange-500 to-red-400 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <i className="fas fa-shield-alt text-4xl md:text-6xl text-white group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  Code Review & Quality Assurance
                </h3>
                <p className="text-orange-600 font-medium mb-3 text-sm md:text-base">
                  2021-Present
                </p>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Quality Assurance Lead implementing comprehensive code review
                  processes, testing strategies, and quality standards across
                  development teams.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs hover:bg-orange-200 transition-colors duration-200">
                    Code Review
                  </span>
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs hover:bg-orange-200 transition-colors duration-200">
                    Testing
                  </span>
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs hover:bg-orange-200 transition-colors duration-200">
                    Quality
                  </span>
                </div>
                <button className="text-orange-600 font-medium hover:text-orange-800 transition-all duration-300 group-hover:translate-x-2">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Portfolio */}
      <section
        id="documentation"
        className="px-4 md:px-6 py-12 md:py-16 bg-orange-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 animate-fade-in-up">
            Documentation <span className="text-orange-600">Portfolio</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Documentation 1 */}
            <div
              className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-orange-200 transition-colors duration-300">
                <i className="fas fa-sitemap text-orange-600 text-lg md:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-center mb-3 group-hover:text-orange-600 transition-colors duration-300">
                Embedded System Architecture Guide
              </h3>
              <p className="text-gray-600 text-center mb-4 text-sm md:text-base">
                Comprehensive guide covering embedded system design patterns,
                architecture principles, and implementation best practices.
              </p>
              <div className="text-center">
                <button className="text-orange-600 font-medium hover:text-orange-800 transition-all duration-300 group-hover:translate-x-2">
                  View Documentation →
                </button>
              </div>
            </div>

            {/* Documentation 2 */}
            <div
              className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-orange-200 transition-colors duration-300">
                <i className="fas fa-code text-orange-600 text-lg md:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-center mb-3 group-hover:text-orange-600 transition-colors duration-300">
                API Documentation Framework
              </h3>
              <p className="text-gray-600 text-center mb-4 text-sm md:text-base">
                Standardized framework for creating consistent, comprehensive
                API documentation with automated generation capabilities.
              </p>
              <div className="text-center">
                <button className="text-orange-600 font-medium hover:text-orange-800 transition-all duration-300 group-hover:translate-x-2">
                  View Documentation →
                </button>
              </div>
            </div>

            {/* Documentation 3 */}
            <div
              className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-orange-200 transition-colors duration-300">
                <i className="fas fa-clipboard-check text-orange-600 text-lg md:text-2xl group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-center mb-3 group-hover:text-orange-600 transition-colors duration-300">
                Code Review Checklist
              </h3>
              <p className="text-gray-600 text-center mb-4 text-sm md:text-base">
                Detailed checklist and guidelines for conducting thorough code
                reviews, ensuring code quality and maintainability standards.
              </p>
              <div className="text-center">
                <button className="text-orange-600 font-medium hover:text-orange-800 transition-all duration-300 group-hover:translate-x-2">
                  View Documentation →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section
        id="achievements"
        className="px-4 md:px-6 py-12 md:py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 animate-fade-in-up">
            Key <span className="text-orange-600">Achievements</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Achievement 1 */}
            <div
              className="flex items-start hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 hover:bg-orange-200 transition-colors duration-300">
                <i className="fas fa-trophy text-orange-600 hover:scale-110 transition-transform duration-300"></i>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Documentation Excellence Award
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Recognized for creating comprehensive technical documentation
                  that reduced onboarding time by 60% and improved team
                  productivity across multiple projects.
                </p>
              </div>
            </div>

            {/* Achievement 2 */}
            <div
              className="flex items-start hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 hover:bg-orange-200 transition-colors duration-300">
                <i className="fas fa-medal text-orange-600 hover:scale-110 transition-transform duration-300"></i>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Code Review Champion
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Implemented systematic code review processes that improved
                  code quality metrics by 45% and reduced production bugs by 30%
                  across development teams.
                </p>
              </div>
            </div>

            {/* Achievement 3 */}
            <div
              className="flex items-start hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 hover:bg-orange-200 transition-colors duration-300">
                <i className="fas fa-star text-orange-600 hover:scale-110 transition-transform duration-300"></i>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Project Documentation Lead
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Led documentation efforts for 15+ embedded system projects,
                  ensuring 100% documentation coverage and establishing
                  documentation standards.
                </p>
              </div>
            </div>

            {/* Achievement 4 */}
            <div
              className="flex items-start hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 hover:bg-orange-200 transition-colors duration-300">
                <i className="fas fa-award text-orange-600 hover:scale-110 transition-transform duration-300"></i>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Quality Standards Implementation
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Developed and implemented quality assurance standards that
                  became the organization-wide benchmark, improving overall
                  project delivery quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 md:px-6 py-12 md:py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Let's Document Success Together
          </h2>
          <p
            className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Ready to elevate your project documentation and code quality? Let's
            collaborate to create clear, comprehensive solutions.
          </p>
          <a
            href="mailto:yash.dhake@example.com"
            className="inline-block bg-white text-orange-600 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 md:px-6 py-6 md:py-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="mailto:yash.dhake@example.com"
              className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            &copy; 2025 Yash Dhake. All rights reserved.
          </p>
        </div>
      </footer>

      {/* CSS Animations */}
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
          background: linear-gradient(-45deg, #ea580c, #dc2626, #f97316, #ea580c);
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
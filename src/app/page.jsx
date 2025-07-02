"use client";
import React from "react";

function MainComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [contactForm, setContactForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState("");
  const [showSuccessPopup, setShowSuccessPopup] = React.useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    try {
      const formData = new FormData();
      formData.append("name", contactForm.name);
      formData.append("email", contactForm.email);
      formData.append("subject", contactForm.subject);
      formData.append("message", contactForm.message);
      // Disable FormSubmit's default redirect
      formData.append("_redirect", "false");
      formData.append("_captcha", "false");

      const response = await fetch("https://formsubmit.co/ajax/patilmayur987654321@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if (result.success === "true" || result.success === true) {
        setShowSuccessPopup(true);
        setContactForm({ name: "", email: "", subject: "", message: "" });
        setSubmitMessage("");
        setTimeout(() => setShowSuccessPopup(false), 5000);
      } else {
        setSubmitMessage(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] animate-fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center animate-scale-in">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-check text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for contacting us. We'll get back to you soon!
            </p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Fixed Navigation with Hamburger Menu */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm px-4 sm:px-6 lg:px-8 py-3 sm:py-4 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-600 animate-slide-in-left">
            Aaryavarta
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 2xl:space-x-10">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group text-sm xl:text-base 2xl:text-lg"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("projects-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group text-sm xl:text-base 2xl:text-lg"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("team-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group text-sm xl:text-base 2xl:text-lg"
            >
              Members
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group text-sm xl:text-base 2xl:text-lg"
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 p-2"
          >
            <i
              className={`fas ${
                isMobileMenuOpen ? "fa-times" : "fa-bars"
              } text-lg sm:text-xl transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
            ></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 sm:space-y-4 pt-4">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 text-left hover:translate-x-2 text-sm sm:text-base"
              >
                Home
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("projects-section")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 text-left hover:translate-x-2 text-sm sm:text-base"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("team-section")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 text-left hover:translate-x-2 text-sm sm:text-base"
              >
                Members
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("contact-section")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 text-left hover:translate-x-2 text-sm sm:text-base"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced for all devices */}
      <section className="min-h-[80vh] sm:min-h-[70vh] flex flex-col justify-center px-4 py-10 sm:px-8 sm:py-16 lg:px-12 lg:py-24 pt-24 sm:pt-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl sm:text-4xl font-bold text-gray-900 mb-8 animate-fade-in-up">
            Welcome to <span className="text-blue-600 animate-gradient-text">Aaryavarta</span>
          </h1>
          <p className="text-xl sm:text-lg text-gray-600 italic mb-4 animate-fade-in-up px-2" style={{ animationDelay: "0.2s" }}>
            "Dream is not that which you see while sleeping, it is something that does not let you sleep."
          </p>
          <p className="text-blue-600 font-medium mb-8 text-xl sm:text-lg animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            — Dr. A.P.J. Abdul Kalam
          </p>
          <p className="text-lg sm:text-base text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-up px-2" style={{ animationDelay: "0.6s" }}>
            Showcasing innovative projects and the brilliant minds behind cutting-edge technology solutions.
          </p>
          <button
            onClick={() => document.getElementById("projects-section").scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-xl sm:text-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            Explore Our Projects
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects-section"
        className="px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in-up">
            Our <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto animate-fade-in-up px-2 text-lg" style={{ animationDelay: "0.2s" }}>
            Discover our innovative solutions in embedded systems, IoT technology, and AI applications
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in-up hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/a-photograph-of-a-sleek-futuristic-vehic_NYciPrjhTYWc8g3SJsMKSw_2Z81PH09QcOM-JbI5NVeTg.jpeg"
                    alt="Advance Vehicle Safety System"
                    className="object-cover w-full h-full max-h-56 sm:max-h-64 md:max-h-72 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Advance Vehicle Safety System
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-5 text-sm sm:text-base md:text-lg lg:text-xl">
                  Intelligent automotive safety system with real-time collision
                  detection, lane departure warnings, and emergency response
                  capabilities.
                </p>
                <div className="mb-4 sm:mb-5">
                  <p className="text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm hover:bg-blue-200 transition-colors duration-200">
                      IoT Sensors
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm hover:bg-blue-200 transition-colors duration-200">
                      AI/ML
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm hover:bg-blue-200 transition-colors duration-200">
                      Real-time Processing
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm hover:bg-blue-200 transition-colors duration-200">
                      Emergency Response
                    </span>
                  </div>
                </div>
                <a
                  href="/projects/vehicle-safety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:text-blue-800 transition-all duration-300 group-hover:translate-x-2 flex items-center text-base sm:text-lg"
                >
                  View Project
                  <i className="fas fa-external-link-alt ml-2 text-xs sm:text-sm"></i>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in-up hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 bg-gradient-to-br from-purple-400 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/a-photograph-of-a-sleek-modern-hostel-lo_jG8lIKpjQySnwZzrVmHeog_HgtE8COZRfSYk0ybkGMHdw.jpeg"
                    alt="IoT Based Hostel Access and Attendance Monitoring"
                    className="object-cover w-full h-full max-h-48 sm:max-h-56 md:max-h-64 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  IoT Based Hostel Access and Attendance Monitoring
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base lg:text-lg">
                  Smart hostel management system with RFID-based access control,
                  automated attendance tracking, and real-time monitoring.
                </p>
                <div className="mb-3 sm:mb-4">
                  <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <span className="bg-purple-100 text-purple-800 px-1 sm:px-2 py-1 rounded text-xs hover:bg-purple-200 transition-colors duration-200">
                      RFID Technology
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-1 sm:px-2 py-1 rounded text-xs hover:bg-purple-200 transition-colors duration-200">
                      Mobile App
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-1 sm:px-2 py-1 rounded text-xs hover:bg-purple-200 transition-colors duration-200">
                      Real-time Monitoring
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-1 sm:px-2 py-1 rounded text-xs hover:bg-purple-200 transition-colors duration-200">
                      Access Control
                    </span>
                  </div>
                </div>
                <a
                  href="/projects/hostel-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-medium hover:text-purple-800 transition-all duration-300 group-hover:translate-x-2 flex items-center text-sm sm:text-base"
                >
                  View Project
                  <i className="fas fa-external-link-alt ml-2 text-xs sm:text-sm"></i>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in-up hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 bg-gradient-to-br from-gray-400 to-blue-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/a-photograph-of-a-sleek-black-ai-based-d_ZbCeUcAaT0qMinjMNOCGJg_Z5SFuRpQRr2Jbftu5NMTRA.jpeg"
                    alt="AI-based Drone for Disaster Conditions"
                    className="object-cover w-full h-full max-h-48 sm:max-h-56 md:max-h-64 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  AI-based Drone for Disaster Conditions
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base lg:text-lg">
                  Autonomous drone equipped with AI for disaster response
                  operations, featuring thermal imaging and emergency
                  capabilities.
                </p>
                <div className="mb-3 sm:mb-4">
                  <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <span className="bg-gray-100 text-gray-800 px-1 sm:px-2 py-1 rounded text-xs hover:bg-gray-200 transition-colors duration-200">
                      Autonomous Flight
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-1 sm:px-2 py-1 rounded text-xs hover:bg-gray-200 transition-colors duration-200">
                      Thermal Imaging
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-1 sm:px-2 py-1 rounded text-xs hover:bg-gray-200 transition-colors duration-200">
                      AI Detection
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-1 sm:px-2 py-1 rounded text-xs hover:bg-gray-200 transition-colors duration-200">
                      Emergency Response
                    </span>
                  </div>
                </div>
                <a
                  href="/projects/ai-drone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 font-medium hover:text-gray-800 transition-all duration-300 group-hover:translate-x-2 flex items-center text-sm sm:text-base"
                >
                  View Project
                  <i className="fas fa-external-link-alt ml-2 text-xs sm:text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Updated for single row on desktop */}
      <section
        id="team-section"
        className="px-4 py-12 sm:px-8 sm:py-16 bg-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold animate-fade-in-up">
              Our <span className="text-purple-600">Team</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto animate-fade-in-up px-4 text-lg" style={{ animationDelay: "0.2s" }}>
              Meet the brilliant minds driving innovation at Aaryavarta
            </p>
          </div>

          {/* Team Members Grid - Single row for desktop, stacked for mobile */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 - Mayur Patil */}
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden p-8 text-center animate-fade-in-up hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="mb-4 md:mb-6">
                <img
                  src="/passphoto-new.png"
                  alt="Mayur Patil"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-blue-200 mx-auto group-hover:border-blue-400 transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Mayur Patil
                </h3>
                <p className="text-purple-600 font-medium mb-3 md:mb-4 text-sm md:text-base">
                  Group Leader | Embedded & IoT Developer
                </p>
                <p className="text-gray-600 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                  Passionate about creating innovative IoT solutions and leading
                  development teams to build cutting-edge embedded systems.
                </p>

                <div className="mb-4 md:mb-6">
                  <p className="text-xs md:text-sm font-medium text-gray-700 mb-2 md:mb-3">
                    Skills:
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                      IoT Development
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                      Embedded Systems
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                      Team Leadership
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                      System Architecture
                    </span>
                  </div>
                </div>

                <a
                  href="/portfolio/mayur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-medium hover:text-purple-800 transition-all duration-300 flex items-center justify-center text-sm md:text-base group-hover:translate-y-1"
                >
                  View Portfolio
                  <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
              </div>
            </div>

            {/* Team Member 2 - Ganesh Wankhade */}
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden p-8 text-center animate-fade-in-up hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="mb-4 md:mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center border-4 border-purple-200 mx-auto group-hover:border-purple-400 transition-all duration-300 group-hover:scale-110">
                  <i className="fas fa-user text-2xl md:text-3xl text-white"></i>
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  Ganesh Wankhade
                </h3>
                <p className="text-purple-600 font-medium mb-3 md:mb-4 text-sm md:text-base">
                  Embedded System Specialist
                </p>
                <p className="text-gray-600 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                  Expert in embedded system design and implementation with focus
                  on hardware-software integration and optimization.
                </p>

                <div className="mb-4 md:mb-6">
                  <p className="text-xs md:text-sm font-medium text-gray-700 mb-2 md:mb-3">
                    Skills:
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                      Embedded Programming
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                      Hardware Design
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                      System Integration
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                      Performance Optimization
                    </span>
                  </div>
                </div>

                <a
                  href="/portfolio/ganesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-medium hover:text-purple-800 transition-all duration-300 flex items-center justify-center text-sm md:text-base group-hover:translate-y-1"
                >
                  View Portfolio
                  <i className="fas fa-external-link-alt ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
              </div>
            </div>

            {/* Team Member 3 - Yash Dhake */}
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden p-8 text-center animate-fade-in-up hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="mb-4 md:mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center border-4 border-blue-200 mx-auto group-hover:border-blue-400 transition-all duration-300 group-hover:scale-110">
                  <i className="fas fa-user text-2xl md:text-3xl text-white"></i>
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Yash Dhake
                </h3>
                <p className="text-purple-600 font-medium mb-3 md:mb-4 text-sm md:text-base">
                  Embedded System | Document Maker
                </p>
                <p className="text-gray-600 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                  Specialized in embedded systems development and technical
                  documentation, ensuring project clarity and maintainability.
                </p>

                <div className="mb-4 md:mb-6">
                  <p className="text-xs md:text-sm font-medium text-gray-700 mb-2 md:mb-3">
                    Skills:
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                      Embedded Systems
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                      Technical Writing
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                      Documentation
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200">
                      Code Review
                    </span>
                  </div>
                </div>

                <a
                  href="/portfolio/yash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-medium hover:text-purple-800 transition-all duration-300 flex items-center justify-center text-sm md:text-base group-hover:translate-y-1"
                >
                  View Portfolio
                  <i className="fas fa-external-link-alt ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-section"
        className="px-4 py-12 sm:px-8 sm:py-16 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold animate-fade-in-up">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto animate-fade-in-up px-4 text-lg" style={{ animationDelay: "0.2s" }}>
              Ready to collaborate or learn more about our projects? Send us a message!
            </p>
            <p className="text-sm text-gray-500 mt-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Messages will be sent to: patilmayur987654321@gmail.com
            </p>
          </div>

          <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <form
              onSubmit={handleContactSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              {submitMessage && (
                <div className="text-red-600 text-sm text-center animate-fade-in">
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <div className="text-xl md:text-2xl font-bold text-blue-400 mb-4">
                Aaryavarta
              </div>
              <p className="text-gray-400 mb-4 text-sm md:text-base">
                Innovating the future through cutting-edge technology solutions
                in IoT, AI, and embedded systems.
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-bold mb-4">Projects</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    Vehicle Safety System
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    Hostel Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    Disaster Response Drone
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>contact@aaryavarta.com</li>
                <li>+91 98765 43210</li>
                <li>Bangalore, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
            <p>&copy; 2025 Aaryavarta. All rights reserved.</p>
          </div>
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        @keyframes pulseSlow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
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

        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }

        /* Smooth scrolling for the whole page */
        html {
          scroll-behavior: smooth;
        }

        /* Custom hover effects */
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }

        .hover\\:scale-110:hover {
          transform: scale(1.1);
        }

        .hover\\:scale-125:hover {
          transform: scale(1.25);
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
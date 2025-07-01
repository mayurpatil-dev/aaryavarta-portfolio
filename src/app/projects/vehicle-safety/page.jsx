"use client";
import React from "react";

function MainComponent() {
  const [activeSection, setActiveSection] = React.useState("overview");
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    { id: "overview", title: "Overview", icon: "fas fa-info-circle" },
    { id: "features", title: "Features", icon: "fas fa-cogs" },
    { id: "tech-stack", title: "Technology", icon: "fas fa-code" },
    { id: "implementation", title: "Implementation", icon: "fas fa-wrench" },
    { id: "timeline", title: "Timeline", icon: "fas fa-calendar" },
    { id: "team", title: "Team", icon: "fas fa-users" },
    { id: "results", title: "Results", icon: "fas fa-trophy" },
    { id: "future", title: "Future Plans", icon: "fas fa-rocket" },
  ];

  const techStack = [
    { name: "Python", icon: "fab fa-python", color: "text-yellow-500" },
    { name: "OpenCV", icon: "fas fa-eye", color: "text-green-500" },
    { name: "TensorFlow", icon: "fas fa-brain", color: "text-orange-500" },
    {
      name: "Raspberry Pi",
      icon: "fab fa-raspberry-pi",
      color: "text-red-500",
    },
    { name: "Arduino", icon: "fas fa-microchip", color: "text-blue-500" },
    {
      name: "IoT Sensors",
      icon: "fas fa-satellite-dish",
      color: "text-purple-500",
    },
  ];

  const features = [
    {
      title: "Collision Detection",
      description:
        "Real-time object detection and collision prediction using computer vision",
      icon: "fas fa-exclamation-triangle",
    },
    {
      title: "Lane Departure Warning",
      description: "Advanced lane detection with audio and visual alerts",
      icon: "fas fa-road",
    },
    {
      title: "Drowsiness Detection",
      description: "Driver fatigue monitoring using facial recognition",
      icon: "fas fa-bed",
    },
    {
      title: "Speed Monitoring",
      description: "GPS-based speed tracking with customizable limits",
      icon: "fas fa-tachometer-alt",
    },
    {
      title: "Emergency Response",
      description: "Automatic emergency contact and location sharing",
      icon: "fas fa-ambulance",
    },
    {
      title: "Data Analytics",
      description: "Comprehensive driving behavior analysis and reporting",
      icon: "fas fa-chart-line",
    },
  ];

  const timeline = [
    { phase: "Research & Planning", duration: "2 weeks", status: "completed" },
    { phase: "Hardware Setup", duration: "1 week", status: "completed" },
    {
      phase: "Computer Vision Development",
      duration: "3 weeks",
      status: "completed",
    },
    { phase: "IoT Integration", duration: "2 weeks", status: "completed" },
    {
      phase: "Testing & Optimization",
      duration: "2 weeks",
      status: "completed",
    },
    { phase: "Documentation", duration: "1 week", status: "completed" },
  ];

  const teamMembers = [
    {
      name: "Mayur Patil",
      role: "Project Lead & AI Developer",
      avatar: "M",
    },
    { name: "Ganesh Wankhade", role: "Hardware Engineer", avatar: "G" },
    { name: "Yash Dhake", role: "IoT Specialist", avatar: "Y" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 font-inter">
      <div className="container mx-auto px-4 py-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <button
                onClick={() => window.location.href = '/'}
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-4 group"
              >
                <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
                Back to Portfolio
              </button>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Advanced Vehicle Safety System
              </h1>
              <p className="text-xl text-blue-200">
                AI-Powered Real-time Safety Monitoring & Alert System
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
                <i className="fas fa-check-circle mr-2"></i>
                Completed
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Navigation
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-lg transition-all ${
                        activeSection === section.id
                          ? "bg-blue-500 text-white"
                          : "text-blue-200 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <i className={`${section.icon} mr-3`}></i>
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                {activeSection === "overview" && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Project Overview
                    </h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-lg text-blue-100 leading-relaxed">
                        The Advanced Vehicle Safety System is a comprehensive
                        IoT-based solution designed to enhance road safety
                        through real-time monitoring and intelligent alert
                        systems. This project combines computer vision, machine
                        learning, and IoT technologies to create a proactive
                        safety system that can prevent accidents before they
                        occur.
                      </p>
                      <p className="text-blue-100 leading-relaxed">
                        Our system addresses critical safety concerns including
                        collision detection, lane departure warnings, driver
                        drowsiness monitoring, and emergency response
                        automation. By leveraging cutting-edge AI algorithms and
                        sensor technologies, we've created a solution that
                        significantly reduces the risk of road accidents.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      <div className="bg-blue-500/20 p-6 rounded-lg border border-blue-500/30">
                        <i className="fas fa-shield-alt text-3xl text-blue-400 mb-4"></i>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Safety First
                        </h3>
                        <p className="text-blue-200">
                          Proactive accident prevention through intelligent
                          monitoring
                        </p>
                      </div>
                      <div className="bg-green-500/20 p-6 rounded-lg border border-green-500/30">
                        <i className="fas fa-brain text-3xl text-green-400 mb-4"></i>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          AI-Powered
                        </h3>
                        <p className="text-green-200">
                          Advanced machine learning algorithms for accurate
                          detection
                        </p>
                      </div>
                      <div className="bg-purple-500/20 p-6 rounded-lg border border-purple-500/30">
                        <i className="fas fa-wifi text-3xl text-purple-400 mb-4"></i>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          IoT Connected
                        </h3>
                        <p className="text-purple-200">
                          Real-time data transmission and remote monitoring
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "features" && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="bg-blue-500/20 p-3 rounded-lg">
                              <i
                                className={`${feature.icon} text-xl text-blue-400`}
                              ></i>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-white mb-2">
                                {feature.title}
                              </h3>
                              <p className="text-blue-200">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === "tech-stack" && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Technology Stack
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {techStack.map((tech, index) => (
                        <div
                          key={index}
                          className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all text-center"
                        >
                          <i
                            className={`${tech.icon} text-4xl ${tech.color} mb-4`}
                          ></i>
                          <h3 className="text-lg font-semibold text-white">
                            {tech.name}
                          </h3>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 space-y-4">
                      <h3 className="text-2xl font-semibold text-white">
                        Technical Specifications
                      </h3>
                      <div className="bg-white/5 p-6 rounded-lg">
                        <ul className="space-y-3 text-blue-200">
                          <li>
                            <strong className="text-white">
                              Processing Unit:
                            </strong>{" "}
                            Raspberry Pi 4B with 8GB RAM
                          </li>
                          <li>
                            <strong className="text-white">Camera:</strong>{" "}
                            High-resolution USB 3.0 camera with night vision
                          </li>
                          <li>
                            <strong className="text-white">Sensors:</strong>{" "}
                            Ultrasonic, GPS, Accelerometer, Gyroscope
                          </li>
                          <li>
                            <strong className="text-white">
                              Connectivity:
                            </strong>{" "}
                            Wi-Fi, Bluetooth, 4G LTE module
                          </li>
                          <li>
                            <strong className="text-white">Storage:</strong>{" "}
                            64GB microSD card with cloud backup
                          </li>
                          <li>
                            <strong className="text-white">Power:</strong> 12V
                            DC with backup battery system
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "implementation" && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Implementation Details
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Computer Vision Module
                        </h3>
                        <p className="text-blue-200 mb-4">
                          Implemented using OpenCV and TensorFlow for real-time
                          object detection and tracking. The system processes
                          video frames at 30 FPS to ensure minimal latency in
                          threat detection.
                        </p>
                        <div className="bg-slate-800 p-4 rounded-lg">
                          <code className="text-green-400 text-sm">
                            # Key algorithms implemented:
                            <br />
                            - YOLO v5 for object detection
                            <br />
                            - Haar Cascades for face detection
                            <br />
                            - Optical flow for motion tracking
                            <br />- Edge detection for lane identification
                          </code>
                        </div>
                      </div>
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          IoT Integration
                        </h3>
                        <p className="text-blue-200 mb-4">
                          Seamless integration with various sensors and
                          communication modules to create a comprehensive
                          monitoring ecosystem.
                        </p>
                        <ul className="space-y-2 text-blue-200">
                          <li>
                            • Real-time data collection from multiple sensors
                          </li>
                          <li>
                            • MQTT protocol for efficient data transmission
                          </li>
                          <li>• Cloud-based data storage and analytics</li>
                          <li>
                            • Mobile app integration for remote monitoring
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "timeline" && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Project Timeline
                    </h2>
                    <div className="space-y-4">
                      {timeline.map((phase, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-4"
                        >
                          <div
                            className={`w-4 h-4 rounded-full ${
                              phase.status === "completed"
                                ? "bg-green-500"
                                : "bg-gray-500"
                            }`}
                          ></div>
                          <div className="flex-1 bg-white/5 p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                              <h3 className="text-lg font-semibold text-white">
                                {phase.phase}
                              </h3>
                              <span className="text-blue-200">
                                {phase.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-500/20 p-6 rounded-lg border border-blue-500/30 mt-8">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Total Duration: 11 Weeks
                      </h3>
                      <p className="text-blue-200">
                        Project completed on schedule with all milestones
                        achieved successfully.
                      </p>
                    </div>
                  </div>
                )}

                {activeSection === "team" && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Team Members
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {teamMembers.map((member, index) => (
                        <div
                          key={index}
                          className="bg-white/5 p-6 rounded-lg border border-white/10"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                              {member.avatar}
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-white">
                                {member.name}
                              </h3>
                              <p className="text-blue-200">{member.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === "results" && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Results & Achievements
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-green-500/20 p-6 rounded-lg border border-green-500/30">
                        <h3 className="text-2xl font-bold text-green-400 mb-2">
                          95%
                        </h3>
                        <p className="text-white font-semibold">
                          Accuracy Rate
                        </p>
                        <p className="text-green-200">
                          Object detection and collision prediction accuracy
                        </p>
                      </div>
                      <div className="bg-blue-500/20 p-6 rounded-lg border border-blue-500/30">
                        <h3 className="text-2xl font-bold text-blue-400 mb-2">
                          30 FPS
                        </h3>
                        <p className="text-white font-semibold">
                          Real-time Processing
                        </p>
                        <p className="text-blue-200">
                          Video processing speed for instant alerts
                        </p>
                      </div>
                      <div className="bg-purple-500/20 p-6 rounded-lg border border-purple-500/30">
                        <h3 className="text-2xl font-bold text-purple-400 mb-2">
                          0.2s
                        </h3>
                        <p className="text-white font-semibold">
                          Response Time
                        </p>
                        <p className="text-purple-200">
                          Average alert generation time
                        </p>
                      </div>
                      <div className="bg-orange-500/20 p-6 rounded-lg border border-orange-500/30">
                        <h3 className="text-2xl font-bold text-orange-400 mb-2">
                          24/7
                        </h3>
                        <p className="text-white font-semibold">
                          Continuous Monitoring
                        </p>
                        <p className="text-orange-200">
                          Uninterrupted safety system operation
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-lg mt-8">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Key Achievements
                      </h3>
                      <ul className="space-y-2 text-blue-200">
                        <li>
                          • Successfully implemented multi-modal safety
                          detection system
                        </li>
                        <li>
                          • Achieved real-time processing with minimal hardware
                          requirements
                        </li>
                        <li>
                          • Developed user-friendly mobile application interface
                        </li>
                        <li>
                          • Created comprehensive data analytics dashboard
                        </li>
                        <li>
                          • Established reliable emergency response protocol
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeSection === "future" && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Future Enhancements
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Planned Improvements
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-robot text-blue-400"></i>
                              <span className="text-blue-200">
                                Advanced AI model integration
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-cloud text-green-400"></i>
                              <span className="text-green-200">
                                Enhanced cloud analytics
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-mobile-alt text-purple-400"></i>
                              <span className="text-purple-200">
                                Mobile app improvements
                              </span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-network-wired text-orange-400"></i>
                              <span className="text-orange-200">
                                Vehicle-to-vehicle communication
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-chart-line text-red-400"></i>
                              <span className="text-red-200">
                                Predictive analytics
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-cog text-yellow-400"></i>
                              <span className="text-yellow-200">
                                Hardware optimization
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-500/20 p-6 rounded-lg border border-blue-500/30">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Next Phase Goals
                        </h3>
                        <p className="text-blue-200 mb-4">
                          We're planning to expand the system's capabilities
                          with advanced features and broader market deployment.
                        </p>
                        <ul className="space-y-2 text-blue-200">
                          <li>• Integration with smart city infrastructure</li>
                          <li>• Development of fleet management solutions</li>
                          <li>
                            • Implementation of blockchain for data security
                          </li>
                          <li>• Partnership with automotive manufacturers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Get In Touch
                </h2>
                <p className="text-blue-200 mb-6">
                  Interested in learning more about this project or discussing
                  potential collaborations? We'd love to hear from you!
                </p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <a
                    href="mailto:patilmayur987654321@gmail.com"
                    className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Send Email
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <i className="fab fa-github mr-2"></i>
                    View Code
                  </a>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors border border-white/20"
                  >
                    <i className="fas fa-arrow-left mr-2"></i>
                    Back to Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        
        @keyframes slideIn {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
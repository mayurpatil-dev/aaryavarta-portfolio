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
    { name: "Arduino", icon: "fas fa-microchip", color: "text-purple-400" },
    { name: "RFID", icon: "fas fa-id-card", color: "text-pink-400" },
    { name: "ESP32", icon: "fas fa-wifi", color: "text-purple-500" },
    { name: "MySQL", icon: "fas fa-database", color: "text-pink-500" },
    { name: "PHP", icon: "fab fa-php", color: "text-purple-400" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "text-pink-400" },
  ];

  const features = [
    {
      title: "RFID Access Control",
      description:
        "Secure entry and exit monitoring using RFID card technology",
      icon: "fas fa-id-card",
    },
    {
      title: "Real-time Attendance",
      description: "Automatic attendance tracking with timestamp logging",
      icon: "fas fa-clock",
    },
    {
      title: "Student Management",
      description: "Comprehensive student database with profile management",
      icon: "fas fa-user-graduate",
    },
    {
      title: "Admin Dashboard",
      description: "Web-based control panel for hostel administrators",
      icon: "fas fa-tachometer-alt",
    },
    {
      title: "SMS Notifications",
      description: "Automated SMS alerts to parents and guardians",
      icon: "fas fa-sms",
    },
    {
      title: "Report Generation",
      description: "Detailed attendance reports and analytics",
      icon: "fas fa-chart-bar",
    },
  ];

  const timeline = [
    { phase: "Research & Planning", duration: "2 weeks", status: "completed" },
    { phase: "Hardware Setup", duration: "1 week", status: "completed" },
    { phase: "RFID Integration", duration: "2 weeks", status: "completed" },
    { phase: "Database Development", duration: "1 week", status: "completed" },
    { phase: "Web Interface", duration: "2 weeks", status: "completed" },
    { phase: "Testing & Deployment", duration: "1 week", status: "completed" },
  ];

  const teamMembers = [
    {
      name: "Mayur Patil",
      role: "Project Lead & Backend Developer",
      avatar: "M",
    },
    { name: "Ganesh Wankhade", role: "Hardware Engineer", avatar: "G" },
    { name: "Yash Dhake", role: "Database Administrator", avatar: "Y" },
  ];

  const specifications = [
    { label: "RFID Frequency", value: "13.56 MHz" },
    { label: "Read Range", value: "Up to 10cm" },
    { label: "Database", value: "MySQL 8.0" },
    { label: "Microcontroller", value: "ESP32 DevKit" },
    { label: "Power Supply", value: "5V DC" },
    { label: "Connectivity", value: "Wi-Fi 802.11 b/g/n" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 font-inter">
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
                className="flex items-center text-pink-400 hover:text-pink-300 transition-colors mb-4 group"
              >
                <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
                Back to Portfolio
              </button>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                IoT Hostel Management System
              </h1>
              <p className="text-xl text-pink-200">
                RFID-Based Access Control & Attendance Monitoring
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
                          ? "bg-purple-500 text-white"
                          : "text-pink-200 hover:bg-white/10 hover:text-white"
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
                      <p className="text-lg text-pink-100 leading-relaxed">
                        The IoT-Based Hostel Access and Attendance Monitoring
                        System is a comprehensive solution designed to modernize
                        hostel management through automated access control and
                        real-time attendance tracking. This system leverages
                        RFID technology, IoT sensors, and web-based interfaces
                        to provide seamless monitoring and management
                        capabilities.
                      </p>
                      <p className="text-pink-100 leading-relaxed">
                        Our system addresses the challenges of manual attendance
                        tracking, unauthorized access, and lack of real-time
                        monitoring in hostel environments. By implementing
                        RFID-based access control, we've created a secure,
                        efficient, and user-friendly solution that benefits
                        students, parents, and hostel administrators alike.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      <div className="bg-purple-500/20 p-6 rounded-lg border border-purple-500/30">
                        <i className="fas fa-shield-alt text-3xl text-purple-400 mb-4"></i>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Secure Access
                        </h3>
                        <p className="text-purple-200">
                          RFID-based authentication for enhanced security
                        </p>
                      </div>
                      <div className="bg-pink-500/20 p-6 rounded-lg border border-pink-500/30">
                        <i className="fas fa-clock text-3xl text-pink-400 mb-4"></i>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Real-time Tracking
                        </h3>
                        <p className="text-pink-200">
                          Instant attendance monitoring and notifications
                        </p>
                      </div>
                      <div className="bg-purple-600/20 p-6 rounded-lg border border-purple-600/30">
                        <i className="fas fa-chart-line text-3xl text-purple-300 mb-4"></i>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Smart Analytics
                        </h3>
                        <p className="text-purple-200">
                          Comprehensive reporting and data insights
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
                            <div className="bg-purple-500/20 p-3 rounded-lg">
                              <i
                                className={`${feature.icon} text-xl text-purple-400`}
                              ></i>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-white mb-2">
                                {feature.title}
                              </h3>
                              <p className="text-pink-200">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 bg-white/5 p-6 rounded-lg">
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        System Workflow
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                            1
                          </div>
                          <p className="text-pink-200">
                            Student approaches RFID reader with their card
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                            2
                          </div>
                          <p className="text-pink-200">
                            System validates card and records entry/exit
                            timestamp
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                            3
                          </div>
                          <p className="text-pink-200">
                            Data is sent to database and admin dashboard is
                            updated
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                            4
                          </div>
                          <p className="text-pink-200">
                            SMS notifications sent to parents/guardians if
                            configured
                          </p>
                        </div>
                      </div>
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
                    <div className="mt-8 space-y-6">
                      <h3 className="text-2xl font-semibold text-white">
                        Technical Specifications
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {specifications.map((spec, index) => (
                          <div
                            key={index}
                            className="bg-white/5 p-4 rounded-lg flex justify-between items-center"
                          >
                            <span className="text-pink-200 font-medium">
                              {spec.label}:
                            </span>
                            <span className="text-white font-semibold">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-white mb-4">
                          Hardware Components
                        </h4>
                        <ul className="space-y-2 text-pink-200">
                          <li>
                            • ESP32 Development Board with Wi-Fi capability
                          </li>
                          <li>• MFRC522 RFID Reader Module</li>
                          <li>• RFID Cards (13.56MHz frequency)</li>
                          <li>• LCD Display (16x2) for status indication</li>
                          <li>• Buzzer for audio feedback</li>
                          <li>• LED indicators for visual status</li>
                          <li>• Power supply unit (5V/2A)</li>
                          <li>• Enclosure box for weather protection</li>
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
                          Hardware Implementation
                        </h3>
                        <p className="text-pink-200 mb-4">
                          The hardware setup consists of ESP32 microcontroller
                          interfaced with MFRC522 RFID reader module. The system
                          is designed for outdoor installation with weatherproof
                          enclosure.
                        </p>
                        <div className="bg-slate-800 p-4 rounded-lg">
                          <code className="text-green-400 text-sm">
                            // Key hardware connections:
                            <br />
                            MFRC522 SDA Pin → ESP32 GPIO 21
                            <br />
                            MFRC522 SCK Pin → ESP32 GPIO 18
                            <br />
                            MFRC522 MOSI Pin → ESP32 GPIO 23
                            <br />
                            MFRC522 MISO Pin → ESP32 GPIO 19
                            <br />
                            MFRC522 RST Pin → ESP32 GPIO 22
                          </code>
                        </div>
                      </div>
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Software Architecture
                        </h3>
                        <p className="text-pink-200 mb-4">
                          The software follows a three-tier architecture with
                          embedded firmware, database layer, and web interface
                          for comprehensive system management.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-white font-semibold mb-2">
                              Firmware Layer
                            </h4>
                            <ul className="text-purple-200 text-sm space-y-1">
                              <li>• RFID card reading</li>
                              <li>• Wi-Fi connectivity</li>
                              <li>• HTTP API calls</li>
                              <li>• Local data buffering</li>
                            </ul>
                          </div>
                          <div className="bg-pink-500/20 p-4 rounded-lg border border-pink-500/30">
                            <h4 className="text-white font-semibold mb-2">
                              Database Layer
                            </h4>
                            <ul className="text-pink-200 text-sm space-y-1">
                              <li>• Student records</li>
                              <li>• Attendance logs</li>
                              <li>• RFID card mapping</li>
                              <li>• System configuration</li>
                            </ul>
                          </div>
                          <div className="bg-purple-600/20 p-4 rounded-lg border border-purple-600/30">
                            <h4 className="text-white font-semibold mb-2">
                              Web Interface
                            </h4>
                            <ul className="text-purple-200 text-sm space-y-1">
                              <li>• Admin dashboard</li>
                              <li>• Student management</li>
                              <li>• Report generation</li>
                              <li>• System monitoring</li>
                            </ul>
                          </div>
                        </div>
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
                              <span className="text-pink-200">
                                {phase.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-purple-500/20 p-6 rounded-lg border border-purple-500/30 mt-8">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Total Duration: 9 Weeks
                      </h3>
                      <p className="text-purple-200">
                        Project completed successfully with all deliverables met
                        on schedule.
                      </p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Key Milestones
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <i className="fas fa-check-circle text-green-400"></i>
                          <span className="text-pink-200">
                            Hardware prototype completed and tested
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <i className="fas fa-check-circle text-green-400"></i>
                          <span className="text-pink-200">
                            Database schema designed and implemented
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <i className="fas fa-check-circle text-green-400"></i>
                          <span className="text-pink-200">
                            Web interface developed and deployed
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <i className="fas fa-check-circle text-green-400"></i>
                          <span className="text-pink-200">
                            System integration and testing completed
                          </span>
                        </div>
                      </div>
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
                            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                              {member.avatar}
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-white">
                                {member.name}
                              </h3>
                              <p className="text-pink-200">{member.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/5 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Team Responsibilities
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-purple-300 font-semibold mb-2">
                            Development Team
                          </h4>
                          <ul className="space-y-2 text-pink-200">
                            <li>• System architecture design</li>
                            <li>• Hardware integration</li>
                            <li>• Software development</li>
                            <li>• Database management</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-purple-300 font-semibold mb-2">
                            Project Management
                          </h4>
                          <ul className="space-y-2 text-pink-200">
                            <li>• Timeline coordination</li>
                            <li>• Quality assurance</li>
                            <li>• Documentation</li>
                            <li>• Testing and deployment</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "results" && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Results & Achievements
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-purple-500/20 p-6 rounded-lg border border-purple-500/30">
                        <h3 className="text-2xl font-bold text-purple-400 mb-2">
                          99.8%
                        </h3>
                        <p className="text-white font-semibold">
                          System Uptime
                        </p>
                        <p className="text-purple-200">
                          Reliable 24/7 operation with minimal downtime
                        </p>
                      </div>
                      <div className="bg-pink-500/20 p-6 rounded-lg border border-pink-500/30">
                        <h3 className="text-2xl font-bold text-pink-400 mb-2">
                          &lt;2s
                        </h3>
                        <p className="text-white font-semibold">
                          Response Time
                        </p>
                        <p className="text-pink-200">
                          Fast RFID card processing and database updates
                        </p>
                      </div>
                      <div className="bg-purple-600/20 p-6 rounded-lg border border-purple-600/30">
                        <h3 className="text-2xl font-bold text-purple-300 mb-2">
                          500+
                        </h3>
                        <p className="text-white font-semibold">
                          Students Managed
                        </p>
                        <p className="text-purple-200">
                          Successfully handling large student database
                        </p>
                      </div>
                      <div className="bg-pink-600/20 p-6 rounded-lg border border-pink-600/30">
                        <h3 className="text-2xl font-bold text-pink-300 mb-2">
                          95%
                        </h3>
                        <p className="text-white font-semibold">
                          Accuracy Rate
                        </p>
                        <p className="text-pink-200">
                          Precise attendance tracking and reporting
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-lg mt-8">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Key Achievements
                      </h3>
                      <ul className="space-y-2 text-pink-200">
                        <li>
                          • Successfully deployed in live hostel environment
                        </li>
                        <li>• Reduced manual attendance tracking by 100%</li>
                        <li>
                          • Improved security with unauthorized access
                          prevention
                        </li>
                        <li>
                          • Enhanced parent communication through SMS
                          notifications
                        </li>
                        <li>• Generated comprehensive attendance analytics</li>
                        <li>
                          • Achieved cost-effective solution under budget
                          constraints
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-lg border border-purple-500/30">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Impact Assessment
                      </h3>
                      <p className="text-pink-200 mb-4">
                        The implementation of this system has significantly
                        improved hostel management efficiency and student safety
                        monitoring.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-purple-300 font-semibold mb-2">
                            Benefits for Students
                          </h4>
                          <ul className="text-pink-200 text-sm space-y-1">
                            <li>• Contactless entry/exit</li>
                            <li>• No manual sign-in required</li>
                            <li>• Quick access processing</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-purple-300 font-semibold mb-2">
                            Benefits for Administration
                          </h4>
                          <ul className="text-pink-200 text-sm space-y-1">
                            <li>• Automated attendance tracking</li>
                            <li>• Real-time monitoring dashboard</li>
                            <li>• Detailed reporting capabilities</li>
                          </ul>
                        </div>
                      </div>
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
                              <i className="fas fa-mobile-alt text-purple-400"></i>
                              <span className="text-purple-200">
                                Mobile application development
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-fingerprint text-pink-400"></i>
                              <span className="text-pink-200">
                                Biometric authentication integration
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-camera text-purple-500"></i>
                              <span className="text-purple-300">
                                Facial recognition system
                              </span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-cloud text-pink-500"></i>
                              <span className="text-pink-300">
                                Cloud-based data storage
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-bell text-purple-400"></i>
                              <span className="text-purple-200">
                                Advanced notification system
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-chart-pie text-pink-400"></i>
                              <span className="text-pink-200">
                                Enhanced analytics dashboard
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-purple-500/20 p-6 rounded-lg border border-purple-500/30">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Expansion Plans
                        </h3>
                        <p className="text-purple-200 mb-4">
                          We're planning to scale the system for multiple hostel
                          locations and integrate additional smart features.
                        </p>
                        <ul className="space-y-2 text-purple-200">
                          <li>• Multi-location hostel management</li>
                          <li>• Integration with university ERP systems</li>
                          <li>
                            • Advanced security features with AI monitoring
                          </li>
                          <li>
                            • IoT sensor integration for environmental
                            monitoring
                          </li>
                          <li>• Blockchain-based secure data management</li>
                        </ul>
                      </div>
                      <div className="bg-pink-500/20 p-6 rounded-lg border border-pink-500/30">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Technology Roadmap
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              Q1
                            </div>
                            <p className="text-pink-200">
                              Mobile app development and testing
                            </p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              Q2
                            </div>
                            <p className="text-pink-200">
                              Cloud migration and scalability improvements
                            </p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              Q3
                            </div>
                            <p className="text-pink-200">
                              AI-powered analytics and predictive features
                            </p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              Q4
                            </div>
                            <p className="text-pink-200">
                              Multi-campus deployment and integration
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Get In Touch
                </h2>
                <p className="text-pink-200 mb-6">
                  Interested in learning more about this project or discussing
                  potential collaborations? We'd love to hear from you!
                </p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <a
                    href="mailto:patilmayur987654321@gmail.com"
                    className="flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Send Email
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition-colors"
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
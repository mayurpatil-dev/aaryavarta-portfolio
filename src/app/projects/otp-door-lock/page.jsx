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
    { name: "ESP8266", icon: "fas fa-microchip", color: "text-blue-500" },
    { name: "Twilio OTP", icon: "fas fa-sms", color: "text-red-500" },
    { name: "IoT", icon: "fas fa-network-wired", color: "text-green-500" },
    { name: "Home Automation", icon: "fas fa-home", color: "text-purple-500" },
  ];

  const features = [
    {
      title: "OTP-Based Authentication",
      description: "Secure door access using one-time passwords sent via SMS.",
      icon: "fas fa-key",
    },
    {
      title: "Remote Control",
      description: "Unlock your door from anywhere using your smartphone.",
      icon: "fas fa-mobile-alt",
    },
    {
      title: "Real-Time Monitoring",
      description: "Get instant notifications of access attempts.",
      icon: "fas fa-bell",
    },
    {
      title: "User Management",
      description: "Add or remove authorized users easily.",
      icon: "fas fa-users-cog",
    },
  ];

  const timeline = [
    { phase: "Research & Design", duration: "2 weeks", status: "completed" },
    { phase: "Hardware Setup", duration: "1 week", status: "completed" },
    { phase: "Twilio Integration", duration: "1 week", status: "completed" },
    { phase: "Testing & Debugging", duration: "1 week", status: "completed" },
    { phase: "Deployment", duration: "1 week", status: "completed" },
  ];

  const teamMembers = [
    { name: "Mayur Patil", role: "Project Lead & IoT Developer", avatar: "M" },
    { name: "Ganesh Wankhade", role: "Embedded Systems", avatar: "G" },
    { name: "Yash Dhake", role: "Software Integration", avatar: "Y" },
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-700">OTP Based Home Door Lock System (ESP8266 + Twilio OTP)</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`px-4 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 flex items-center gap-2 ${activeSection === section.id ? "bg-blue-600 text-white" : "bg-white text-blue-700 hover:bg-blue-100"}`}
              onClick={() => setActiveSection(section.id)}
            >
              <i className={section.icon}></i>
              {section.title}
            </button>
          ))}
        </div>

        {/* Section Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up">
          {activeSection === "overview" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700 mb-2">
                This project implements a secure, IoT-enabled home door lock system using the ESP8266 microcontroller and Twilio's OTP service. Users receive a one-time password (OTP) via SMS to unlock their door, ensuring only authorized access.
              </p>
              <img src="/otp-based-home-door-lock-system-esp8266-_a7MfYoVqQ7KyTAC1WUDPvg_Vl_FzxiMSbKSnpcQ4CGIzQ.jpeg" alt="OTP Door Lock" className="w-full max-w-md mx-auto rounded-lg shadow my-4" />
            </div>
          )}
          {activeSection === "features" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                {features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <i className={f.icon + " text-blue-500"}></i>
                    <span>{f.title}: {f.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeSection === "tech-stack" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Technology</h2>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech, idx) => (
                  <div key={idx} className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 border ${tech.color}`}>
                    <i className={tech.icon}></i>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeSection === "implementation" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Implementation</h2>
              <p className="text-gray-700 mb-2">
                The system uses the ESP8266 to connect to Wi-Fi and communicate with Twilio's API. When a user requests access, a unique OTP is generated and sent via SMS. The user enters the OTP on a keypad, and if correct, the door unlocks.
              </p>
              <ul className="list-disc pl-6">
                <li>ESP8266 microcontroller for Wi-Fi connectivity</li>
                <li>Twilio API for OTP SMS delivery</li>
                <li>Relay module to control door lock</li>
                <li>Keypad for OTP entry</li>
                <li>Web dashboard for user management</li>
              </ul>
            </div>
          )}
          {activeSection === "timeline" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Timeline</h2>
              <ul className="list-disc pl-6">
                {timeline.map((t, idx) => (
                  <li key={idx} className="mb-1">
                    <span className="font-medium">{t.phase}</span>: {t.duration} <span className="text-green-600">({t.status})</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeSection === "team" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Team</h2>
              <ul className="flex flex-wrap gap-4">
                {teamMembers.map((m, idx) => (
                  <li key={idx} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-xl font-bold mb-2">{m.avatar}</div>
                    <span className="font-medium">{m.name}</span>
                    <span className="text-sm text-gray-500">{m.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeSection === "results" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <p className="text-gray-700 mb-2">
                The OTP-based door lock system successfully enhances home security, providing remote access and real-time monitoring. The system is robust, user-friendly, and scalable for future smart home integrations.
              </p>
            </div>
          )}
          {activeSection === "future" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Future Plans</h2>
              <ul className="list-disc pl-6">
                <li>Integrate with voice assistants (Alexa, Google Home)</li>
                <li>Add biometric authentication (fingerprint, face recognition)</li>
                <li>Expand to commercial access control systems</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainComponent; 
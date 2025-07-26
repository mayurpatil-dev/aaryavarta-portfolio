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
    { name: "LDR Sensor", icon: "fas fa-lightbulb", color: "text-yellow-500" },
    { name: "Embedded Systems", icon: "fas fa-microchip", color: "text-blue-500" },
    { name: "Automation", icon: "fas fa-robot", color: "text-green-500" },
  ];

  const features = [
    {
      title: "Mouse Detection",
      description: "Detects the presence of mice using LDR sensors.",
      icon: "fas fa-search",
    },
    {
      title: "Automated Poking Mechanism",
      description: "Activates a gentle poking device to deter mice.",
      icon: "fas fa-hand-point-up",
    },
    {
      title: "Low Power Consumption",
      description: "Efficient design for continuous operation.",
      icon: "fas fa-battery-half",
    },
    {
      title: "Safe for Rodents",
      description: "Non-lethal and humane deterrence method.",
      icon: "fas fa-heart",
    },
  ];

  const timeline = [
    { phase: "Concept & Design", duration: "1 week", status: "completed" },
    { phase: "Sensor Integration", duration: "1 week", status: "completed" },
    { phase: "Mechanism Build", duration: "2 weeks", status: "completed" },
    { phase: "Testing & Optimization", duration: "1 week", status: "completed" },
    { phase: "Deployment", duration: "1 week", status: "completed" },
  ];

  const teamMembers = [
    { name: "Mayur Patil", role: "Project Lead & Automation", avatar: "M" },
    { name: "Ganesh Wankhade", role: "Embedded Systems", avatar: "G" },
    { name: "Yash Dhake", role: "Documentation", avatar: "Y" },
  ];

  return (
    <div className="min-h-screen bg-yellow-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-yellow-700">Mouse Poking Device Using LDR</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`px-4 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 flex items-center gap-2 ${activeSection === section.id ? "bg-yellow-600 text-white" : "bg-white text-yellow-700 hover:bg-yellow-100"}`}
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
                This project presents a humane mouse deterrence device using a Light Dependent Resistor (LDR) to detect rodent presence and trigger a gentle poking mechanism. Ideal for homes, storage, and food facilities.
              </p>
              <img src="/mouse.jpeg" alt="Mouse Poking Device" className="w-full max-w-md mx-auto rounded-lg shadow my-4" />
            </div>
          )}
          {activeSection === "features" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                {features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <i className={f.icon + " text-yellow-500"}></i>
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
                  <div key={idx} className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-yellow-50 border ${tech.color}`}>
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
                The device uses an LDR sensor to detect changes in light caused by a mouse. When detected, a small motor activates a poking mechanism to gently deter the rodent. The system is energy-efficient and safe for continuous use.
              </p>
              <ul className="list-disc pl-6">
                <li>LDR sensor for mouse detection</li>
                <li>Microcontroller for automation logic</li>
                <li>Motor-driven poking mechanism</li>
                <li>Low-power design for 24/7 operation</li>
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
                    <div className="w-12 h-12 rounded-full bg-yellow-200 flex items-center justify-center text-xl font-bold mb-2">{m.avatar}</div>
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
                The device effectively deters mice in a humane way, reducing rodent presence without harm. It is easy to install, maintain, and adapt for various environments.
              </p>
            </div>
          )}
          {activeSection === "future" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Future Plans</h2>
              <ul className="list-disc pl-6">
                <li>Integrate with smart home systems</li>
                <li>Add wireless notifications</li>
                <li>Expand to other pest deterrence applications</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainComponent; 
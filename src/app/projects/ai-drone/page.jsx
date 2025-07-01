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
    { name: "ROS", icon: "fas fa-robot", color: "text-blue-500" },
    { name: "ArduPilot", icon: "fas fa-helicopter", color: "text-red-500" },
    {
      name: "FLIR SDK",
      icon: "fas fa-thermometer-half",
      color: "text-purple-500",
    },
  ];

  const features = [
    {
      title: "Autonomous Flight Control",
      description:
        "GPS-guided autonomous navigation with obstacle avoidance and mission planning",
      icon: "fas fa-plane",
    },
    {
      title: "Thermal Imaging",
      description:
        "FLIR thermal camera integration for heat signature detection and survivor location",
      icon: "fas fa-thermometer-half",
    },
    {
      title: "Object Detection & Recognition",
      description:
        "AI-powered real-time detection of people, vehicles, and debris using computer vision",
      icon: "fas fa-search",
    },
    {
      title: "Emergency Communication",
      description:
        "Two-way communication system with emergency broadcast capabilities",
      icon: "fas fa-broadcast-tower",
    },
    {
      title: "Real-time Data Transmission",
      description:
        "Live video streaming and telemetry data transmission to ground control",
      icon: "fas fa-satellite-dish",
    },
    {
      title: "Emergency Supply Drop",
      description:
        "Automated payload delivery system for medical supplies and emergency equipment",
      icon: "fas fa-parachute-box",
    },
  ];

  const timeline = [
    { phase: "Research & Design", duration: "3 weeks", status: "completed" },
    { phase: "Hardware Integration", duration: "2 weeks", status: "completed" },
    { phase: "AI Model Development", duration: "4 weeks", status: "completed" },
    {
      phase: "Flight Control System",
      duration: "3 weeks",
      status: "completed",
    },
    { phase: "Testing & Validation", duration: "3 weeks", status: "completed" },
    { phase: "Field Testing", duration: "2 weeks", status: "completed" },
  ];

  const teamMembers = [
    {
      name: "Mayur Patil",
      role: "Project Lead & AI Developer",
      avatar: "M",
    },
    { name: "Ganesh Wankhade", role: "Flight Systems Engineer", avatar: "G" },
    { name: "Yash Dhake", role: "Hardware Integration Lead", avatar: "Y" },
  ];

  const specifications = [
    { label: "Flight Time", value: "45 minutes", icon: "fas fa-clock" },
    { label: "Max Range", value: "15 km", icon: "fas fa-ruler" },
    { label: "Payload Capacity", value: "2.5 kg", icon: "fas fa-weight" },
    { label: "Operating Altitude", value: "500m AGL", icon: "fas fa-mountain" },
    { label: "Wind Resistance", value: "25 km/h", icon: "fas fa-wind" },
    {
      label: "Temperature Range",
      value: "-10°C to 50°C",
      icon: "fas fa-temperature-high",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 font-inter">
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
                className="flex items-center text-red-400 hover:text-red-300 transition-colors mb-4 group"
              >
                <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
                Back to Portfolio
              </button>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                AI-Powered Disaster Response Drone
              </h1>
              <p className="text-xl text-red-200">
                Autonomous Emergency Response & Search-Rescue System
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
                <i className="fas fa-check-circle mr-2"></i>
                Operational
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
                          ? "bg-red-500 text-white"
                          : "text-red-200 hover:bg-white/10 hover:text-white"
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
                      <p className="text-lg text-red-100 leading-relaxed">
                        The AI-Powered Disaster Response Drone is an advanced
                        autonomous system designed to provide rapid emergency
                        response capabilities in disaster-affected areas. This
                        cutting-edge drone combines artificial intelligence,
                        thermal imaging, and autonomous flight control to assist
                        in search and rescue operations, damage assessment, and
                        emergency supply delivery.
                      </p>
                      <p className="text-red-100 leading-relaxed">
                        Our system addresses critical challenges in disaster
                        response including rapid deployment, real-time
                        situational awareness, survivor detection, and emergency
                        communication. By leveraging state-of-the-art AI
                        algorithms and advanced sensor technologies, we've
                        created a solution that significantly enhances emergency
                        response effectiveness and saves lives.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      <div className="bg-red-500/20 p-6 rounded-lg border border-red-500/30">
                        <i className="fas fa-life-ring text-3xl text-red-400 mb-4"></i>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Life Saving
                        </h3>
                        <p className="text-red-200">
                          Rapid survivor detection and emergency response
                          coordination
                        </p>
                      </div>
                      <div className="bg-orange-500/20 p-6 rounded-lg border border-orange-500/30">
                        <i className="fas fa-robot text-3xl text-orange-400 mb-4"></i>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Autonomous
                        </h3>
                        <p className="text-orange-200">
                          Fully autonomous operation with minimal human
                          intervention
                        </p>
                      </div>
                      <div className="bg-purple-500/20 p-6 rounded-lg border border-purple-500/30">
                        <i className="fas fa-eye text-3xl text-purple-400 mb-4"></i>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          AI Vision
                        </h3>
                        <p className="text-purple-200">
                          Advanced computer vision and thermal imaging
                          capabilities
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                      {specifications.map((spec, index) => (
                        <div
                          key={index}
                          className="bg-white/5 p-4 rounded-lg text-center"
                        >
                          <i
                            className={`${spec.icon} text-2xl text-red-400 mb-2`}
                          ></i>
                          <div className="text-lg font-bold text-white">
                            {spec.value}
                          </div>
                          <div className="text-sm text-red-200">
                            {spec.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === "features" && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Core Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="bg-red-500/20 p-3 rounded-lg">
                              <i
                                className={`${feature.icon} text-xl text-red-400`}
                              ></i>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-white mb-2">
                                {feature.title}
                              </h3>
                              <p className="text-red-200">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/5 p-6 rounded-lg mt-8">
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        Advanced Capabilities
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">
                            AI & Machine Learning
                          </h4>
                          <ul className="space-y-2 text-red-200">
                            <li>
                              • Real-time object detection and classification
                            </li>
                            <li>
                              • Thermal signature analysis for survivor
                              detection
                            </li>
                            <li>• Damage assessment using computer vision</li>
                            <li>• Predictive flight path optimization</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Emergency Response
                          </h4>
                          <ul className="space-y-2 text-red-200">
                            <li>• Automated emergency beacon deployment</li>
                            <li>• Two-way communication with survivors</li>
                            <li>
                              • GPS coordinate transmission to rescue teams
                            </li>
                            <li>• Medical supply delivery system</li>
                          </ul>
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
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                          Hardware Components
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">
                              Flight Platform
                            </h4>
                            <ul className="space-y-2 text-red-200">
                              <li>• Custom hexacopter frame (1.2m wingspan)</li>
                              <li>• 6x brushless motors with ESCs</li>
                              <li>• Carbon fiber propellers</li>
                              <li>• LiPo battery system (22,000 mAh)</li>
                              <li>• Pixhawk 4 flight controller</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">
                              Sensors & Cameras
                            </h4>
                            <ul className="space-y-2 text-red-200">
                              <li>• FLIR Boson thermal imaging camera</li>
                              <li>• 4K RGB camera with gimbal stabilization</li>
                              <li>• LiDAR sensor for obstacle detection</li>
                              <li>• GPS/GNSS module with RTK capability</li>
                              <li>• IMU and barometric sensors</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                          Software Architecture
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">
                              Core Systems
                            </h4>
                            <ul className="space-y-2 text-red-200">
                              <li>• ROS (Robot Operating System) framework</li>
                              <li>• ArduPilot autopilot software</li>
                              <li>• Mission Planner ground control station</li>
                              <li>• Custom AI inference engine</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">
                              AI Models
                            </h4>
                            <ul className="space-y-2 text-red-200">
                              <li>• YOLOv8 for object detection</li>
                              <li>• Custom thermal analysis model</li>
                              <li>• Path planning algorithms</li>
                              <li>• Emergency classification system</li>
                            </ul>
                          </div>
                        </div>
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
                          Autonomous Flight System
                        </h3>
                        <p className="text-red-200 mb-4">
                          The drone utilizes a sophisticated flight control
                          system based on ArduPilot with custom mission planning
                          algorithms. The system can autonomously navigate
                          complex disaster environments while avoiding obstacles
                          and maintaining stable flight.
                        </p>
                        <div className="bg-slate-800 p-4 rounded-lg">
                          <code className="text-green-400 text-sm">
                            # Key flight control features:
                            <br />- GPS waypoint navigation with RTK precision
                            <br />- Real-time obstacle avoidance using LiDAR
                            <br />- Automatic return-to-home on low battery
                            <br />- Emergency landing protocols
                            <br />- Dynamic mission replanning
                          </code>
                        </div>
                      </div>
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          AI Vision Processing
                        </h3>
                        <p className="text-red-200 mb-4">
                          Advanced computer vision algorithms process both RGB
                          and thermal imagery in real-time to detect survivors,
                          assess damage, and identify hazards.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-slate-800 p-4 rounded-lg">
                            <h4 className="text-white font-semibold mb-2">
                              Thermal Analysis
                            </h4>
                            <ul className="text-green-400 text-sm space-y-1">
                              <li>• Heat signature detection</li>
                              <li>• Temperature anomaly analysis</li>
                              <li>• Fire detection algorithms</li>
                              <li>• Human body heat identification</li>
                            </ul>
                          </div>
                          <div className="bg-slate-800 p-4 rounded-lg">
                            <h4 className="text-white font-semibold mb-2">
                              Object Recognition
                            </h4>
                            <ul className="text-green-400 text-sm space-y-1">
                              <li>• Person detection and tracking</li>
                              <li>• Vehicle identification</li>
                              <li>• Debris and damage assessment</li>
                              <li>• Emergency signal recognition</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Communication Systems
                        </h3>
                        <p className="text-red-200 mb-4">
                          Multi-channel communication system enables real-time
                          data transmission and emergency coordination.
                        </p>
                        <ul className="space-y-2 text-red-200">
                          <li>
                            • 4G/5G cellular connectivity for data transmission
                          </li>
                          <li>
                            • Long-range radio for emergency communication
                          </li>
                          <li>• Satellite communication backup system</li>
                          <li>• Mesh networking with other drones</li>
                          <li>• Emergency broadcast capabilities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "timeline" && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Development Timeline
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
                              <span className="text-red-200">
                                {phase.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-red-500/20 p-6 rounded-lg border border-red-500/30 mt-8">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Total Duration: 17 Weeks
                      </h3>
                      <p className="text-red-200">
                        Project completed successfully with extensive field
                        testing and validation in simulated disaster scenarios.
                      </p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-lg mt-6">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Key Milestones
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-red-200">
                          <li>• ✅ First autonomous flight achieved</li>
                          <li>• ✅ Thermal imaging integration completed</li>
                          <li>• ✅ AI object detection operational</li>
                          <li>• ✅ Emergency communication system tested</li>
                        </ul>
                        <ul className="space-y-2 text-red-200">
                          <li>• ✅ Payload delivery system functional</li>
                          <li>• ✅ Field testing in various conditions</li>
                          <li>• ✅ Safety protocols validated</li>
                          <li>• ✅ Documentation and training completed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "team" && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Project Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {teamMembers.map((member, index) => (
                        <div
                          key={index}
                          className="bg-white/5 p-6 rounded-lg border border-white/10"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                              {member.avatar}
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-white">
                                {member.name}
                              </h3>
                              <p className="text-red-200">{member.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/5 p-6 rounded-lg mt-8">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Team Responsibilities
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Technical Leadership
                          </h4>
                          <ul className="space-y-2 text-red-200">
                            <li>• AI algorithm development and optimization</li>
                            <li>• System architecture design</li>
                            <li>• Project coordination and management</li>
                            <li>• Quality assurance and testing</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Specialized Expertise
                          </h4>
                          <ul className="space-y-2 text-red-200">
                            <li>• Flight control system development</li>
                            <li>• Computer vision and image processing</li>
                            <li>• Hardware integration and testing</li>
                            <li>• Emergency response protocols</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "results" && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Performance Results
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-green-500/20 p-6 rounded-lg border border-green-500/30">
                        <h3 className="text-2xl font-bold text-green-400 mb-2">
                          98%
                        </h3>
                        <p className="text-white font-semibold">
                          Detection Accuracy
                        </p>
                        <p className="text-green-200">
                          Human detection in thermal imaging
                        </p>
                      </div>
                      <div className="bg-blue-500/20 p-6 rounded-lg border border-blue-500/30">
                        <h3 className="text-2xl font-bold text-blue-400 mb-2">
                          45 min
                        </h3>
                        <p className="text-white font-semibold">
                          Flight Duration
                        </p>
                        <p className="text-blue-200">
                          Continuous operation time
                        </p>
                      </div>
                      <div className="bg-purple-500/20 p-6 rounded-lg border border-purple-500/30">
                        <h3 className="text-2xl font-bold text-purple-400 mb-2">
                          15 km
                        </h3>
                        <p className="text-white font-semibold">
                          Operating Range
                        </p>
                        <p className="text-purple-200">
                          Maximum communication distance
                        </p>
                      </div>
                      <div className="bg-orange-500/20 p-6 rounded-lg border border-orange-500/30">
                        <h3 className="text-2xl font-bold text-orange-400 mb-2">
                          2.5 kg
                        </h3>
                        <p className="text-white font-semibold">
                          Payload Capacity
                        </p>
                        <p className="text-orange-200">
                          Emergency supply delivery
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-lg mt-8">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Field Testing Results
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Search & Rescue Performance
                          </h4>
                          <ul className="space-y-2 text-red-200">
                            <li>
                              • Successfully located 15/15 test subjects in
                              thermal trials
                            </li>
                            <li>
                              • Average detection time: 3.2 minutes per square
                              kilometer
                            </li>
                            <li>
                              • 100% accuracy in GPS coordinate transmission
                            </li>
                            <li>
                              • Emergency communication established in all tests
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Operational Reliability
                          </h4>
                          <ul className="space-y-2 text-red-200">
                            <li>• 99.2% mission completion rate</li>
                            <li>
                              • Zero critical system failures in 50+ flights
                            </li>
                            <li>
                              • Successful operation in wind speeds up to 25
                              km/h
                            </li>
                            <li>
                              • Reliable performance in temperatures from -5°C
                              to 45°C
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-500/20 p-6 rounded-lg border border-red-500/30 mt-6">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Impact Assessment
                      </h3>
                      <p className="text-red-200 mb-4">
                        The AI-powered disaster response drone has demonstrated
                        significant potential to revolutionize emergency
                        response operations. Field testing has shown dramatic
                        improvements in response time and survivor detection
                        capabilities.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">
                            75%
                          </div>
                          <div className="text-red-200">Faster Response</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">
                            90%
                          </div>
                          <div className="text-red-200">Cost Reduction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">
                            24/7
                          </div>
                          <div className="text-red-200">Availability</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "future" && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Future Development
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Next Generation Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-brain text-blue-400"></i>
                              <span className="text-blue-200">
                                Advanced AI decision making
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-network-wired text-green-400"></i>
                              <span className="text-green-200">
                                Drone swarm coordination
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-satellite text-purple-400"></i>
                              <span className="text-purple-200">
                                Satellite communication integration
                              </span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-battery-full text-orange-400"></i>
                              <span className="text-orange-200">
                                Extended battery life (90+ minutes)
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-shield-alt text-red-400"></i>
                              <span className="text-red-200">
                                Enhanced weather resistance
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <i className="fas fa-microchip text-yellow-400"></i>
                              <span className="text-yellow-200">
                                Edge AI processing upgrades
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-red-500/20 p-6 rounded-lg border border-red-500/30">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Deployment Strategy
                        </h3>
                        <p className="text-red-200 mb-4">
                          We're working towards large-scale deployment with
                          emergency response agencies and disaster management
                          organizations worldwide.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">
                              Phase 1: Pilot Programs
                            </h4>
                            <ul className="space-y-2 text-red-200">
                              <li>
                                • Partnership with local emergency services
                              </li>
                              <li>• Training programs for operators</li>
                              <li>• Real-world deployment testing</li>
                              <li>• Performance optimization</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">
                              Phase 2: Scale-up
                            </h4>
                            <ul className="space-y-2 text-red-200">
                              <li>• Manufacturing partnerships</li>
                              <li>• International certification</li>
                              <li>• Global distribution network</li>
                              <li>• 24/7 support infrastructure</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/5 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Research Collaborations
                        </h3>
                        <p className="text-red-200 mb-4">
                          Ongoing research partnerships to advance disaster
                          response technology and AI capabilities.
                        </p>
                        <ul className="space-y-2 text-red-200">
                          <li>
                            • University research partnerships for AI
                            advancement
                          </li>
                          <li>• Collaboration with meteorological agencies</li>
                          <li>• Joint development with aerospace companies</li>
                          <li>• Integration with smart city infrastructure</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Project Contact
                </h2>
                <p className="text-red-200 mb-6">
                  Interested in learning more about our AI-powered disaster
                  response drone or discussing potential partnerships? We'd love
                  to connect with emergency response organizations and
                  technology partners.
                </p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <a
                    href="mailto:patilmayur987654321@gmail.com"
                    className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Contact Team
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <i className="fab fa-github mr-2"></i>
                    View Documentation
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
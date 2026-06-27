"use client";
import React from "react";

function MainComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [contactForm, setContactForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    service: "Custom Software Development",
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
      formData.append("service", contactForm.service);
      formData.append("message", contactForm.message);
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
        setContactForm({
          name: "",
          email: "",
          subject: "",
          service: "Custom Software Development",
          message: "",
        });
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
    <div className="min-h-screen bg-blue-50 text-zinc-900 font-sans selection:bg-amber-500/20 selection:text-amber-900">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] animate-fade-in backdrop-blur-sm">
          <div className="bg-white border border-zinc-200 rounded-2xl p-8 max-w-md mx-4 text-center animate-scale-in shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
            <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-check text-emerald-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-zinc-950 mb-2">
              Message Sent!
            </h3>
            <p className="text-zinc-600 mb-6 text-sm">
              Thank you for contacting Aaryavarta. Your service inquiry has been received. We typically respond within 24 to 48 hours.
            </p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold px-6 py-3 rounded-lg transition-all duration-300 w-full"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 shadow-sm px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-1 z-50 backdrop-blur-md border-b border-zinc-200/80 min-h-[48px] sm:min-h-[56px] lg:min-h-[64px]">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 select-none animate-slide-in-left w-auto justify-start cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img
              src="/aaryvarta_logo-removebg-2.png"
              alt="Aaryavarta Logo"
              className="h-9 sm:h-12 lg:h-14 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
              style={{ maxWidth: '180px' }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 font-mono text-sm tracking-wide font-medium">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-zinc-600 hover:text-amber-600 transition-all duration-300 relative group py-2"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("services-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="text-zinc-600 hover:text-amber-600 transition-all duration-300 relative group py-2"
            >
              SERVICES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("work-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="text-zinc-600 hover:text-amber-600 transition-all duration-300 relative group py-2"
            >
              WORK
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("about-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="text-zinc-600 hover:text-amber-600 transition-all duration-300 relative group py-2"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="text-zinc-600 hover:text-amber-600 transition-all duration-300 relative group py-2"
            >
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-zinc-600 hover:text-amber-600 transition-all duration-300 p-2"
          >
            <i
              className={`fas ${
                isMobileMenuOpen ? "fa-times" : "fa-bars"
              } text-xl transition-transform duration-300`}
            ></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-b border-zinc-200 ${
            isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 pb-4 px-2">
            <div className="flex flex-col space-y-2 pt-2 font-mono text-sm tracking-wide">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="text-zinc-600 hover:text-amber-600 transition-all duration-300 text-left py-2 px-3 hover:bg-zinc-50 rounded"
              >
                HOME
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("services-section")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="text-zinc-600 hover:text-amber-600 transition-all duration-300 text-left py-2 px-3 hover:bg-zinc-50 rounded"
              >
                SERVICES
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("work-section")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="text-zinc-600 hover:text-amber-600 transition-all duration-300 text-left py-2 px-3 hover:bg-zinc-50 rounded"
              >
                WORK
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("about-section")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="text-zinc-600 hover:text-amber-600 transition-all duration-300 text-left py-2 px-3 hover:bg-zinc-50 rounded"
              >
                ABOUT
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("contact-section")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="text-zinc-600 hover:text-amber-600 transition-all duration-300 text-left py-2 px-3 hover:bg-zinc-50 rounded"
              >
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[85vh] sm:min-h-[80vh] lg:min-h-screen flex flex-col justify-center px-4 sm:px-8 py-16 lg:px-12 pt-28 sm:pt-36 lg:pt-24 text-center relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/10 to-pink-50/10 opacity-70"></div>
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          {/* Status Label */}
          <div className="font-mono text-xs sm:text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-md inline-flex items-center gap-2 mb-8 animate-fade-in-up">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse-glow"></span>
            <span>SYSTEM_STATUS: ACTIVE // READY_FOR_HIRE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-zinc-950 mb-6 tracking-tight leading-tight max-w-3xl animate-fade-in-up font-sans" style={{ animationDelay: "0.2s" }}>
            We build the <span className="text-amber-600 drop-shadow-[0_2px_10px_rgba(217,119,6,0.1)]">systems</span> that run your business.
          </h1>
          
          <p className="text-base sm:text-xl text-zinc-700 mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Custom software, IoT, embedded & PLC automation — designed, built, and deployed by Aaryavarta. We solve automation and digitization problems for your business.
          </p>

          <div className="flex flex-col xs:flex-row gap-4 justify-center items-center w-full max-w-md animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <button
              onClick={() => document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" })}
              className="w-full xs:w-auto bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold tracking-wide px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_4px_20px_rgba(245,158,11,0.2)] cursor-pointer"
            >
              Get a Quote
            </button>
            <button
              onClick={() => document.getElementById("services-section").scrollIntoView({ behavior: "smooth" })}
              className="w-full xs:w-auto border border-zinc-300 hover:border-amber-500 text-zinc-700 hover:text-amber-600 font-medium tracking-wide px-8 py-3.5 bg-white/50 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-[1.03]"
            >
              See Our Capabilities
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services-section"
        className="px-4 py-16 sm:px-8 sm:py-24 lg:px-12 bg-white border-y border-zinc-200 relative"
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-xs sm:text-sm text-amber-600 tracking-widest block mb-3">// CAPABILITIES_LEDGER</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-zinc-950">
              What We Can Do <span className="text-amber-600">For You</span>
            </h2>
            <p className="text-zinc-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              We design and engineer bespoke solutions centered around reliability, efficiency, and solving real operational bottlenecks.
            </p>
          </div>

          {/* Grid of 6 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Service 1 - Custom Software */}
            <div className="bg-slate-50/50 border border-zinc-200 rounded-xl p-6 hover:border-amber-500 hover:bg-white hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-5 border-b border-zinc-200 pb-3 font-mono text-xs text-zinc-500">
                  <span>SVC_01_SOFT</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-emerald-600 font-bold">ONLINE</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-sans mb-3 text-zinc-950 group-hover:text-amber-600 transition-colors duration-300">
                  Custom Software Development
                </h3>
                <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                  Bespoke applications and internal operations tools built strictly around how your business actually works, eliminating bottleneck operations.
                </p>
                <div className="bg-zinc-100/60 p-3 rounded-lg border border-zinc-200/80 mb-6">
                  <span className="block font-mono text-[10px] uppercase text-amber-600 tracking-wider mb-1">Target Client</span>
                  <span className="text-zinc-800 text-xs font-semibold">Growing businesses outgrowing Excel sheets and needing custom automated pipelines.</span>
                </div>
              </div>
              <div>
                <span className="block font-mono text-[11px] uppercase text-zinc-400 mb-2">// CAPABILITIES</span>
                <ul className="space-y-2 text-zinc-700 text-sm font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> Custom ERP / CRM systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> Order tracking dashboards
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> Multi-user inventory portals
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 - Pre-built Products */}
            <div className="bg-slate-50/50 border border-zinc-200 rounded-xl p-6 hover:border-amber-500 hover:bg-white hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-5 border-b border-zinc-200 pb-3 font-mono text-xs text-zinc-500">
                  <span>SVC_02_PROD</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-emerald-600 font-bold">ONLINE</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-sans mb-3 text-zinc-950 group-hover:text-amber-600 transition-colors duration-300">
                  Pre-built Software Products
                </h3>
                <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                  Ready-to-deploy tools and administrative portals you can license and adapt rapidly instead of engineering from absolute zero.
                </p>
                <div className="bg-zinc-100/60 p-3 rounded-lg border border-zinc-200/80 mb-6">
                  <span className="block font-mono text-[10px] uppercase text-amber-600 tracking-wider mb-1">Target Client</span>
                  <span className="text-zinc-800 text-xs font-semibold">Small to mid-sized businesses wanting quick, affordable, and field-tested dashboards.</span>
                </div>
              </div>
              <div>
                <span className="block font-mono text-[11px] uppercase text-zinc-400 mb-2">// CAPABILITIES</span>
                <ul className="space-y-2 text-zinc-700 text-sm font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> RFID/Biometric attendance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> Access control panels
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> Asset tracking interfaces
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 - IoT Automation */}
            <div className="bg-slate-50/50 border border-zinc-200 rounded-xl p-6 hover:border-amber-500 hover:bg-white hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-5 border-b border-zinc-200 pb-3 font-mono text-xs text-zinc-500">
                  <span>SVC_03_IOT</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    <span className="text-amber-600 font-bold">READY</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-sans mb-3 text-zinc-950 group-hover:text-amber-600 transition-colors duration-300">
                  IoT Automation
                </h3>
                <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                  Connected sensors, microcontrollers, and physical devices designed to automatically monitor telemetry, issue alerts, and trigger responses.
                </p>
                <div className="bg-zinc-100/60 p-3 rounded-lg border border-zinc-200/80 mb-6">
                  <span className="block font-mono text-[10px] uppercase text-amber-600 tracking-wider mb-1">Target Client</span>
                  <span className="text-zinc-800 text-xs font-semibold">Logistics operators, warehouse owners, and farmers needing remote eyes on assets.</span>
                </div>
              </div>
              <div>
                <span className="block font-mono text-[11px] uppercase text-zinc-400 mb-2">// CAPABILITIES</span>
                <ul className="space-y-2 text-zinc-700 text-sm font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> Cold-chain temperature alerts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> Remote telemetry logging
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> Soil/machine condition sensors
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 4 - IT Automation */}
            <div className="bg-slate-50/50 border border-zinc-200 rounded-xl p-6 hover:border-amber-500 hover:bg-white hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-5 border-b border-zinc-200 pb-3 font-mono text-xs text-zinc-500">
                  <span>SVC_04_IT</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-emerald-600 font-bold">ONLINE</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-sans mb-3 text-zinc-950 group-hover:text-amber-600 transition-colors duration-300">
                  IT Automation & Scripting
                </h3>
                <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                  Custom backend scripts, integration pipelines, and schedulers that completely take over repetitive, manual administrative tasks.
                </p>
                <div className="bg-zinc-100/60 p-3 rounded-lg border border-zinc-200/80 mb-6">
                  <span className="block font-mono text-[10px] uppercase text-amber-600 tracking-wider mb-1">Target Client</span>
                  <span className="text-zinc-800 text-xs font-semibold">Operations and IT managers spending hours copy-pasting data between services.</span>
                </div>
              </div>
              <div>
                <span className="block font-mono text-[11px] uppercase text-zinc-400 mb-2">// CAPABILITIES</span>
                <ul className="space-y-2 text-zinc-700 text-sm font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> Automated invoice generation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> Automatic data scraping & sync
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> Scheduled system reports
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 5 - Embedded Systems */}
            <div className="bg-slate-50/50 border border-zinc-200 rounded-xl p-6 hover:border-amber-500 hover:bg-white hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-5 border-b border-zinc-200 pb-3 font-mono text-xs text-zinc-500">
                  <span>SVC_05_EMB</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-emerald-600 font-bold">ONLINE</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-sans mb-3 text-zinc-950 group-hover:text-amber-600 transition-colors duration-300">
                  Embedded Systems Engineering
                </h3>
                <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                  Bespoke electrical hardware, sensor interface integrations, custom printed circuit designs, and optimized firmware coding.
                </p>
                <div className="bg-zinc-100/60 p-3 rounded-lg border border-zinc-200/80 mb-6">
                  <span className="block font-mono text-[10px] uppercase text-amber-600 tracking-wider mb-1">Target Client</span>
                  <span className="text-zinc-800 text-xs font-semibold">Hardware developers, IoT product builders, and prototyping startups.</span>
                </div>
              </div>
              <div>
                <span className="block font-mono text-[11px] uppercase text-zinc-400 mb-2">// CAPABILITIES</span>
                <ul className="space-y-2 text-zinc-700 text-sm font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> Microcontroller boards & firmware
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> Custom sensor integration layouts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> Hardware debugging & PCB routing
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 6 - PLC & Industrial */}
            <div className="bg-slate-50/50 border border-zinc-200 rounded-xl p-6 hover:border-amber-500 hover:bg-white hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-5 border-b border-zinc-200 pb-3 font-mono text-xs text-zinc-500">
                  <span>SVC_06_PLC</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    <span className="text-amber-600 font-bold">READY</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-sans mb-3 text-zinc-950 group-hover:text-amber-600 transition-colors duration-300">
                  PLC & Industrial Automation
                </h3>
                <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                  Design, programming, and tuning of control systems for physical machinery and production processes to streamline manufacturing logic.
                </p>
                <div className="bg-zinc-100/60 p-3 rounded-lg border border-zinc-200/80 mb-6">
                  <span className="block font-mono text-[10px] uppercase text-amber-600 tracking-wider mb-1">Target Client</span>
                  <span className="text-zinc-800 text-xs font-semibold">Factory owners and plant operations managers seeking to modernize and reduce downtime.</span>
                </div>
              </div>
              <div>
                <span className="block font-mono text-[11px] uppercase text-zinc-400 mb-2">// CAPABILITIES</span>
                <ul className="space-y-2 text-zinc-700 text-sm font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> Control assembly line logic
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> Sensor monitoring cabinets
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500">&gt;</span> HMI screen and SCADA design
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Work Section */}
      <section
        id="work-section"
        className="px-4 py-16 sm:px-8 sm:py-24 lg:px-12 bg-blue-50 relative"
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-xs sm:text-sm text-amber-600 tracking-widest block mb-3">// SELECTED_WORK_LOG</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-zinc-950">
              Selected <span className="text-amber-600">Work</span>
            </h2>
            <p className="text-zinc-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              Below are proven technical projects completed by our engineers, demonstrating our ability to build robust, field-tested integration systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div
              className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-amber-500 hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 bg-zinc-100 relative overflow-hidden border-b border-zinc-200">
                  <img
                    src="/a-photograph-of-a-sleek-futuristic-vehic_NYciPrjhTYWc8g3SJsMKSw_2Z81PH09QcOM-JbI5NVeTg.jpeg"
                    alt="Advance Vehicle Safety System"
                    className="object-cover w-full h-full opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 border border-zinc-200 font-mono text-[10px] text-amber-600 px-2 py-0.5 rounded font-bold">
                    EMBEDDED_SYS
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold font-sans mb-2 text-zinc-950 group-hover:text-amber-600 transition-colors duration-300">
                    Advance Vehicle Safety System
                  </h3>
                  <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                    Developed as a proof of concept for automotive safety, demonstrating our ability to integrate high-frequency sensors with real-time collision warning algorithms.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <div className="mb-4">
                  <span className="block font-mono text-[10px] uppercase text-zinc-400 mb-1.5">// METRICS</span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">
                      IoT Sensors
                    </span>
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">
                      AI/ML Algorithms
                    </span>
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">
                      Real-time MCU
                    </span>
                  </div>
                </div>
                <a
                  href="/projects/vehicle-safety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-mono font-bold text-amber-600 hover:text-amber-700 gap-1.5"
                >
                  <span>Read Case Study</span>
                  <i className="fas fa-external-link-alt text-[9px]"></i>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div
              className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-amber-500 hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 bg-zinc-100 relative overflow-hidden border-b border-zinc-200">
                  <img
                    src="/a-photograph-of-a-sleek-modern-hostel-lo_jG8lIKpjQySnwZzrVmHeog_HgtE8COZRfSYk0ybkGMHdw.jpeg"
                    alt="IoT Based Hostel Access and Attendance Monitoring"
                    className="object-cover w-full h-full opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 border border-zinc-200 font-mono text-[10px] text-amber-600 px-2 py-0.5 rounded font-bold">
                    IOT_PRODUCT
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold font-sans mb-2 text-zinc-950 group-hover:text-amber-600 transition-colors duration-300">
                    IoT Access & Attendance Monitoring
                  </h3>
                  <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                    A deployed access control solution proving our capability to interface RFID hardware, cloud databases, and real-time dashboard tracking.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <div className="mb-4">
                  <span className="block font-mono text-[10px] uppercase text-zinc-400 mb-1.5">// METRICS</span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">
                      RFID / ESP32
                    </span>
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">
                      Cloud Portal
                    </span>
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">
                      Biometrics
                    </span>
                  </div>
                </div>
                <a
                  href="/projects/hostel-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-mono font-bold text-amber-600 hover:text-amber-700 gap-1.5"
                >
                  <span>Read Case Study</span>
                  <i className="fas fa-external-link-alt text-[9px]"></i>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div
              className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-amber-500 hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 bg-zinc-100 relative overflow-hidden border-b border-zinc-200">
                  <img
                    src="/a-photograph-of-a-sleek-black-ai-based-d_ZbCeUcAaT0qMinjMNOCGJg_Z5SFuRpQRr2Jbftu5NMTRA.jpeg"
                    alt="AI-based Drone for Disaster Conditions"
                    className="object-cover w-full h-full opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 border border-zinc-200 font-mono text-[10px] text-amber-600 px-2 py-0.5 rounded font-bold">
                    AUTONOMOUS_HW
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold font-sans mb-2 text-zinc-950 group-hover:text-amber-600 transition-colors duration-300">
                    AI-based Disaster Recovery Drone
                  </h3>
                  <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                    A prototype showing our ability to build autonomous hardware, integrate thermal/vision sensors, and process AI detection models on edge devices.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <div className="mb-4">
                  <span className="block font-mono text-[10px] uppercase text-zinc-400 mb-1.5">// METRICS</span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">
                      Edge AI / Vision
                    </span>
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">
                      Pixhawk Flight
                    </span>
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">
                      Thermal Telemetry
                    </span>
                  </div>
                </div>
                <a
                  href="/projects/ai-drone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-mono font-bold text-amber-600 hover:text-amber-700 gap-1.5"
                >
                  <span>Read Case Study</span>
                  <i className="fas fa-external-link-alt text-[9px]"></i>
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div
              className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-amber-500 hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 bg-zinc-100 relative overflow-hidden border-b border-zinc-200">
                  <img
                    src="/otp-based-home-door-lock-system-esp8266-_a7MfYoVqQ7KyTAC1WUDPvg_Vl_FzxiMSbKSnpcQ4CGIzQ.jpeg"
                    alt="OTP Based Home Door Lock System"
                    className="object-cover w-full h-full opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 border border-zinc-200 font-mono text-[10px] text-amber-600 px-2 py-0.5 rounded font-bold">
                    SECURITY_AUTO
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold font-sans mb-2 text-zinc-950 group-hover:text-amber-600 transition-colors duration-300">
                    OTP Based Smart Latch System
                  </h3>
                  <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                    An automated security latch demonstrating our ability to link physical locks, Wi-Fi microcontrollers, and third-party SMS/OTP APIs.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <div className="mb-4">
                  <span className="block font-mono text-[10px] uppercase text-zinc-400 mb-1.5">// METRICS</span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">
                      ESP8266 Wi-Fi
                    </span>
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">
                      Twilio SMS API
                    </span>
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">
                      Relay Controller
                    </span>
                  </div>
                </div>
                <a
                  href="/projects/otp-door-lock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-mono font-bold text-amber-600 hover:text-amber-700 gap-1.5"
                >
                  <span>Read Case Study</span>
                  <i className="fas fa-external-link-alt text-[9px]"></i>
                </a>
              </div>
            </div>

            {/* Project 5 */}
            <div
              className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-amber-500 hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 bg-zinc-100 relative overflow-hidden border-b border-zinc-200">
                  <img
                    src="/mouse.jpeg"
                    alt="Mouse Poking Device Using LDR"
                    className="object-cover w-full h-full opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 border border-zinc-200 font-mono text-[10px] text-amber-600 px-2 py-0.5 rounded font-bold">
                    CUSTOM_HARDWARE
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold font-sans mb-2 text-zinc-950 group-hover:text-amber-600 transition-colors duration-300">
                    Targeted Light-Triggered Actuator
                  </h3>
                  <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                    A custom embedded device showing how simple sensor inputs (photoresistors) can drive physical actuators automatically for specialized deterrence niches.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <div className="mb-4">
                  <span className="block font-mono text-[10px] uppercase text-zinc-400 mb-1.5">// METRICS</span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">
                      LDR Photoresistor
                    </span>
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">
                      Solenoid Driver
                    </span>
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">
                      Analog Controls
                    </span>
                  </div>
                </div>
                <a
                  href="/projects/mouse-poking-device"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-mono font-bold text-amber-600 hover:text-amber-700 gap-1.5"
                >
                  <span>Read Case Study</span>
                  <i className="fas fa-external-link-alt text-[9px]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about-section"
        className="px-4 py-16 sm:px-8 sm:py-24 lg:px-12 bg-blue-50 border-t border-zinc-200"
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="font-mono text-xs sm:text-sm text-amber-600 tracking-widest block mb-3">// CORE_INTELLIGENCE</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-zinc-950">
              About <span className="text-amber-600">Aaryavarta</span>
            </h2>
            <p className="text-zinc-700 mt-5 max-w-3xl mx-auto text-base sm:text-lg">
              Aaryavarta is a small, focused team of embedded and software engineers who take on the automation work bigger agencies overlook. We bridge the gap between physical hardware and digital business tools.
            </p>
          </div>

          {/* Kalam Philosophy Banner */}
          <div className="max-w-3xl mx-auto bg-white border border-zinc-200 rounded-xl p-6 sm:p-8 mb-16 text-center font-sans relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>
            <i className="fa-solid fa-quote-left text-amber-500/20 text-4xl block mb-3"></i>
            <p className="text-base sm:text-lg text-zinc-800 italic mb-4 leading-relaxed">
              "Dream is not that which you see while sleeping, it is something that does not let you sleep."
            </p>
            <span className="font-mono text-xs text-amber-600 tracking-wider font-bold">
              — DR. A.P.J. ABDUL KALAM
            </span>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mayur Patil */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6 hover:border-amber-500 hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 group text-center flex flex-col justify-between">
              <div>
                <div className="mb-5 relative inline-block">
                  <img
                    src="/passphoto-new.png"
                    alt="Mayur Patil"
                    className="w-20 h-20 rounded-full object-cover border-2 border-zinc-200 group-hover:border-amber-500 transition-all duration-300 mx-auto"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                </div>
                <h3 className="text-lg font-bold font-sans text-zinc-950 group-hover:text-amber-600 transition-colors duration-300">
                  Mayur Patil
                </h3>
                <p className="text-amber-600 font-mono text-xs mb-4 tracking-wide uppercase">
                  Lead Embedded & IoT Architect
                </p>
                <p className="text-zinc-600 text-xs sm:text-sm mb-6 leading-relaxed">
                  Directs development operations, translating client business criteria into custom firmware, IoT telemetry networks, and PCB layouts.
                </p>
              </div>

              <div>
                <div className="mb-5 border-t border-zinc-100 pt-4">
                  <span className="block font-mono text-[9px] uppercase text-zinc-400 mb-2">// TECHNICAL_SKILLS</span>
                  <div className="flex flex-wrap gap-1.5 justify-center font-mono text-[9px]">
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">IoT Networks</span>
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">Firmware Dev</span>
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">PCB Layout</span>
                  </div>
                </div>
                <a
                  href="/portfolio/mayur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 group/btn"
                >
                  <span>View Portfolio</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[9px] group-hover/btn:translate-x-0.5 transition-transform"></i>
                </a>
              </div>
            </div>

            {/* Ganesh Wankhade */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6 hover:border-amber-500 hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 group text-center flex flex-col justify-between">
              <div>
                <div className="mb-5 relative inline-block">
                  <img
                    src="/ganesh.jpg"
                    alt="Ganesh Wankhade"
                    className="w-20 h-20 rounded-full object-cover border-2 border-zinc-200 group-hover:border-amber-500 transition-all duration-300 mx-auto"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                </div>
                <h3 className="text-lg font-bold font-sans text-zinc-955 group-hover:text-amber-600 transition-colors duration-300">
                  Ganesh Wankhade
                </h3>
                <p className="text-amber-600 font-mono text-xs mb-4 tracking-wide uppercase">
                  Hardware Integration Expert
                </p>
                <p className="text-zinc-600 text-xs sm:text-sm mb-6 leading-relaxed">
                  Focuses on embedded hardware testing, networking interfaces, protocol operations, and client device installations.
                </p>
              </div>

              <div>
                <div className="mb-5 border-t border-zinc-100 pt-4">
                  <span className="block font-mono text-[9px] uppercase text-zinc-400 mb-2">// TECHNICAL_SKILLS</span>
                  <div className="flex flex-wrap gap-1.5 justify-center font-mono text-[9px]">
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">Hardware Design</span>
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">Integration</span>
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">Networking</span>
                  </div>
                </div>
                <a
                  href="/portfolio/ganesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 group/btn"
                >
                  <span>View Portfolio</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[9px] group-hover/btn:translate-x-0.5 transition-transform"></i>
                </a>
              </div>
            </div>

            {/* Yash Dhake */}
            <div className="bg-white border border-zinc-200 rounded-xl p-6 hover:border-amber-500 hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 group text-center flex flex-col justify-between">
              <div>
                <div className="mb-5 relative inline-block">
                  <img
                    src="/yash.jpg"
                    alt="Yash Dhake"
                    className="w-20 h-20 rounded-full object-cover border-2 border-zinc-200 group-hover:border-amber-500 transition-all duration-300 mx-auto"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                </div>
                <h3 className="text-lg font-bold font-sans text-zinc-950 group-hover:text-amber-600 transition-colors duration-300">
                  Yash Dhake
                </h3>
                <p className="text-amber-600 font-mono text-xs mb-4 tracking-wide uppercase">
                  Technical Documentation Specialist
                </p>
                <p className="text-zinc-600 text-xs sm:text-sm mb-6 leading-relaxed">
                  Coordinates code audits, client-facing system manuals, component registries, and hardware-software integration blueprints.
                </p>
              </div>

              <div>
                <div className="mb-5 border-t border-zinc-100 pt-4">
                  <span className="block font-mono text-[9px] uppercase text-zinc-400 mb-2">// TECHNICAL_SKILLS</span>
                  <div className="flex flex-wrap gap-1.5 justify-center font-mono text-[9px]">
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">Technical Writing</span>
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">System Blueprints</span>
                    <span className="bg-zinc-50 border border-zinc-200 text-zinc-600 px-2 py-0.5 rounded">QA Auditing</span>
                  </div>
                </div>
                <a
                  href="/portfolio/yash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 group/btn"
                >
                  <span>View Portfolio</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[9px] group-hover/btn:translate-x-0.5 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-section"
        className="px-4 py-16 sm:px-8 sm:py-24 lg:px-12 bg-white border-t border-zinc-200"
      >
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="font-mono text-xs sm:text-sm text-amber-600 tracking-widest block mb-3">// CONTACT_UPLINK</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-zinc-950">
              Get in <span className="text-amber-600">Touch</span>
            </h2>
            <p className="text-zinc-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Send us a breakdown of your operational bottlenecks. Let's discuss pricing, technical feasibility, and system architectural specifications.
            </p>
          </div>

          <div className="bg-slate-50/50 border border-zinc-200 rounded-xl p-6 sm:p-8 max-w-2xl mx-auto hover:border-zinc-300 transition-all duration-300">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-500 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border border-zinc-200 focus:border-amber-500 rounded-lg px-4 py-3 text-zinc-800 outline-none transition-all duration-300 text-sm focus:shadow-[0_2px_10px_rgba(245,158,11,0.05)]"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-500 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border border-zinc-200 focus:border-amber-500 rounded-lg px-4 py-3 text-zinc-800 outline-none transition-all duration-300 text-sm focus:shadow-[0_2px_10px_rgba(245,158,11,0.05)]"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-500 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border border-zinc-200 focus:border-amber-500 rounded-lg px-4 py-3 text-zinc-800 outline-none transition-all duration-300 text-sm focus:shadow-[0_2px_10px_rgba(245,158,11,0.05)]"
                  placeholder="e.g. Automation System Upgrade / Hardware Development"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-500 mb-2">
                  Service Category
                </label>
                <select
                  name="service"
                  value={contactForm.service}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-zinc-200 focus:border-amber-500 rounded-lg px-4 py-3 text-zinc-800 outline-none transition-all duration-300 text-sm cursor-pointer focus:shadow-[0_2px_10px_rgba(245,158,11,0.05)]"
                >
                  <option value="Custom Software Development">Custom Software Development</option>
                  <option value="Pre-built Software Product">Pre-built Software Product</option>
                  <option value="IoT & Telemetry Automation">IoT & Telemetry Automation</option>
                  <option value="IT Automation & Scripting">IT Operations Automation</option>
                  <option value="Embedded Systems & Hardware">Embedded Systems & Hardware</option>
                  <option value="PLC & Industrial Automation">PLC & Industrial Automation</option>
                  <option value="Not sure / Other Inquiry">Not sure / Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-500 mb-2">
                  Message / Details
                </label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                  className="w-full bg-white border border-zinc-200 focus:border-amber-500 rounded-lg px-4 py-3 text-zinc-800 outline-none transition-all duration-300 text-sm focus:shadow-[0_2px_10px_rgba(245,158,11,0.05)]"
                  placeholder="Tell us what physical systems or digital processes you need engineered or automated..."
                ></textarea>
              </div>

              {submitMessage && (
                <div className="text-red-600 text-xs font-mono text-center animate-fade-in">
                  Error: {submitMessage}
                </div>
              )}

              <div className="flex flex-col items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-neutral-200 disabled:text-zinc-400 text-neutral-950 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_4px_15px_rgba(245,158,11,0.15)] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
                <span className="text-[11px] font-mono text-zinc-500 block text-center">Response typically sent within 24–48 hours.</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 px-4 md:px-6 py-12 lg:py-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-zinc-100 mb-4 font-mono">
                AARYAVARTA
              </div>
              <p className="text-zinc-500 mb-4 text-sm leading-relaxed">
                Engineering bespoke hardware-software systems, physical telemetry controllers, and custom business pipelines.
              </p>
              <div className="flex space-x-3.5 justify-center md:justify-start">
                <a
                  href="#"
                  className="text-zinc-500 hover:text-amber-500 transition-all duration-300"
                >
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-amber-500 transition-all duration-300"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-amber-500 transition-all duration-300"
                >
                  <i className="fab fa-twitter text-lg"></i>
                </a>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-mono text-xs text-amber-500 uppercase tracking-widest mb-4">LINKS</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-zinc-200 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => document.getElementById("services-section").scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-zinc-200 transition-colors cursor-pointer"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => document.getElementById("work-section").scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-zinc-200 transition-colors cursor-pointer"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => document.getElementById("about-section").scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-zinc-200 transition-colors cursor-pointer"
                  >
                    About Aaryavarta
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-mono text-xs text-amber-500 uppercase tracking-widest mb-4">SOLUTIONS</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>Custom ERP & Portals</li>
                <li>RFID Access Control</li>
                <li>Edge AI Drone Systems</li>
                <li>OTP Hardware Lock integration</li>
                <li>Targeted Sensor Actuators</li>
              </ul>
            </div>

            <div className="text-center md:text-left font-mono">
              <h4 className="text-xs text-amber-500 uppercase tracking-widest mb-4">INFO</h4>
              <ul className="space-y-2 text-xs text-zinc-500">
                <li>SYS_NODE: contact@aaryavarta</li>
                <li>SYS_TEL: +91 80106 22267</li>
                <li>SYS_LOC: Maharashtra, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-900 mt-10 pt-8 text-center text-zinc-600 text-xs font-mono">
            <p>&copy; 2026 Aaryavarta. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Global CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 4px rgba(16, 185, 129, 0.3);
          }
          50% {
            opacity: 0.5;
            box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.5s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        /* Background grid effect for light theme */
        .bg-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.015) 1px, transparent 1px);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Global transition optimizations */
        * {
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
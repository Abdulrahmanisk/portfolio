import React, { useState, useRef } from 'react';
import { Github, ExternalLink, Mail, Send } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import ProjectSlider from './components/ProjectSlider';
import { projects } from './data/projects';

// Initialize EmailJS
emailjs.init("elpisyAvKpkM5sVD0");

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      to_name: "Abdulrahmanisk",
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    try {
      const result = await emailjs.send(
        "service_a76m9q9",
        "template_blhb9wt",
        templateParams
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF7ED] text-[#2A1810] relative">
      {/* Toast notifications */}
      <Toaster position="top-right" />
      
      {/* Vintage paper texture overlay */}
      <div className="grain-overlay"></div>

      <div className="relative container mx-auto px-4 py-16 space-y-24">
        {/* About Section */}
        <section className="space-y-8" id="about">
          <h2 className="relative section-title text-[#B4432B] text-3xl md:text-4xl font-black" style={{"--skew": "-15deg"} as React.CSSProperties}>
            About Me
          </h2>
          
          <div className="bg-white border-4 border-[#2A1810] rounded-xl p-8 shadow-[8px_8px_0px_0px_rgba(42,24,16,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(42,24,16,1)] transition-all duration-300 cuphead-border" style={{"--rotation": "-1deg"} as React.CSSProperties}>
            <h1 className="text-4xl font-bold mb-6 text-[#B4432B]">
              Abdulrahman Iskandar
            </h1>
            <h3 className="text-xl text-[#2A1810] mb-4">iOS Developer | Swift Specialist | XR Participant @Tuwaiq Academy | Network Engineer @SRMG</h3>
            
            <div className="space-y-6">
              <p className="leading-relaxed">
                I'm an Apple app developer and a student in the Extended Reality and Game Development boot camp at Tuwaiq Academy. 
                I'm always looking to create innovative solutions and work on interactive projects that add real value to users.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#FDF7ED] p-6 rounded-lg border-4 border-[#2A1810] transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <h4 className="text-[#B4432B] font-bold mb-2">Core Skills</h4>
                  <ul className="list-disc list-inside space-y-1 marker:text-[#B4432B]">
                    <li>iOS Development</li>
                    <li>Swift & SwiftUI</li>
                    <li>XR Development</li>
                    <li>Network Engineering</li>
                  </ul>
                </div>
                
                <div className="bg-[#FDF7ED] p-6 rounded-lg border-4 border-[#2A1810] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <h4 className="text-[#B4432B] font-bold mb-2">Technologies</h4>
                  <ul className="list-disc list-inside space-y-1 marker:text-[#B4432B]">
                    <li>Unity & C#</li>
                    <li>Flutter & Dart</li>
                    <li>REST APIs</li>
                    <li>Network Infrastructure</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/abdulrahman-iskandar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#005885] transform hover:scale-105 transition-all duration-300 border-4 border-[#2A1810]"
                >
                  <span>LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com/YourGitHubUsername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-[#24292e] text-white rounded-lg hover:bg-[#1a1e22] transform hover:scale-105 transition-all duration-300 border-4 border-[#2A1810]"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="mailto:Primary.isk@gmail.com"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-[#B4432B] text-white rounded-lg hover:bg-[#8E3522] transform hover:scale-105 transition-all duration-300 border-4 border-[#2A1810]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-8" id="projects">
          <h2 className="relative section-title text-[#B4432B] text-3xl md:text-4xl font-black" style={{"--skew": "15deg"} as React.CSSProperties}>
            Projects
          </h2>

          <div className="grid gap-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white border-4 border-[#2A1810] rounded-xl p-8 shadow-[8px_8px_0px_0px_rgba(42,24,16,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(42,24,16,1)] transition-all duration-300 cuphead-border"
                style={{"--rotation": `${index % 2 === 0 ? "-1deg" : "1deg"}`} as React.CSSProperties}
              >
                <div className="grid md:grid-cols-2 gap-12">
                  <ProjectSlider images={project.images} />
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[#B4432B]">{project.title}</h3>
                    <p className="text-[#2A1810]">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-[#FDF7ED] border-2 border-[#2A1810] rounded-full text-[#2A1810] text-sm font-medium transform hover:scale-105 transition-transform duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4 pt-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-[#B4432B] text-white rounded-lg hover:bg-[#8E3522] transform hover:scale-105 transition-all duration-300 border-4 border-[#2A1810]"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-[#2A1810] text-white rounded-lg hover:bg-[#1A100A] transform hover:scale-105 transition-all duration-300 border-4 border-[#B4432B]"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-8" id="contact">
          <h2 className="relative section-title text-[#B4432B] text-3xl md:text-4xl font-black" style={{"--skew": "0deg"} as React.CSSProperties}>
            Contact Me
          </h2>

          <div className="bg-white border-4 border-[#2A1810] rounded-xl p-8 shadow-[8px_8px_0px_0px_rgba(42,24,16,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(42,24,16,1)] transition-all duration-300 cuphead-border">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-[#2A1810] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  required
                  className="w-full px-4 py-2 border-4 border-[#2A1810] rounded-lg focus:outline-none focus:border-[#B4432B] transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-[#2A1810] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="reply_to"
                  id="email"
                  required
                  className="w-full px-4 py-2 border-4 border-[#2A1810] rounded-lg focus:outline-none focus:border-[#B4432B] transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-[#2A1810] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border-4 border-[#2A1810] rounded-lg focus:outline-none focus:border-[#B4432B] transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center space-x-2 w-full px-6 py-3 bg-[#B4432B] text-white rounded-lg hover:bg-[#8E3522] transform hover:scale-105 transition-all duration-300 border-4 border-[#2A1810] font-bold text-lg ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
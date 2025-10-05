import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // MODIFICATION: This function now sends data to your backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Sending Message...',
      text: 'Please wait...',
      allowOutsideClick: false,
      background: '#030014',
      color: '#ffffff',
      didOpen: () => Swal.showLoading(),
    });

    try {
      const response = await fetch('https://my-portfolio-tvd0.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully!',
          icon: 'success',
          confirmButtonColor: '#6366f1',
          background: '#030014',
          color: '#ffffff',
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#d33',
        background: '#030014',
        color: '#ffffff',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="Contact">
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2 data-aos="fade-down" data-aos-duration="1000" className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Contact Me
        </h2>
        <p data-aos="fade-up" data-aos-duration="1100" className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>
      <div className="h-auto py-10 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          <div data-aos="fade-up" data-aos-duration="1200" className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Get in Touch
                </h2>
                <p className="text-gray-400">
                  Have something to discuss? Send me a message.
                </p>
              </div>
              <Share2 className="w-10 h-10 text-[#6366f1] opacity-50" />
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div data-aos="fade-up" data-aos-delay="100" className="relative group">
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} disabled={isSubmitting} className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30" required />
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="relative group">
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} disabled={isSubmitting} className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30" required />
              </div>
              <div data-aos="fade-up" data-aos-delay="300" className="relative group">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} disabled={isSubmitting} className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 h-[9.9rem]" required />
              </div>
              <button data-aos="fade-up" data-aos-delay="400" type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50">
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            <div className="mt-10 pt-6 border-t border-white/10">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;

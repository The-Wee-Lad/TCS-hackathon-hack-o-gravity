import React, { useState } from "react";
import PublicLayout from "../components/layout/PublicLayout";
const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate successful submission here (add API logic as needed)
  };

  return (
    <PublicLayout>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 px-2">
      <div className="bg-white/95 shadow-2xl rounded-xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-900">
          Contact <span className="text-cyan-500">SafeSpeak</span>
          Contact <span className="text-cyan-500">SafeWhistle</span>
        </h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          Revolutionizing how citizens report corruption and unethical practices in government and public services. We build on security, anonymity, and trust so you can lodge confidential complaints without fear.
        </p>]
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-lg shadow-inner p-6 mx-auto"
          style={{ maxWidth: 440 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
            Get in Touch
          </h3>
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            className="border p-2 w-full mb-3 rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={form.message}
            onChange={handleChange}
          />
          {submitted && <div className="text-green-600 mb-2">Message sent! We'll reach out soon.</div>}
          <button
            type="submit"
            className="bg-cyan-600 text-white py-2 w-full rounded hover:bg-cyan-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </PublicLayout>
  );
};

export default ContactUs;

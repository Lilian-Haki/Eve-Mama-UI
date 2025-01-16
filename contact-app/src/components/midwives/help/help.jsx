import React, { useState } from "react";

const HelpSection = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by going to the 'Appointments' section and selecting your preferred time slot.",
      isOpen: false,
    },
    {
      question: "How do I reset my password?",
      answer: "Click on 'Forgot Password' on the login page and follow the instructions to reset your password.",
      isOpen: false,
    },
    {
      question: "How do I view my test results?",
      answer: "Navigate to the 'Lab Tests' section to view your test results.",
      isOpen: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! Our support team will contact you soon.");
    setContactForm({ name: "", email: "", message: "" }); // Clear the form
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6 space-y-8">
        <h1 className="text-2xl font-bold text-gray-800">Help Center</h1>

        {/* FAQ Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-md p-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-md font-medium text-gray-800">{faq.question}</h3>
                  <button className="text-gray-600">{faq.isOpen ? "-" : "+"}</button>
                </div>
                {faq.isOpen && <p className="text-sm text-gray-700 mt-2">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support Form */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Contact Support</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={contactForm.name}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={contactForm.message}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;

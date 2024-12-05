"use client"; // Add this directive to make the component client-side

import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    companyName: "",
    companyWebsite: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.result === "success") {
        setSubmitSuccess("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          companyName: "",
          companyWebsite: "",
          message: "",
        });
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        {/* Contact Form */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Enquire Now</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="p-4 border rounded shadow-sm">
                <label className="block text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>

              {/* Email */}
              <div className="p-4 border rounded shadow-sm">
                <label className="block text-gray-700 mb-2">Business Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>

              {/* Phone */}
              <div className="p-4 border rounded shadow-sm">
                <label className="block text-gray-700 mb-2">Business Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>

              {/* City */}
              <div className="p-4 border rounded shadow-sm">
                <label className="block text-gray-700 mb-2">Your City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>

              {/* Company Name */}
              <div className="p-4 border rounded shadow-sm">
                <label className="block text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>

              {/* Company Website */}
              <div className="p-4 border rounded shadow-sm">
                <label className="block text-gray-700 mb-2">Company Website URL</label>
                <input
                  type="text"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  placeholder="Enter your company website (if applicable)"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>

            {/* Message */}
            <div className="p-4 border rounded shadow-sm mt-6">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message (optional)"
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            {/* Submission Feedback */}
            {submitError && <p className="text-red-500 text-center mt-4">{submitError}</p>}
            {submitSuccess && <p className="text-green-500 text-center mt-4">{submitSuccess}</p>}

            <div className="mt-6 text-center">
              <button
                type="submit"
                className={`w-full bg-blue-500 text-white py-2 rounded ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Enquire Now"}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Card */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-body-color">
            We are here to assist you. Reach out to us through any of the following methods.
          </p>
          <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-primary text-2xl mr-4" />
              <a href="mailto:info@inerpulse.com" className="text-lg text-body-color">
                info@inerpulse.com
              </a>
            </div>
            <div className="flex items-center mb-6">
              <FaPhone className="text-primary text-2xl mr-4" />
              <a href="tel:+917418303615" className="text-lg text-body-color">
                +91 74183 03615
              </a>
            </div>
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-primary text-2xl mr-4 mt-1" />
              <address className="not-italic text-lg text-body-color">
                99/1A, Perumal Kovil Pathy, Alandurai<br />
                Coimbatore, 641101
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

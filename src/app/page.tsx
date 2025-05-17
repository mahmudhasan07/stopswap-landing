/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.stopswapapp.com/api/v1/contact', formData);
      console.log('Success:', response.data);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error : any) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8 relative mt-20">
      <h2 className="md:text-4xl text-2xl font-bold text-center mb-6">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 shadow-md rounded-lg"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring focus:border-blue-500"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Your message here..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
}

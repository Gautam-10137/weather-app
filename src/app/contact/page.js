import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg px-4 py-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-1">Your Name</label>
            <input type="text"  name="name" placeholder="Enter your name" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="flex flex-col">
            <label  className="text-lg font-semibold mb-1">Your Email</label>
            <input type="email"  name="email" placeholder="Enter your email" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
          </div>
          
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>
    </div>
  )

}
export default Contact;

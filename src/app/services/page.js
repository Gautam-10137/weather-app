import React from 'react'

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="max-w-2xl px-4 py-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Weather Updates</h2>
          <p className="text-lg">
            Get real-time weather updates to plan your day with confidence.
          </p>
        </div>
        <div className="p-6 bg-gray-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Detailed Forecasts</h2>
          <p className="text-lg">
            Access detailed weather forecasts for the next 7 days.
          </p>
        </div>
        <div className="p-6 bg-gray-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Custom Alerts</h2>
          <p className="text-lg">
            Set up custom weather alerts for specific conditions.
          </p>
        </div>
        <div className="p-6 bg-gray-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">User-Friendly Interface</h2>
          <p className="text-lg">
            Enjoy a seamless experience with our intuitive interface.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services

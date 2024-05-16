import Image from "next/image";
import WeatherDetail from "./components/WeatherDetail";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-10 text-gray-900">
          Welcome to WeatherNow!
        </h1>
        <p className="text-lg mt-4 text-gray-700">
          Your go-to app for the most accurate and up-to-date weather information. Stay prepared with real-time weather updates and forecasts.
        </p>
      </div>

      <WeatherDetail />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Real-Time Updates</h2>
          <p className="text-gray-700">
            Get the latest weather updates as they happen, so you can plan your day with confidence.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Detailed Forecasts</h2>
          <p className="text-gray-700">
            Access detailed weather forecasts for the next 7 days to stay ahead of the weather.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Custom Alerts</h2>
          <p className="text-gray-700">
            Set up custom weather alerts to receive notifications for specific weather conditions.
          </p>
        </div>
      </div>
    </main>
  );
}

"use client"
import React,{useState} from 'react'
import { API_BASE_URL,API_KEY } from '@/config/constants';
const WeatherDetail = () => {
  const [data,setData]=useState({});
  const [city,setCity]=useState("");
   
  const handler=async (e)=>{
    e.preventDefault();
    const response=await fetch(API_BASE_URL+"?city="+city,
      {
        method: 'GET',
	      headers: {
		       'x-rapidapi-key': API_KEY,
		       'Content-Type': 'application/json'
	      }
      }
    );
    const result=await response.json();
    setData(result);
    console.log(result);
    
  }
return (
  <div className=' flex items-stretch justify-between space-x-40  '>     
     <div className='bg-gray-50 p-4 rounded-lg shadow-md items-center w-1/2 '>
      <p className="text-lg font-semibold">Get Real-Time Weather Details:</p>
      <form onSubmit={handler} className="mt-4">
          <label className="block mb-2">Enter City:</label>
          <input
             type="text"
             onChange={(e)=>setCity(e.target.value)}
             value={city}
             className="border border-gray-300 rounded-md px-4 py-2 w-full"
          ></input>
          <button
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            type="submit"
          >
            Submit
          </button>
      </form>
    </div>
      <div className='bg-gray-50 p-4 rounded-lg shadow-md items-center justify-between w-1/2 '>
       {Object.keys(data).length > 0?(<div >
        <h2 className="text-xl font-semibold mb-4">Weather Details:</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>city: {city}</p>
          <p>Cloudiness: {data.cloud_pct}%</p>
          <p>Temperature: {data.temp}°C</p>
          <p>Feels Like: {data.feels_like}°C</p>
          <p>Humidity: {data.humidity}%</p>
        </div>
       </div></div>)
       :<div className=''> 
        <h2 className="text-xl font-semibold mb-4">Weather Details including:</h2>
      <div className=" flex-col justify-between space-y-4">
        <div className='flex justify-between space-x-4'>
           <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg w-1/2">
             Cloudiness
           </button>
           <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg w-1/2">
             Temperature
           </button>
        </div>
        <div>
           <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold  py-2 px-4 rounded-lg w-1/2">
             Humidity
           </button>
        </div>
      </div>
      </div>
        }
     </div>
  </div>
)
}

export default WeatherDetail

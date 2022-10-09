import React from 'react'
import plane from "../imgs/plane.png"
import { useState, useEffect } from 'react';
import axios from 'axios';
const Home = () => {
  const [FromList, setFromList] = useState();
  const [ToList, setToList] = useState();
  console.log(FromList)
  var data = [
    {

      "flight": [
        {
          "segments": [
            {
              "name": "Spice Jet",
              "plane": "ATR725",
              "price": "5000",
              "departureDate": "2022-04-26",
              "time": "07:00",
              "origin": "MUMBAI",
              "arrivalDate": "2022-04-26",
              "destination": "DELHI",
              "duration": "04h 30m"
            },
            {
              "name": "Spice Jet",
              "plane": "ATR726",
              "price": "4500",
              "departureDate": "2022-04-26",
              "time": "07:00",
              "origin": "MUMBAI",
              "arrivalDate": "2022-04-26T07:55",
              "destination": "DELHI",
              "duration": "04h 30m"
            },
            {
              "name": "IndiGo",
              "plane": "IND726",
              "price": "4700",
              "departureDate": "2022-04-26",
              "time": "07:00",
              "origin": "MUMBAI",
              "arrivalDate": "2022-04-26T07:55",
              "destination": "DELHI",
              "duration": "04h 30m"
            },
            {
              "name": "Go First",
              "plane": "IND726",
              "price": "4250",
              "departureDate": "2022-04-26",
              "time": "07:00",
              "origin": "MUMBAI",
              "arrivalDate": "2022-04-26T07:55",
              "destination": "DELHI",
              "duration": "04h 30m"
            },
            {
              "name": "Spice Jet",
              "plane": "ATR725",
              "price": "5000",
              "departureDate": "2022-04-26",
              "time": "07:00",
              "origin": "DELHI",
              "arrivalDate": "2022-04-26",
              "destination": "MUMBAI",
              "duration": "04h 30m"
            },
            {
              "name": "Spice Jet",
              "plane": "ATR726",
              "price": "4500",
              "departureDate": "2022-04-26",
              "time": "07:00",
              "origin": "DELHI",
              "arrivalDate": "2022-04-26T07:55",
              "destination": "MUMBAI",
              "duration": "04h 30m"
            },
            {
              "name": "IndiGo",
              "plane": "IND726",
              "price": "4700",
              "departureDate": "2022-04-26",
              "time": "07:00",
              "origin": "DELHI",
              "arrivalDate": "2022-04-26T07:55",
              "destination": "MUMBAI",
              "duration": "04h 30m"
            },
            {
              "name": "Go First",
              "plane": "IND726",
              "price": "4250",
              "departureDate": "2022-04-26",
              "time": "07:00",
              "origin": "DELHI",
              "arrivalDate": "2022-04-26T07:55",
              "destination": "MUMBAI",
              "duration": "04h 30m"
            },
            {
              "name": "Spice Jet",
              "plane": "ATR725",
              "price": "5000",
              "departureDate": "2022-04-26",
              "time": "07:00",
              "origin": "MUMBAI",
              "arrivalDate": "2022-04-26",
              "destination": "PUNE",
              "duration": "01h 30m"
            },
            {
              "name": "Spice Jet",
              "plane": "ATR726",
              "price": "4500",
              "departureDate": "2022-04-26",
              "time": "07:00",
              "origin": "MUMBAI",
              "arrivalDate": "2022-04-26T07:55",
              "destination": "PUNE",
              "duration": "01h 30m"
            },
            {
              "name": "IndiGo",
              "plane": "IND726",
              "price": "2700",
              "departureDate": "2022-04-26",
              "time": "07:00",
              "origin": "MUMBAI",
              "arrivalDate": "2022-04-26T07:55",
              "destination": "PUNE",
              "duration": "01h 30m"
            },
            {
              "name": "Go First",
              "plane": "IND726",
              "price": "2400",
              "departureDate": "2022-04-26",
              "time": "07:00",
              "origin": "MUMBAI",
              "arrivalDate": "2022-04-26T07:55",
              "destination": "PUNE",
              "duration": "01h 25m"
            },
          ],
        }
      ]
    }
  ]

  var cities = [
    "MUMBAI",
    "PUNE",
    "DELHI",
    "JODHPUR",
    "JAiPUR",
    "BANGALORE",
    "GURUGRAM",
    "PATNA",
    "NAGPUR",
    "UDAYPUR"
  ]
  // console.log(FromList, ToList)
  return (
    <div>
      <div className='py-20 bg-gradient-to-b from-sky-900 to-indigo-900'>
        <div className='px-32 '>
          <div className='bg-white shadow rounded-xl'>
            <div className='flex relative bottom-10 border mx-20 shadow-lg rounded-xl px-12 bg-white'>
              <div className=' border-b-2 border-blue-300 p-2 mx-8'>
                <img src={plane} alt="" className='h-8' />
                <h2 className='text-xl'>Plane</h2>
              </div>
              <div className=' p-2 mx-8'>
                {/* <img src={plane} alt="" className='h-8' /> */}
                <h2 className='text-xl'>Buses</h2>
              </div>
              <div className=' p-2 mx-8'>
                {/* <img src={plane} alt="" className='h-8' /> */}
                <h2 className='text-xl'>Hotels</h2>
              </div>
              <div className=' p-2 mx-8'>
                {/* <img src={plane} alt="" className='h-8' /> */}
                <h2 className='text-xl'>HomeStays</h2>
              </div>
              <div className=' p-2 mx-8'>
                {/* <img src={plane} alt="" className='h-8' /> */}
                <h2 className='text-xl'>Trains</h2>
              </div>
              <div className=' p-2 mx-8'>
                {/* <img src={plane} alt="" className='h-8' /> */}
                <h2 className='text-xl'>Cabs</h2>
              </div>
              <div className=' p-2 mx-8'>
                {/* <img src={plane} alt="" className='h-8' /> */}
                <h2 className='text-xl'>Cabs</h2>
              </div>
            </div>

            <div className='flex'>
              <div className='border hover:bg-blue-100 duration-300 py-4 px-4 w-full'>
                <h2 className='text-xl font-semibold'>FROM</h2>
                <select className='text-3xl font-bold bg-transparent' onChange={(e) => { setFromList(e.target.value); }} name="" id="">
                  <option className='text-lg' value="">Select</option>
                  {cities.map((e) => (
                    <option className='text-lg' value={e}>{e}</option>
                  ))}
                </select>
              </div>
              <div className='border hover:bg-blue-100 duration-300 py-4 px-4 w-full'>
                <h2 className='text-xl font-semibold'>TO</h2>
                <select className='text-3xl font-bold bg-transparent' onChange={(e) => { setToList(e.target.value); }} name="" id="">
                  <option className='text-lg' value="">Select</option>
                  {cities.map((e) => (
                    <option className='text-lg' value={e}>{e}</option>
                  ))}
                </select>
              </div>
              <div className='border hover:bg-blue-100 duration-300 py-4 px-4 w-full'>
                <h2 className='text-xl font-semibold'>Date</h2>
                <input className='text-3xl font-bold bg-transparent' type="date" />
              </div>
              <div className='border hover:bg-blue-100 duration-300  py-4 px-4 w-full'>
                <h2 className='text-xl font-semibold'>Select a Fare Type</h2>
                <select className='text-3xl font-bold bg-transparent' onChange={(e) => { setToList(e.target.value); }} name="" id="">
                  <option className='text-lg' value="">Regular Fares</option>
                  <option className='text-lg' value="">Student Fares</option>
                  <option className='text-lg' value="">Armed Forces Fares</option>
                  <option className='text-lg' value="">Senior Citizen Fares</option>
                  <option className='text-lg' value="">Doctor & nurses Fares</option>
                </select>
              </div>
            </div>
            <div>
              <h2 className='text-center py-4'>Book International and Domestic Flights</h2>
            </div>
            <div className='flex justify-center items-center relative top-5'>
              <button className=' rounded-full bg-gradient-to-r from-blue-900 to-blue-400 px-12 py-1 text-white text-2xl '>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-blue-100 pb-12'>
        <div className=' mx-32 flex justify-center items-center flex-col'>
          <h2 className='text-2xl font-semibold my-12 font-bold'>Flight Result</h2>
          {data[0].flight.map((e) => (
            <div className='w-full'>
              {!FromList || !ToList ? 
              (e.segments.map((data) => (
                <div className=' w-full shadow bg-white mt-4 p-4'>
                  <div className='flex justify-between items-center'>
                    <div value="" className='text-2xl'>
                      <h2>{data.name}</h2>
                      <h2 className='text-md'>{data.plane}</h2>
                      <span className='text-xl font-semibold'>Departure</span>
                      <span className='text-xl'>{data.departureDate}</span>
                    </div>
                    <div className='flex'>
                      <div value="" className='text-3xl font-bold'>₹{data.price}</div>
                      <div value="" className='rounded-full bg-blue-200 text-blue-500 border border-blue-500 mx-2 px-4 py-1 text-white text-xl '>View Prices</div>
                    </div>
                  </div>
                  <div className='flex justify-center items-center'>
                    <div value="" className='font-semibold'>{data.origin}</div>
                    <div className='text-green-400 flex flex-col justify-center items-center'>
                      <div>{data.duration}</div>
                      <hr className='text-blue-400 w-96' />
                      <div className=''>Non Stop</div>
                    </div>
                    <div value="" className='font-semibold'>{data.destination}</div>
                  </div>
                </div>
              )))
              :
              ""
              }
              {e.segments.filter((filter) => (filter.origin === FromList && filter.destination === ToList)).map((data) => (
                <div className=' w-full shadow bg-white mt-4 p-4'>
                  <div className='flex justify-between items-center'>
                    <div value="" className='text-2xl'>
                      <h2>{data.name}</h2>
                      <h2 className='text-md'>{data.plane}</h2>
                      <span className='text-xl font-semibold'>Departure</span>
                      <span className='text-xl'>{data.departureDate}</span>
                    </div>
                    <div className='flex'>
                      <div value="" className='text-3xl font-bold'>₹{data.price}</div>
                      <div value="" className='rounded-full bg-blue-200 text-blue-500 border border-blue-500 mx-2 px-4 py-1 text-white text-xl '>View Prices</div>
                    </div>
                  </div>
                  <div className='flex justify-center items-center'>
                    <div value="" className='font-semibold'>{data.origin}</div>
                    <div className='text-green-400 flex flex-col justify-center items-center'>
                      <div>{data.duration}</div>
                      <hr className='text-blue-400 w-96' />
                      <div className=''>Non Stop</div>
                    </div>
                    <div value="" className='font-semibold'>{data.destination}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

  // useEffect(() => {
  //   const axios = require("axios");

  //   const options = {
  //     method: 'GET',
  //     url: 'https://airport-info.p.rapidapi.com/airport',
  //     headers: {
  //       'X-RapidAPI-Key': '42a801370emsh35e4ddc575eefd1p19dbd5jsnb2c4e7cd1990',
  //       'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
  //     }
  //   };

  //   axios.request(options).then(function (response) {
  //     console.log(response.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });


  // }, []);
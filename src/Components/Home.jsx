import React from 'react'
import plane from "../imgs/plane.png"
import { useState, useEffect } from 'react';
import axios from 'axios';
const Home = () => {
  const [FromList, setFromList] = useState();
  const [ToList, setToList] = useState();
  var data = [
    {
      "airline": "novo",
      "message": null,
      "booking_info": null,
      "flight": [
        {
          "segments": [
            {
              "name": "VQ-901",
              "plane": "ATR725",
              "departureDate": "2020-04-26T07:00",
              "origin": "DAC",
              "arrivalDate": "2020-04-26T07:55",
              "destination": "CGP",
              "stops": 0
            },
            {
              "name": "VQ-902",
              "plane": "ATR725",
              "departureDate": "2020-04-29T08:25",
              "origin": "CGP",
              "arrivalDate": "2020-04-29T09:20",
              "destination": "DAC",
              "stops": 0
            },
          ],
        }
      ]
    }
  ]
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
    <div className='px-32'>
      <div className=' shadow rounded-xl my-20'>
        <div className='flex relative bottom-10 border mx-20 shadow-lg rounded-xl px-12'>
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
          <div className='border hover:bg-blue-100 duration-300 py-4 px-4'>
            <h2 className='text-xl font-semibold'>FROM</h2>
            <select className='text-3xl font-bold bg-transparent' onChange={(e) => { setFromList(e.target.value); }} name="" id="">
              {cities.map((e) => (
                <option className='text-lg' value={e}>{e}</option>
              ))}
            </select>
          </div>
          <div className='border hover:bg-blue-100 duration-300  py-4 px-4'>
            <h2 className='text-xl font-semibold'>TO</h2>
            <select className='text-3xl font-bold bg-transparent' onChange={(e) => { setToList(e.target.value); }} name="" id="">
              {cities.map((e) => (
                <option className='text-lg' value={e}>{e}</option>
              ))}
            </select>
          </div>
          <div className='border hover:bg-blue-100 duration-300  py-4 px-4'>
            <h2 className='text-xl font-semibold'>Date</h2>
            <input className='text-3xl font-bold bg-transparent' type="date" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home


// <div className='border'>
//             <h2 className='text-xl font-semibold'>Available Flights</h2>
//             {data[0].flight.map((e) => (
//               <div>

//                 <select name="" id="" className='text-lg'>
//                   <option value="">Select</option>
//                   {e.segments.map((data) => (
//                     <option value="">{data.name}</option>
//                   ))}
//                 </select>
//               </div>
//             ))}
//           </div>
import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Contact from '../components/Contact'
import '../App.css';


export default function Schedule() {
  const [doctors, set_doctors] = useState([])
  const [loading, set_loading] = useState("Loading...")
  useEffect(() => {  
  async function getDoctors(){
    const doctors = 'https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors'
    const res = await Axios.get(doctors)
    console.log(res.data)
    set_doctors(res.data)
    set_loading("")
  }
  getDoctors()
}, [])
  console.log(doctors)

  return (
    <div>
      <h1>Who is on duty?</h1>
      <div>
        <p>{loading}</p>
        <table align="center">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody> 
          {doctors.map(doctor => (
              <tr>
                <td>
                {doctor.doctor}        
                </td>
                <td>
                  {doctor.onDuty ? 'on duty' : 'off duty'}
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
      <Contact />
    </div>
  )
}

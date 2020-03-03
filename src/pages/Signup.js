import React, {useState,useEffect} from 'react'
import '../App.css';
import Axios from 'axios';


export default function Signup() {
  const [patientList, add_patient] = useState()
  const [patient, add_details] = useState([])
  const [signup, set_signup] = useState(false)

  useEffect(() => {
  async function getPatients(){
    const patients = 'https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients'
    const res = await Axios.get(patients)
    add_patient(res.data)
    console.log('useEffect, new List: ',res.data)
  }
  getPatients()
}, [])

  const submitPatient = event => {
    event.preventDefault();
    patient.id = Math.round(Math.random() * 1000000000)
    add_patient(patientList.push(patient));
    console.log('New patient:', patient)
    console.log('New patientlist:', patientList)
    set_signup(true)
  }

  const inputHandler = event =>{
    const name = event.target.name
    const value = event.target.value 
    event.persist()
    add_details({...patient,
    [name]: value})
    console.log(patient)
}
  
  const date = new Date()
  const maxDate = '"' + date.getUTCFullYear() + "-" + date.getUTCMonth() + "-" + date.getUTCDay() + '"'
  console.log(maxDate)

  return (
    <div>
      <h1>Patient Signup</h1>
      {!signup && (
      <form>
        <p><label>First name</label>
        <input type="text" required onChange={inputHandler} name="firstName" value={patient.firstName}></input></p>
        <p><label>Last name</label>
        <input type="text" required onChange={inputHandler} name="lastName" value={patient.lastName}></input></p>
        <p><label>E-mail</label>
        <input type="email" required onChange={inputHandler} name="email" value={patient.email}></input></p>
        <p><label>Phone number</label>
        <input type="number" required onChange={inputHandler} name="phoneNumber" value={patient.phoneNumber}></input></p>
        <p><label>Gender</label>
        <select onChange={inputHandler} name="gender" value="{patient.gender}">
          <option  value="none"></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select></p>
        <p><label>Date of birth</label>
        <input type="date" required min="1900-01-01" max={maxDate} onChange={inputHandler} name="dateOfBirth" value={patient.dateOfBirth }></input></p>
        <button type="submit" onClick={submitPatient}>Sign up</button>
      </form>
      )}
      {signup && (
        <p>Thanks you for signing up!</p>
      )}
    </div>
  )
} 

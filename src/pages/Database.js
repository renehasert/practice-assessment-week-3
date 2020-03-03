import React, {useState,useEffect} from 'react'
import Axios from 'axios'
import '../App.css';
import PatientCard from '../components/PatientCard'

export default function Database() {
  const [doctors, set_doctors] = useState([])
  const [chosen, set_chosen] = useState([])
  const [patients, set_patients] = useState([])


  useEffect(() => {
  async function getDoctors(){
    const doctors = 'https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors'
    const res = await Axios.get(doctors)
    console.log('useEffect, doctors: ', res.data)
    const allPatients = {"id": 4, "doctor": "All patients"}
    const doctorlist = res.data.concat(allPatients)
    set_doctors(doctorlist)
  }
  getDoctors()
}, [])

useEffect(() => {
  async function getPatients(){
    const patients = 'https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients'
    const res = await Axios.get(patients)
    console.log('useEffect, patients: ', res.data)
    res.data.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1)
    set_patients(res.data)
  }
  getPatients()
}, [])


const list = patients.filter((patient) => {
  if (patient.doctorId === chosen.id) {
  return true;
} else if (chosen.id === 4){
  return true;
} else {
  return false;
}
});

const inputHandler = event =>{
    const chosen_doc = JSON.parse(event.target.value)
    set_chosen(chosen_doc)
    console.log(chosen_doc)
  }

  return (
    <div>
      <h1>Patient Database</h1>
      <p><label>Doctor</label> 
        <select defaultValue onChange={inputHandler}>
          <option value="[]"></option>
          {doctors.map(item => (
            <option key={item.id} value={JSON.stringify(item)}>{item.doctor}</option>
          ))}
        </select>
      </p>
      {list.map(item=>( 
      <PatientCard doctorId={item.doctorId} key={item.id} firstName={item.firstName} lastName={item.lastName} gender={item.gender} dateOfBirth={item.dateOfBirth} email={item.email} phoneNumber={item.phoneNumber} prescriptions={item.prescriptions} id={item.id}/>
      ))}
    </div>
  )
}

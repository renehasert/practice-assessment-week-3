import React, {useState} from 'react'
import '../App.css'

export default function PatientCard(props) {
  const [details, set_details] = useState(false)
  const [label, set_label] = useState("Show details")

  function toggle(){
    set_details(!details)
    label === "Show details" ? set_label("Hide details") : set_label("Show details")
  }
  
  return (
    <div className="patient" key={props.id}>
    <div>
        <p>Name: {props.firstName} {props.lastName}</p>
        <p>ID: {props.id}</p>
        <p>Date of Birth: {props.dateOfBirth}</p>
      </div>
        {details && (
      <div>
        <p>Gender: {props.gender}</p>
        <p>Date of Birth: {props.dateOfBirth}</p>
        <p>Email: {props.email}</p>
        <p>Phone number: {props.phoneNumber}</p>
        <p>Prescriptions: {props.prescriptions.join(", ")}</p>
        </div>
        )}
      <p><button onClick={toggle}>{label}</button></p>
      </div>
      )
}

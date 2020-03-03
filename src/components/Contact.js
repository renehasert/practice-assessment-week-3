import React from 'react'
import { Link } from "react-router-dom";

export default function Contact() {
  const today = new Date();
  const time = today.getUTCHours()
  const day = today.getUTCDay() > 1 ? today.getUTCDay() < 5 ? true : false : false
  const OfficeHours = () => {
    if (!day){
      return "closed"
    }else if(time > 16){
      return "closed"
    }else if (time < 8) {
      return "closed"
    }else {
      return "open"
    }}
  console.log('time', time)
  console.log('day', day)
  return (
    <div>
      <p>We are:<strong> {OfficeHours()} </strong></p>
      <p>To make an oppointment<br/>
          call:  020 555 55555</p>
        <p><Link to="/schedule" className="button">Who is on duty?</Link></p>
        <p><Link to="/signup" className="button">I am a new patient</Link></p>
    </div>
  )
}

import React from 'react'

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
    <div className="contact">
      <p>We are:<strong> {OfficeHours()} </strong></p>
      <p>To make an oppointment</p>
          <p>call:  020 555 55555</p>
    </div>
  )
}

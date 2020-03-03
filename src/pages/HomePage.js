import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <h1>Welcome to AMS GPs</h1>
      <Contact />
      <p><Link to="/schedule" className="button">Who is on duty?</Link></p>
      <p><Link to="/signup" className="button">I am a new patient</Link></p>
    </>
  )
}

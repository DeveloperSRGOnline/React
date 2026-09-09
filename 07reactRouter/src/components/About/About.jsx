import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>This is shivam's about page</h1>
      <Link
      to="/about/shivam"
      >Click shivam</Link>
      <Outlet/>
    </div>
  )
}

export default About
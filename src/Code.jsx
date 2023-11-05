import React from 'react'
import './code.css'
import img from './assets/images/image-qr-code.png'

const Code = () => {
  return (
    <>
    <div className="QR">
      <img src= {img} alt="" />
      <h1>Improve your front-end skills by building projects</h1>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
    </>
  )
}

export default Code
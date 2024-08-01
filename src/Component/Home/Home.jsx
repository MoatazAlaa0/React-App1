import React from 'react'
import img from"../Images/avataaars.svg"

export default function Home() {
  return (
    <div className=' d-flex flex-column align-items-center justify-content-center main-bg home text-white py-5 mt-5'>
        <img src={img} alt="Avataar"/>
        <h1 className='text-center mt-2 '>START FRAMEWORK</h1>
        <div className='d-flex align-items-center justify-content-center'>
            <div className='shape me-4'></div>
            <i className="fa-solid fa-star"></i>
            <div className='shape ms-4'></div>

        </div>
            <p className='mt-3'>Graphic Artist - Web Designer - Illustrator</p>


    </div>
  )
}

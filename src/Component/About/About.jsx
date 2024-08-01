import React from 'react'

export default function About() {
    return (

        <div className=' d-flex flex-column align-items-center justify-content-center main-bg  text-white py-5 mt-5'>

            <h1 className='text-center mt-5 pt-5 '>ABOUT COMPONENT</h1>
            <div className='d-flex align-items-center justify-content-center mt-3' >
                <div className='shape me-4'></div>
                <i className="fa-solid fa-star"></i>
                <div className='shape ms-4'></div>

            </div>
            <div className='container pb-5 mt-3 px-5 mb-3'>
                <div className='row'>
                    <div className='col-md-6'>
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>

            </div>


        </div>
    )
}

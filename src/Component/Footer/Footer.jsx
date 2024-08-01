import React from 'react'

export default function Footer() {
    return (
        <section className='footer '>

            <div className='container   footer text-white text-center py-xl-5 '>
                <div className='row  gy-5'>
                    <div className='col-md-4'>
                        <div className=''>

                            <h3 className="">LOCATION</h3>
                            <p className="">2215 John Daniel Drive</p>
                            <p className="">Clark, MO 65243</p>
                        </div>

                    </div>
                    <div className='col-md-4'>
                        <div className=''>

                            <h3 className="">AROUND THE WEB </h3>
                            <div className='main-icons d-flex align-items-center justify-content-center' >
                                <div className=' d-flex align-items-center justify-content-center icon-style me-2'>
                                    <i className='fa-brands  fa-facebook fs-6'></i>
                                </div>
                                <div className=' d-flex align-items-center justify-content-center icon-style me-2'>
                                    <i className='fa-brands  fa-twitter fs-6'></i>
                                </div>
                                <div className=' d-flex align-items-center justify-content-center icon-style me-2'>
                                    <i className='fa-brands  fa-linkedin-in fs-6'></i>
                                </div>
                                <div className=' d-flex align-items-center justify-content-center icon-style'>
                                    <i className='fa-solid fa-globe fs-6'></i>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='col-md-4'>
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>

            </div>

            <div className='col-md-12 end-footer text-white text-center p-2 '>

                <p className='mt-2'>Copyright © Your Website 2021</p>
            </div>

        </section>
    )
}

import React from 'react'

export default function Contact() {
    return (
        <div className='py-5 mt-5  px-2'>
            <h1 className='text-center mt-3 '>CONATCT SECTION</h1>
            <div className='d-flex align-items-center justify-content-center new-color mt-3' >
                <div className='shape-2 me-4  '></div>
                <i className="fa-solid fa-star"></i>
                <div className='shape-2 ms-4 ' ></div>

            </div>
            <div className='my-size mx-auto mt-5 py-5'>
                <div className='row'>
                    <div className="col-md-12">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="1" placeholder="UserName" />
                            <label htmlFor="floatingInput">UserName</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="2" placeholder="UserAge" />
                            <label htmlFor="floatingPassword">UserAge</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="email" className="form-control" id="3" placeholder="UserEmail" />
                            <label htmlFor="floatingPassword">UserEmail</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="password" className="form-control" id="4" placeholder="UserPassword" />
                            <label htmlFor="floatingPassword">UserPassword</label>
                        </div>
                    </div>

                </div>
                    <button className='btn btn-success mt-4'>Send Message</button>
            </div>




        </div>
    )
}

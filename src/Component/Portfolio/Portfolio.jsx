import React, { useEffect } from 'react'
import img1 from "../Images/poert1.png"
import img2 from "../Images/port2.png"
import img3 from "../Images/port3.png"
export default function Portfolio() {
    function changeImage() {
        let allImages = Array.from(document.querySelectorAll("img"));
        let plusIcons = document.querySelectorAll(".fa-plus");
        const layer = document.querySelector(".layer")
        const imgChange = document.querySelector(".stop")
        plusIcons.forEach((plusIcon, index) => {

            plusIcon.addEventListener("click", function () {
                layer.classList.remove("d-none")
                const img = allImages[index];
                const src = img.getAttribute("src");
                imgChange.setAttribute("src", src)
                imgChange.addEventListener("click", function (e) {
                    e.stopPropagation()
                    
                })
                layer.addEventListener("click", function () {
                    layer.classList.add("d-none")
                })
                document.addEventListener("keydown",function(e){
                    if(e.key=="Escape"){
                        layer.classList.add("d-none")
                    }
                })


            });

        });
    }
    useEffect(() => {

        changeImage()


    }, [])



    return (
        <>

            <div className=' d-flex flex-column align-items-center justify-content-center  portfolio  text-white py-5 mt-5'>

                <h1 className='text-center mt-3 '>PORTFOLIO COMPONENT</h1>
                <div className='d-flex align-items-center justify-content-center new-color mt-3' >
                    <div className='shape-2 me-4  '></div>
                    <i className="fa-solid fa-star"></i>
                    <div className='shape-2 ms-4 ' ></div>

                </div>
                <div className='container mt-3'>
                    <div className='row g-5'>
                        <div className='col-md-4'>
                            <figure className='position-relative main-img'>
                                <img src={img1} alt="house" className='w-100 rounded-2 ' />

                                <figcaption className='position-absolute rounded-2  main-bg top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center find'>
                                    <i className='fa-soild fa-plus text-black plus-icon text-white ' ></i>
                                </figcaption>
                            </figure>
                        </div>
                        <div className='col-md-4'>
                            <figure className='position-relative main-img'>
                                <img src={img2} alt="house" className='w-100 rounded-2' />

                                <figcaption className='position-absolute rounded-2  main-bg top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                    <i className='fa-soild fa-plus text-black plus-icon text-white ' ></i>
                                </figcaption>
                            </figure>

                        </div>
                        <div className='col-md-4'>
                            <figure className='position-relative main-img'>
                                <img src={img3} alt="house" className='w-100 rounded-2' />
                                <figcaption className='position-absolute rounded-2  main-bg top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                    <i className='fa-soild fa-plus text-black plus-icon text-white ' ></i>
                                </figcaption>
                            </figure>

                        </div>
                        <div className='col-md-4'>
                            <figure className='position-relative main-img'>
                                <img src={img1} alt="house" className='w-100 rounded-2 ' />

                                <figcaption className='position-absolute rounded-2  main-bg top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                    <i className='fa-soild fa-plus text-black plus-icon text-white ' ></i>
                                </figcaption>
                            </figure>
                        </div>
                        <div className='col-md-4'>
                            <figure className='position-relative main-img'>
                                <img src={img2} alt="house" className='w-100 rounded-2' />

                                <figcaption className='position-absolute rounded-2  main-bg top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                    <i className='fa-soild fa-plus text-black plus-icon text-white ' ></i>
                                </figcaption>
                            </figure>

                        </div>
                        <div className='col-md-4'>
                            <figure className='position-relative main-img'>
                                <img src={img3} alt="house" className='w-100 rounded-2' />
                                <figcaption className='position-absolute rounded-2  main-bg top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                    <i className='fa-soild fa-plus text-black plus-icon text-white ' ></i>
                                </figcaption>
                            </figure>

                        </div>


                    </div>

                </div>
            </div>
            <div className='position-fixed top-0 bottom-0 start-0 end-0 bg-primary bg-opacity-25 layer d-flex d-none align-items-center justify-content-center '>

                <div className='layer-img d-flex align-items-center justify-content-center '>

                    <img src={img1} alt="" className='w-50 stop' />
                </div>
            </div>


        </>



    )
}

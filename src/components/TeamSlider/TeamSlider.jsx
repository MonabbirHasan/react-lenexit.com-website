import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import developer from "../../assets/image/app-developer.jpeg";
import engineer from "../../assets/image/software-engineer.jpeg";
import team from "../../assets/image/team-1 (8).jpeg";
import designer from "../../assets/image/graphics-designer.jpeg";


import "./TeamSlider.css"
const Responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const TeamSlider = () => {

    return (
        <section id='team-slider'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="team-slider-card">
                            <Carousel responsive={Responsive}
                                swipeable={true}
                                draggable={true}
                                showDots={false}
                                ssr={false} // means to render carousel on server-side.
                                infinite={true}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}

                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                <div className='team-item'>
                                    <img src={developer} className='img-fluid' alt="" />
                                    <h5 className='text-capitalize text-dark text-center m-0 p-0 pt-3'>parly chail</h5>
                                    <p className='text-capitalize text-dark text-center m-0 p-0 pb-3'>sr: full-stack developer</p>
                                    <div className="social text-center">
                                        <a href="#" className="my-2">
                                            <span><ion-icon name="logo-facebook"></ion-icon></span>
                                        </a>
                                        <a href="#" className="my-2"><ion-icon name="logo-instagram"></ion-icon></a>
                                        <a href="#" className="my-2"><ion-icon name="logo-linkedin"></ion-icon></a>
                                    </div>
                                </div>
                                <div className='team-item'>
                                    <img src={designer} className='img-fluid' alt="" />
                                    <h5 className='text-capitalize text-dark text-center m-0 p-0 pt-3'>jhonny sharp</h5>
                                    <p className='text-capitalize text-dark text-center m-0 p-0 pb-3'>Graphic Designer</p>
                                    <div className="social text-center">
                                        <a href="#" className="my-2">
                                            <span><ion-icon name="logo-facebook"></ion-icon></span>
                                        </a>
                                        <a href="#" className="my-2"><ion-icon name="logo-instagram"></ion-icon></a>
                                        <a href="#" className="my-2"><ion-icon name="logo-linkedin"></ion-icon></a>
                                    </div>
                                </div>
                                <div className='team-item'>
                                    <img src={engineer} className='img-fluid' alt="" />
                                    <h5 className='text-capitalize text-dark text-center m-0 p-0 pt-3'>penpol (srk)</h5>
                                    <p className='text-capitalize text-dark text-center m-0 p-0 pb-3'>software developer</p>
                                    <div className="social text-center">
                                        <a href="#" className="my-2">
                                            <span><ion-icon name="logo-facebook"></ion-icon></span>
                                        </a>
                                        <a href="#" className="my-2"><ion-icon name="logo-instagram"></ion-icon></a>
                                        <a href="#" className="my-2"><ion-icon name="logo-linkedin"></ion-icon></a>
                                    </div>
                                </div>
                                <div className='team-item'>
                                    <img src={team} className='img-fluid' alt="" />
                                    <h5 className='text-capitalize text-dark text-center m-0 p-0 pt-3'>arciory (smd)</h5>
                                    <p className='text-capitalize text-dark text-center m-0 p-0 pb-3'>mobile app developer</p>
                                    <div className="social text-center">
                                        <a href="#" className="my-2">
                                            <span><ion-icon name="logo-facebook"></ion-icon></span>
                                        </a>
                                        <a href="#" className="my-2"><ion-icon name="logo-instagram"></ion-icon></a>
                                        <a href="#" className="my-2"><ion-icon name="logo-linkedin"></ion-icon></a>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="title">
                            <p className='title-badge text-white text-uppercase bg-success p-1 d-inline' style={{ fontSize: "10px" }}>our teams</p>
                            <h3 className='text-capitalize py-2'> <span style={{ color: "green" }}>lenextit</span>'s Dynamic Team Driving Digital Success</h3>
                        </div>
                        <p className='pt-3'>
                            Lenexit's team is a talented group of technology experts who excel in web and mobile app development, desktop applications, SEO, graphics design, and penetration testing. With their diverse skill set and innovative mindset, they deliver exceptional results and bring digital visions to life. Trust our team to drive your success in the digital landscape.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSlider
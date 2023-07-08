import React from 'react'
import "./ClientSay.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import client1 from "../../assets/image/slider-image/client1.jpeg";
import client2 from "../../assets/image/slider-image/client2.jpeg";
import client3 from "../../assets/image/slider-image/client3.jpeg";

const Responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
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
const ClientSay = () => {
    return (
        <section id='client-say'>
            <div className="container">
                <div className="title">
                    <p className='title-badge text-white text-uppercase bg-success p-1 d-inline' style={{ fontSize: "10px" }}>what our client say</p>
                    <h3 className='text-capitalize py-2'><span style={{ color: "green" }}>lenextit</span>'s Service Praised for Exceptional Results </h3>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="client_card">
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
                                <div className='client_item shadow-sm m-2 p-3 text-center'>
                                    <div>
                                        <img src={client1} className='rounded-circle shadow-sm border' style={{ width: "100px", height: "100px" }} alt="" />
                                        <h5 className='text-capitalize text-center m-0 p-0 pt-3' style={{ fontSize: '16px' }}>Mr: Jhon mike</h5>
                                        <hr />
                                    </div>
                                    <div className='pl-2 text-left'>
                                        <p>
                                            Our clients rave about Lenexit's impeccable service, attention to detail, and ability to turn their vision into reality. They consistently deliver top-notch solutions that drive our clients' success in the digital realm.
                                        </p>
                                    </div>
                                </div>
                                <div className='client_item shadow-sm m-2 p-3 text-center'>
                                    <div>
                                        <img src={client2} className='rounded-circle shadow-sm border' style={{ width: "100px", height: "100px" }} alt="" />
                                        <h5 className='text-capitalize text-center m-0 p-0 pt-3' style={{ fontSize: '16px' }}>Mr: Abir chowdury</h5>
                                        <hr />
                                    </div>
                                    <div className='pl-2 text-left'>
                                        <p>
                                            Our clients rave about Lenexit's impeccable service, attention to detail, and ability to turn their vision into reality. They consistently deliver top-notch solutions that drive our clients' success in the digital realm.
                                        </p>
                                    </div>
                                </div>
                                <div className='client_item shadow-sm m-2 p-3 text-center'>
                                    <div>
                                        <img src={client3} className='rounded-circle shadow-sm border' style={{ width: "100px", height: "100px" }} alt="" />
                                        <h5 className='text-capitalize text-center m-0 p-0 pt-3' style={{ fontSize: '16px' }}>Mr: belal bin</h5>
                                        <hr />
                                    </div>
                                    <div className='pl-2 text-left'>
                                        <p>
                                            Our clients rave about Lenexit's impeccable service, attention to detail, and ability to turn their vision into reality. They consistently deliver top-notch solutions that drive our clients' success in the digital realm.
                                        </p>
                                    </div>
                                </div>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientSay
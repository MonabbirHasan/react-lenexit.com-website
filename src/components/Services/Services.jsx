import React from 'react'
import "./Services.css"
import { NavLink } from 'react-router-dom'
const Services = () => {
    return (
        <section id='services'>
            <div className="container">
                <div className="title">
                    <p className='title-badge text-white text-uppercase bg-success p-1 d-inline' style={{ fontSize: "10px" }}>our high services</p>
                    <h3 className='text-capitalize py-2'>our Premium Services <span style={{ color: "green" }}>lenextit</span></h3>
                </div>
                <div className="service-box pt-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-card shadow">
                                <div className='d-flex'>
                                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/code.png" alt="code" />
                                    <h4 className='pl-4 text-capitalize' style={{ fontSize: "20px" }}>full-stack web development</h4>
                                </div>
                                <p className='pt-3'>
                                    Lenexit offers full-stack web development services, delivering end-to-end solutions that encompass front-end and back-end expertise for seamless digital experiences.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-card shadow">
                                <div className='d-flex'>
                                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/monitor--v1.png" alt="monitor--v1" />
                                    <h4 className='pl-4 text-capitalize' style={{ fontSize: "20px" }}>Desktop application development</h4>
                                </div>
                                <p className='pt-3'>
                                    Lenexit specializes in desktop app development, delivering comprehensive solutions that encompass both front-end and back-end expertise for optimal user experiences.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-card shadow">
                                <div className='d-flex'>
                                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/taxi-mobile-app.png" alt="taxi-mobile-app" />
                                    <h4 className='pl-4 text-capitalize' style={{ fontSize: "20px" }}>android & ios mobile app development</h4>
                                </div>
                                <p className='pt-3'>
                                    Lenexit excels in Android and iOS mobile app development, delivering intuitive and engaging applications that captivate users and drive business growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button className='btn btn-outline-success'><NavLink to={"/service"} className="text-dark" style={{textDecoration:"none"}}>learn more</NavLink></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
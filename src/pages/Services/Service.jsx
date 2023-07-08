import React from 'react'
import "./Service.css"
import Headers from '../../Common/Header/Headers'
import Services from '../../components/Services/Services'
import Banner from '../../Common/Banners/Banner'
import ServiceImg from "../../assets/image/services.jpg"
const Service = () => {
    return (
        <>
            <Headers />

            <section id='services-page'>
                <div className="services_banner pb-5">
                    <Banner Img={ServiceImg} />
                </div>
                <div className="container">
                    <div className='wrapper py-5'>
                        <div className="title py-5">
                            <h3 className="text-uppercase text-left font-weight-bold">our all servicestack</h3>
                        </div>
                        <div className="service-box pt-4">
                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <div className="service-card shadow">
                                        <div className='d-flex'>
                                            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/code.png" alt="code" />
                                            <h4 className='pl-4 text-capitalize' style={{ fontSize: "18px", fontWeight: 'bold' }}>full-stack web development</h4>
                                        </div>
                                        <p className='pt-3' style={{ fontSize: '14px' }}>
                                            Lenexit offers full-stack web development services, delivering end-to-end solutions that encompass front-end and back-end expertise for seamless digital experiences.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-card shadow">
                                        <div className='d-flex'>
                                            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/monitor--v1.png" alt="monitor--v1" />
                                            <h4 className='pl-4 text-capitalize' style={{ fontSize: "18px", fontWeight: 'bold' }}>Desktop application development</h4>
                                        </div>
                                        <p className='pt-3' style={{ fontSize: '14px' }}>
                                            Lenexit specializes in desktop app development, delivering comprehensive solutions that encompass both front-end and back-end expertise for optimal user experiences.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-card shadow">
                                        <div className='d-flex'>
                                            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/taxi-mobile-app.png" alt="taxi-mobile-app" />
                                            <h4 className='pl-4 text-capitalize' style={{ fontSize: "18px", fontWeight: 'bold' }}>android & ios mobile app development</h4>
                                        </div>
                                        <p className='pt-3' style={{ fontSize: '14px' }}>
                                            Lenexit excels in Android and iOS mobile app development, delivering intuitive and engaging applications that captivate users and drive business growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <div className="service-card shadow">
                                        <div className='d-flex'>
                                            <img width="50" height="50" src="https://img.icons8.com/pulsar-line/48/window-bug.png" alt="window-bug" />
                                            <h4 className='pl-4 text-capitalize' style={{ fontSize: "18px", fontWeight: 'bold' }}>website penetration testing</h4>
                                        </div>
                                        <p className='pt-3' style={{ fontSize: '14px' }}>
                                            Lenexit offers professional penetration testing services to identify and address vulnerabilities, ensuring the security and resilience of your digital assets.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-card shadow">
                                        <div className='d-flex'>
                                            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/design--v1.png" alt="design--v1" />
                                            <h4 className='pl-4 text-capitalize' style={{ fontSize: "18px", fontWeight: 'bold' }}>captivating graphics design</h4>
                                        </div>
                                        <p className='pt-3' style={{ fontSize: '14px' }}>
                                            Lenexit provides captivating graphics design services that enhance brand identity and create visually appealing designs for a lasting impression.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service-card shadow">
                                        <div className='d-flex'>
                                            <img width="64" height="64" src="https://img.icons8.com/external-justicon-lineal-justicon/64/external-seo-design-amp-thinking-process-justicon-lineal-justicon.png" alt="external-seo-design-amp-thinking-process-justicon-lineal-justicon" />
                                            <h4 className='pl-4 text-capitalize' style={{ fontSize: "18px", fontWeight: 'bold' }}>search engine optimization (SEO)</h4>
                                        </div>
                                        <p className='pt-3' style={{ fontSize: '14px' }}>
                                            Lenexit offers effective SEO services to boost online visibility, increase organic traffic, and improve search engine rankings for long-term success.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service
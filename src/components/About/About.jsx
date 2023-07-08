import React from 'react'
import img from "../../assets/image/slider-image/img2.jpg"
import welcomeVideo from "../../assets/video/welcome-plants.mp4"
import "./About.css"
const About = () => {
    return (
        <section className='about-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm col-lg-4">
                        <video autoPlay muted loop src={welcomeVideo} className="img-fluid"></video>
                        <img src={img} className='img-fluid rounded' alt="" />
                    </div>
                    <div className="col-md-8 col-sm col-lg-8">
                        <div className="title">
                            <p className='title-badge text-white text-uppercase bg-success p-1 d-inline' style={{ fontSize: "10px" }}>who we are</p>
                            <h3 className='text-capitalize py-2'>welcome to the <span style={{ color: "green" }}>lenextit</span></h3>
                        </div>
                        <p>
                            Lenexit is a leading technology company that specializes in web and mobile app development, desktop application development, SEO, graphics design, penetration testing, and more. With a focus on innovation and client satisfaction, we provide tailored solutions to businesses of all sizes.
                            Our web and mobile app development services combine creativity and functionality to deliver user-friendly experiences across platforms. We excel in building responsive websites and feature-rich mobile apps that engage users and drive business growth.
                            In the realm of desktop application development, we create robust software solutions that streamline processes and improve productivity. Our team of skilled developers uses cutting-edge technologies to deliver customized applications that meet specific business requirements.
                        </p>
                        <p>
                            Lenexit also offers SEO services to boost online visibility and improve search engine rankings. We employ effective strategies, including keyword research, content optimization, and performance tracking, to drive organic traffic and increase brand visibility.
                            With our graphics design expertise, we create visually appealing designs that enhance brand identity. From logos and branding materials to UI/UX design, we craft compelling visuals that leave a lasting impression on customers.
                            Additionally, our penetration testing services ensure the security of systems and networks. We identify vulnerabilities and provide recommendations to fortify digital assets against potential cyber threats.
                            Lenexit is dedicated to delivering high-quality solutions that empower businesses to thrive in the digital landscape. With our diverse range of services, we are your trusted partner for all your technology needs.
                        </p>
                        <a class="btn btn-outline-success text-capitalize" href="#" role="button">read more</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
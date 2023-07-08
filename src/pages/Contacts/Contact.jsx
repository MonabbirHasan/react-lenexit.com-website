import React, { useState } from 'react'
import "./Contact.css"
import Banner from '../../Common/Banners/Banner'
import Headers from '../../Common/Header/Headers'
import contact_video from "../../assets/video/contact-us.mp4"
import contact from "../../assets/video/contact.mp4"
const Contact = () => {
    var [username, setUsername] = useState('')
    var [email, setEmail] = useState('')
    var [subject, setSubject] = useState('')
    var [description, setDescription] = useState('')
    var alert = document.getElementById('alert')
    function alert_message(message) {
        alert.innerHTML = `<span class='alert alert-success p-1'>${message}</span>`;
        setTimeout(() => {
            alert.innerHTML = '';
        }, 5000);
    }
    const SubmitHandler = () => {
        if (username == "" || email == "" || subject == "" || description == "") {
            alert_message("all feild are required!")
        } else {
            var data = {
                username: username,
                email: email,
                subject: subject,
                description: description,
                status: 1
            }
            console.log(data)
            try {
                fetch("https://api.lenexit.com/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }).then((response) => response.json()).then((result) => {
                    alert_message("contact info submited")
                    setUsername("");
                    setEmail("")
                    setSubject("")
                    setDescription("")
                })
            } catch (error) {
                console.error(error);
            }
        }
        document.getElementById("contact_submit").style.display = "none";
        setTimeout(() => {
            document.getElementById("contact_submit").style.display = "block"
        }, 2000);
    }

    return (
        <>
            <Headers />
            <Banner Img='https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1688301632~exp=1688302232~hmac=6bc6d60feace16570c4bc9a263ce9e8100c5a351a617aa34b6337e705eead88e' />
            <section id='contact-page'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mr-4 col-sm col-lg-4">
                            {/* <img src="https://image.lexica.art/full_jpg/3dc55f52-feb4-412c-a749-73572576d81c" className='img-fluid' alt="" /> */}
                            <video autoPlay muted loop src={contact_video} className='img-fluid'></video>

                        </div>
                        <div className="col-md-6 ml-5 pl-4 col-sm col-lg-6">
                            <form action="" className='card p-3'>
                                <div className="title pt-3 pb-2">
                                    <h3 style={{ fontWeight: "bold", fontSize: "1.7rem" }}>
                                        Let's Start Growing Your Business Today
                                    </h3>
                                    <p style={{ fontSize: '14px' }}>
                                        Contact us today to grow your business with customized digital marketing solutions and dedicated support.
                                    </p>
                                </div>
                                <div id="alert" class="mb-3 p-2"></div>
                                <div class="form-group">
                                    <label for="" className='text-capitalize'>username</label>
                                    <input type="text" name='username' onChange={(e) => setUsername(e.target.value)} value={username} required class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="" className='text-capitalize'>E-Mail</label>
                                    <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} required class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="" className='text-capitalize'>subject</label>
                                    <input type="text" name='subject' onChange={(e) => setSubject(e.target.value)} value={subject} required class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="" className='text-capitalize'>message</label>
                                    <textarea class="form-control" name='description' rows="3" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                                </div>
                                <div className='mt-1'>
                                    <button type='button' id='contact_submit' onClick={SubmitHandler} style={{ backgroundColor: "blue", color: 'whitesmoke' }} className='btn text-capitalize'>submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
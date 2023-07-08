import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./Calenders.css"
import supportImg from "../../assets/image/12084798_20943953.jpg"
import 'react-calendar/dist/Calendar.css';
import Header from "../../Common/Header/Headers"
import Banner from '../../Common/Banners/Banner';
import schedule from "../../assets/video/schedule.mp4"
const Calenders = () => {

    var [start_date, setStartDate] = useState('');
    var [end_date, setEndDate] = useState('');
    var [username, setUsername] = useState('')
    var [email, setEmail] = useState('')
    var [service_type, setServiceType] = useState('')
    var [description, setDescription] = useState('')
    var [provider, setProvider] = useState('')
    var alert = document.getElementById('alert');
    function alert_message(message) {
        alert.innerHTML = `<span class='alert alert-success p-1'>${message}</span>`;
        setTimeout(() => {
            alert.innerHTML = '';
        }, 5000);
    }
    const SubmitHandler = () => {
        document.getElementById("schedule_submit").style.display = 'none'
        setTimeout(() => {
            document.getElementById("schedule_submit").style.display = 'block'
        }, 2000);


        if (end_date == "" || start_date == "" || username == "" || email == '' || service_type == "" || provider == "" || description == "") {
            alert_message("all feild are required!")
        } else {
            var data = {
                start_date: start_date,
                start_time: end_date,
                location: navigator.userAgent,
                username: username,
                email: email,
                service_type: service_type,
                description: description,
                provider: provider,
                status: 1,
            }

            try {
                fetch("https://api.lenexit.com/api/schedule", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data),
                }).then((response) => response.json()).then((result) => {
                    alert_message("schedule save success");
                    setUsername("")
                    setEmail("")
                    setEndDate("")
                    setStartDate("")
                    setProvider("")
                    setServiceType("")
                    setDescription("")
                })
            } catch (error) {
                console.error(error);
            }
        }
    }


    return (
        <>
            <Header />
            <Banner Img={supportImg} />
            <section id='calender' style={{ marginTop: '30vh' }}>
                <div className="container py-5">
                    <div className='wrapper py-5'>
                        <div className='row'>
                            <div className="col-md-5 mr-5">
                                <video src={schedule} autoPlay muted loop className='img-fluid'></video>
                            </div>
                            <div className="col-md-6">
                                <div id="alert" class="mb-3 p-2"></div>
                                <div className="meeting_form shadow p-4 ml-5">
                                    <div className="title">
                                        <h4 className='text-uppercase text-left font-weight-bold'>send your message with zoom link</h4>
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="" className='text-uppercase'>username</label>
                                        <input type="text" required onChange={(e) => setUsername(e.target.value)} value={username} class="form-control" name="username" />
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="" className='text-uppercase'>E-mail</label>
                                        <input type="text" required onChange={(e) => setEmail(e.target.value)} class="form-control" name="email" />
                                    </div>
                                    {/* {show == true ? <Calendar AnimationEffect={true} allowPartialRange onActiveStartDateChange={true} selectRange showNavigation showFixedNumberOfWeeks locale='en' showNeighboringMonth showWeekNumbers onChange={onChange} value={value} /> : ""} */}
                                    <div class="form-group">
                                        <label htmlFor="" className='text-uppercase'>start time</label>
                                        <input type="datetime-local" onChange={(e) => setStartDate(e.target.value)} value={start_date} required class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="" className='text-uppercase'>end time</label>
                                        <input type="datetime-local" onChange={(e) => setEndDate(e.target.value)} value={end_date} required class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="">service type</label>
                                        <select class="form-control" onChange={(e) => setServiceType(e.target.value)} value={service_type}>
                                            <option value={"website development"}>website development</option>
                                            <option value={"mobile app development"}>mobile app development</option>
                                            <option value={"desktop application"}>desktop application</option>
                                            <option value={"cms buidling"}>cms buidling</option>
                                            <option value={"custom plugin"}>custom plugin</option>
                                            <option value={"search engin optimization"}>search engin optimization</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="" className='text-uppercase'>zoom meeting url</label>
                                        <input type="url" required onChange={(e) => setProvider(e.target.value)} value={provider} class="form-control" name="url" />
                                    </div>
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label htmlFor="" className='text-uppercase'>message</label>
                                            <textarea class="form-control" onChange={(e) => setDescription(e.target.value)} value={description} name="" id="" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" style={{background:"blue",color:"white"}} id='schedule_submit' onClick={SubmitHandler} className='btn btn-outline-success'>submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Calenders
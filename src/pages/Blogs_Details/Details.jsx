import React, { useState, useEffect } from 'react'
import "./Details.css";
import Header from "../../Common/Header/Headers"
import { NavLink, useParams } from 'react-router-dom';
// import path from "../../../../../admin/src/Admin/Services/API/uploads/"
const Details = () => {
    const { id } = useParams();
    let [Data, setData] = useState([])
    let [AllData, setAllData] = useState([])
    useEffect(() => {
        let xhr = new XMLHttpRequest();
        let url = "https://api.lenexit.com/api/post/" + id;
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let response = JSON.parse(xhr.responseText)
                for (var i = 0; i < response.length; i++) {
                    var elements = response[i];
                    console.log(id + '' + elements['id'])
                    if (id === elements['id']) {
                        setData(response);
                        console.log(response)
                    } else {
                        setData(response);
                    }
                }
            }
        }
        xhr.send()
        function allBlogs() {
            let xhr = new XMLHttpRequest();
            let url = "https://api.lenexit.com/api/post/";
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    let response = JSON.parse(xhr.responseText)
                    setAllData(response)
                }
            }
            xhr.send()
        }
        allBlogs()
    }, [])

    const NewsData = [
        {
            "author": "Paul P.",
            "title": "‘Presumed human remains’ found near debris field of doomed Titan submersible, US Coast Guard says - CNN",
            "description": "Huge pieces of the doomed submersible Titan were hoisted onto a Canadian pier Wednesday nearly a week after authorities announced a “catastrophic implosion” had killed all five men onboard the minivan-sized vessel, according to the company leading the effort …",
            "url": "https://www.cnn.com/2023/06/28/americas/titan-submersible-debris-st-johns/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230628102326-02-titan-debris-0628.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-06-28T22:14:00Z",
            "id": "1",
            "content": "Presumed human remains have been recovered from the seafloor in the area of the doomed Titan submersible debris field, the US Coast Guard said Wednesday.\r\nThe remains were recovered within the wrecka… [+2425 chars]"
        }
    ]

    return (
        <>
            <Header />
            <section id='details'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm col-lg-8">
                            {
                                Data.map((item) => (
                                    <div key={item.id} className='blog-details py-5'>
                                        <h3>{item.title}</h3>
                                        <img src="" alt="" />
                                        <div className='blog-author mt-3 d-flex'>
                                            <img src={item.thumbnail} className='img-fluid rounded-circle' style={{ width: "60px", height: "60px" }} alt="" />
                                            <div className=''>
                                                <p className='pl-3 p-0 m-0 font-weight-bold'>{item.author == 1 ? "Admin" : "Normal"}</p>
                                                <p className='pl-3 p-0 m-0'>{item.createAt}</p>
                                            </div>
                                        </div>
                                        <div className='py-5 mt-3'>
                                            <img src={item.thumbnail} className='img-fluid' alt={item.title} />
                                            <p className='py-3'>{item.descrioption}</p>
                                        </div>
                                        <hr className="bg-dark rounded" />
                                        {/* <div clssName="comments">
                                            <div className="title">
                                                <h3>Leave A Comments (3)</h3>
                                            </div>
                                            <div className="comment_author mt-3">
                                                <div className="d-flex">
                                                    <img src="https://media.cnn.com/api/v1/images/stellar/prod/230628102326-02-titan-debris-0628.jpg?c=16x9&q=w_800,c_fill" className="img-fluid rounded-circle" style={{ width: '50px', height: '50px' }} />
                                                    <div>
                                                        <p className="m-0 p-0 pl-3">Admin</p>
                                                        <p className="m-0 p-0 pl-3">Designer</p>
                                                    </div>
                                                </div>
                                                <div className="comment_content w-50 pt-2 mt-2 shadow-sm bg-light p-3">
                                                    <p>
                                                        Huge pieces of the doomed submersible Titan were hoisted onto a Canadian pier Wednesday nearly a week after authorities announced a “catastrophic implosion
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="comment_form mt-5 pt-5">
                                                <form className="shadow p-3">
                                                    <div class="form-group">
                                                        <label for="">username</label>
                                                        <input type="text"
                                                            class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">username</label>
                                                        <input type="text"
                                                            class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">username</label>
                                                        <div class="form-group">
                                                            <label for="">comments</label>
                                                            <textarea class="form-control" name="" id="" rows="3"></textarea>
                                                        </div>
                                                    </div>
                                                    <a name="" id="" class="btn btn-success text-uppercase" href="#" role="button">send</a>
                                                </form>
                                            </div>
                                        </div> */}
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col-md-4 col-sm col-lg-4">
                            <div className="blog-sidebar mt-5 p-3">
                                {
                                    Data.map((items) => (
                                        <div className="title shadow-sm rounded p-3">
                                            <h3 className="text-left text-uppercase">our recent post</h3>
                                            <div className="">
                                                <img className="img-fluid" src={items.thumbnail} />
                                            </div>
                                        </div>
                                    ))
                                }
                                {
                                    AllData.map((item) => (
                                        <div className="card_block mt-1">
                                            <div className="news_card  shadow-sm py-3 px-2 d-flex">
                                                <div className="">
                                                    <img style={{ width: "100px", height: "100%" }} src={item.thumbnail} />
                                                </div>
                                                <div className="pl-2">
                                                    <b>{item.createAt}</b>
                                                    <p>
                                                        <NavLink className="text-dark" to={item.id}>{item.title.slice(0, 30)}</NavLink>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }



                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>

    )
}

export default Details
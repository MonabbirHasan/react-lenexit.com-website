import React, { useEffect, useState } from 'react'
import "./Blogs.css"
// import { NewsData } from '../../services/static/NewsData'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from 'react-router-dom';

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
const Blogs = () => {
    let [Data,setData]=useState([])
    useEffect(() => {
        let xhr = new XMLHttpRequest();
        let url = "https://api.lenexit.com/api/post/";
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let response = JSON.parse(xhr.responseText)
                setData(response);
                console.log(response)
            }
        }
        xhr.send()
    }, [])
    return (
        <section id='blogs'>
            <div className="container">
                <div className="title">
                    <p className='title-badge text-white text-uppercase bg-success p-1 d-inline' style={{ fontSize: "10px" }}>our latest blogs</p>
                    <h3 className='text-capitalize py-2'><span style={{ color: "green" }}>lenextit</span>'s Our letest blogs</h3>
                </div>
                <div className='blogs-wrapper'>
                    <div className="row">
                        <div className="col-md-12">
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
                                {
                                    Data.map((item) => (
                                        <div className="blog-card shadow p-3 m-3">
                                            <div className="blog-thumbnail">
                                                <img src={item.thumbnail} className='img-fluid w-100' alt="" />
                                                <div className='blog-author mt-3 d-flex'>
                                                    <img src={item.thumbnail} className='img-fluid rounded-circle' style={{ width: "60px", height: "60px" }} alt="" />
                                                    <div className=''>
                                                        <p className='pl-3 p-0 m-0 font-weight-bold'>Admin</p>
                                                        <p className='pl-3 p-0 m-0'>{item.createAt}</p>
                                                    </div>
                                                </div>
                                                <h3 style={{ fontSize: '20px', marginTop: "15px" }}>
                                                    <NavLink className='text-dark text-dark' to={"details/" + item.id}>
                                                        {item.title.slice(0, 60)}
                                                    </NavLink>
                                                </h3>
                                            </div>
                                            <div className="content">
                                                <p>{item.descrioption.slice(0, 100)}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs
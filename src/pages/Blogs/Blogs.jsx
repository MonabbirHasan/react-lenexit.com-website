import React, { useEffect, useState } from 'react'
import "./Blogs.css"
import img from "../../assets/image/graphics-designer.jpeg"
import graphic from "../../assets/image/graphics-design.jpg"
import { NavLink } from 'react-router-dom'
import Headers from '../../Common/Header/Headers'
import Banner from '../../Common/Banners/Banner'
const Blogs = () => {
    let [Data, setData] = useState([])
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
        <>
            <Headers />
            <Banner Img={graphic} />
            <section id='blogs-page'>
                <div className="container-fluid">
                    <div className="title mt-5">
                        <h3 className='text-uppercase text-left font-weight-bold'>Blogs</h3>
                    </div>
                    <div className='blogs-container'>
                        <div className="row">
                            <div className="col-md-9 col-sm col-lg-9">
                                <div className="row">
                                    {
                                        Data.map((item) => (
                                            <div className="col-md-4">
                                                <div className="blog-card shadow p-3">
                                                    <img src={item.thumbnail} style={{ width: '100%', height: "170px" }} alt="" />
                                                    <div className="author d-flex py-3">
                                                        <img src={img} className='img-fluid rounded-circle border border-success' style={{ width: "50px", height: "50px" }} alt="" />
                                                        <div className='m-0 p-0 pl-3'>
                                                            <p className='p-0 m-0'>{item.author == 1 ? "Admin" : "Normal"}</p>
                                                            <p className='p-0 m-0'>monabbirhasan</p>
                                                        </div>
                                                        <span><img width="15" height="15" src="https://img.icons8.com/ios-filled/50/thursday.png" alt="thursday" /> {item.createAt}</span>
                                                    </div>
                                                    <div className='blog-content py-2'>
                                                        <p>
                                                            <NavLink to={"/details/" + item.id} className="text-dark" style={{ fontSize: '16px', fontWeight: "bold", textTransform: "capitalize", }}>{item.title.slice(0, 50)}</NavLink>
                                                        </p>
                                                        <p>
                                                            {item.descrioption.slice(0, 120)}
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }


                                </div>

                                {/* pagination */}
                                {/* <nav aria-label="Page navigation">
                                    <ul class="pagination">
                                        <li class="page-item disabled">
                                            <a class="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav> */}
                                {/* pagination */}
                            </div>
                            <div className="col-md-3 col-sm col-lg-3 card">
                                <div className="title pt-3">
                                    <h5 className='text-uppercase text-left'>searcg somthing</h5>
                                </div>
                                <div className="search-box py-3 d-flex">
                                    <input type="search" className='form-control mx-2' />
                                    <NavLink to={""} className='btn-outline-success p-2 rounded-circle'>
                                        <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/ffffff/search--v1.png" alt="search--v1" />
                                    </NavLink>
                                </div>
                                <div className='blog-right-sidebar'>
                                    <div className="category-list">
                                        <div className="title">
                                            <h5 className='text-uppercase text-left'>all category</h5>
                                        </div>
                                        <ul>
                                            <li><NavLink to={""}>news</NavLink></li>
                                            <li><NavLink to={""}>technology</NavLink></li>
                                            <li><NavLink to={""}>web development</NavLink></li>
                                            <li><NavLink to={""}>mobile app development</NavLink></li>
                                            <li><NavLink to={""}>search engin optimization</NavLink></li>
                                            <li><NavLink to={""}>desktop app development</NavLink></li>
                                            <li><NavLink to={""}>graphics designe</NavLink></li>
                                            <li><NavLink to={""}>penetration testing</NavLink></li>
                                            <li><NavLink to={""}>hosting server</NavLink></li>
                                            <li><NavLink to={""}>lead generations</NavLink></li>
                                        </ul>
                                    </div>
                                    <hr />

                                    <div className='recent-news'>
                                        <div className="title">
                                            <h5 className='text-uppercase text-left'>recent blogs</h5>
                                        </div>
                                        {
                                            Data.map((item) => (
                                                <div className="recent-blog-card p-3 my-2 shadow-sm border border">
                                                    <div className="d-flex">
                                                        <img src={item.thumbnail} className='img-fluid w-25 ' alt="" />
                                                        <div className='pl-3'>
                                                            <p className='p-0 m-0'><NavLink to={"/details/"+item.id} className="text-dark">{item.title.slice(0,30)}</NavLink></p>
                                                            <span><img width="15" height="15" src="https://img.icons8.com/ios-filled/50/111111/thursday.png" alt="thursday" /> {item.createAt}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                        {/* <div className="recent-blog-card p-3 my-2 shadow-sm border border">
                                            <div className="d-flex">
                                                <img src={img} className='img-fluid w-25 ' alt="" />
                                                <div className='pl-3'>
                                                    <p className='p-0 m-0'><NavLink to={""} className="text-dark">Our News Webdite Anad Something That</NavLink></p>
                                                    <span><img width="15" height="15" src="https://img.icons8.com/ios-filled/50/bbbbbb/thursday.png" alt="thursday" /> 10-02-2023</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="recent-blog-card p-3 my-2 shadow-sm border border">
                                            <div className="d-flex">
                                                <img src={img} className='img-fluid w-25 ' alt="" />
                                                <div className='pl-3'>
                                                    <p className='p-0 m-0'><NavLink to={""} className="text-dark">Our News Webdite Anad Something That</NavLink></p>
                                                    <span><img width="15" height="15" src="https://img.icons8.com/ios-filled/50/bbbbbb/thursday.png" alt="thursday" /> 10-02-2023</span>
                                                </div>
                                            </div>
                                        </div> */}

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

export default Blogs
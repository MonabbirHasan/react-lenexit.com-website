import React, { useEffect, useState } from 'react'
import "./Portfolio.css"
import img from "../../assets/image/meet.jpeg"
import { NavLink } from 'react-router-dom'
import { portfolioData } from '../../services/static/portfolioData'
import Banner from '../../Common/Banners/Banner'
import Headers from '../../Common/Header/Headers'
export const Portfolio = () => {
    let [isActive, setIsActive] = useState(1)
    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        setData(portfolioData)
        setCollection([... new Set(portfolioData.map((item) => item.category))])
    }, [])

    const GellaryFilter = (itemData) => {
        const FiterData = portfolioData.filter((item) => item.category == itemData);
        setData(FiterData)
    }

    // const filter_category = [
    //     {
    //         'id': "1",
    //         'name': "All"
    //     },
    //     {
    //         'id': "2",
    //         'name': "website"
    //     },
    //     {
    //         'id': "3",
    //         'name': "mobile app"
    //     },
    //     {
    //         'id': "4",
    //         'name': "graphice"
    //     },
    //     {
    //         'id': "5",
    //         'name': "wordpress"
    //     },
    //     {
    //         'id': "6",
    //         'name': "shopify"
    //     },
    //     {
    //         'id': "7",
    //         'name': "wix"
    //     },
    //     {
    //         'id': "9",
    //         'name': "desktop app"
    //     },
    // ];

    return (
        <>
            <Headers />
            <section id='portfolio-page'>
                <div className="container">
                    <div className="title">
                        <h2 className='text-uppercase text-center'>our project</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="filter-container">
                        <ul className="categories">
                            <li className='filter_item active' onClick={() => setData(portfolioData)}>all</li>
                            {
                                collection.map((item) => <li className='filter_item active' onClick={() => { GellaryFilter(item) }}>{item}</li>)
                            }
                        </ul>
                    </div>
                    <div className="card-container">
                        <div className="row">
                            {
                                data.map((item) => {
                                    return (
                                        <div className="col-md-4 my-2">
                                            <div className="item shadow border p-3">
                                                <div className='social_link pb-3 px-2' style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <span><NavLink to={item.github_url}><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github" /></NavLink></span>
                                                    <span><NavLink to={item.live_url}><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/000000/domain.png" alt="domain" /></NavLink></span>
                                                </div>
                                                <img className='portfolio_thumb' src={item.thumbnail} style={{ width: '100%', height: "200px" }} alt="" />
                                                <div className="details">
                                                    <div className="date pt-3 text-left mb-2">
                                                        <span className='px-1 text-uppercase font-weight-bold'><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/12b000/thursday.png" alt="thursday" /></span>
                                                        <span className='px-1 text-uppercase font-weight-bold'>{item['start-date']}</span>
                                                        <span style={{ fontSize:"12px" }} className='px-1 rounded badge badge-success text-uppercase font-weight-bold'>to</span>
                                                        <span className='px-1 text-uppercase font-weight-bold'>{item['end-date']}</span>
                                                    </div>
                                                    <div className="language text-left">
                                                        <div className='d-flex'>
                                                            <p style={{fontSize: '12px', padding: '3px' }} className='badge badge-success w-50 text-white rounded text-uppercase m-1'>structure lang: {item['structure-language']}</p>
                                                            <p style={{fontSize: '12px', padding: '3px' }} className='badge badge-success w-50 text-white rounded text-uppercase m-1'>lang: {item['design-language']}</p>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <p style={{fontSize: '12px', padding: '3px' }} className='badge badge-success w-50 text-white rounded text-uppercase m-1'>Ui lang: {item['ui-language']}</p>
                                                            <p style={{fontSize: '12px', padding: '3px' }} className='badge badge-success w-50 text-white rounded text-uppercase m-1'>server Lang: {item['server-language']}</p>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <p style={{fontSize: '12px', padding: '3px' }} className='badge badge-success w-50 text-white rounded text-uppercase m-1'>DB: {item.database}</p>
                                                            <p style={{fontSize: '12px', padding: '3px' }} className='badge badge-success w-50 text-white rounded text-uppercase m-1'>server: {item['host-server']}</p>
                                                        </div>
                                                    </div>
                                                    <div className="description">
                                                        <p style={{ fontSize: '16px' }} className='m-0 p-0 p-1 font-weight-bold pt-3 text-left text-capitalize'>{item.title.slice(0, 50)}</p>
                                                        <p style={{ fontSize: '14px' }} className='m-0 p-0 pt-2 pl-1 text-left text-capitalize'>{item.description.slice(0, 100)}</p>
                                                    </div>
                                                    {/* <div className='text-left pt-3'>
                                                        <button className='badge m-0 ml-1 text-capitalize btn-outline-success'><NavLink style={{ textDecoration: "none", color: "#111" }} to={""}>read more</NavLink></button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

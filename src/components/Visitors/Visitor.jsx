import React, { useEffect, useState } from 'react'
import "./Visitor.css";
const Visitor = () => {
    var [visitorCount, setVisitorCount] = useState(0)
    useEffect(() => {
        fetch("https://api.lenexit.com/api/visitor", {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        }).then((response) => response.json()).then((result) => {
            let totalCount = 0;
            for (const key in result) {
                if (Object.hasOwnProperty.call(result, key)) {
                    const element = result[key].visitor;
                    totalCount += element;
                }
            }
            const string = totalCount;
            const digits = string.match(/\d/g);
            const totalCount2 = digits.reduce((sum, digit) => sum + parseInt(digit), 0);
            setVisitorCount(Math.round(totalCount2 / 3))
            console.log("Total sum: " + totalCount2);
        })
    }, [])
    return (
        <section id='visitor'>
            <div className='container'>
                <div className="visit_wrapper">
                    <div className="row">
                        <div className="col-md-3 col-sm">
                            <div className="visitor_card">
                                <div>
                                    <img title='our visitor' width="100%" height="100%" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-visitor-internet-marketing-service-flaticons-flat-flat-icons.png" alt='our visitor' />
                                </div>
                                <div className='ml-4 pl-3'>
                                    <p>our visitor</p>
                                    <h3>{visitorCount}+</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm">
                            <div className="visitor_card">
                                <div>
                                    <img title='country we serve' width="100%" height="100%" src="https://img.icons8.com/color/48/country.png" alt="country served" />
                                </div>
                                <div className='ml-4 pl-3'>
                                    <p>country</p>
                                    <h3>190+</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm">
                            <div className="visitor_card">
                                <div>
                                    <img title='our happy client' width="100%" height="100%" src="https://img.icons8.com/water-color/50/client-management.png" alt="client-management" />
                                </div>
                                <div className='ml-4 pl-3'>
                                    <p>our clients</p>
                                    <h3>33+</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm">
                            <div className="visitor_card">
                                <div>
                                    <img title='our service' width="100%" height="100%" src="https://img.icons8.com/fluency/48/service.png" alt="our services" />
                                </div>
                                <div className='ml-4 pl-3'>
                                    <p>our services</p>
                                    <h3>12+</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Visitor
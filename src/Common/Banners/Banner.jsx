import React from 'react'

const Banner = (props) => {
    return (
        <div>
            {/* style={{ width: "100%", height: "70vh" }} */}
            <div className=" page-header d-flex flex-column align-items-center justify-content-center pt-0  mb-5" >
                <img src={props.Img} style={{height:"100vh",width:"100%"}} className='img-fluid' alt="" />
            </div>
        </div>
    )
}

export default Banner
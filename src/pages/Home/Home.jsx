/* eslint-disable no-unused-vars */
import React from "react";

import Headers from '../../Common/Header/Headers'
import "./Home.css";
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Responsive from '../../components/Res/Responsive';
import TimeLine from '../../components/TimeLine/TimeLine';
import TeamSlider from '../../components/TeamSlider/TeamSlider';
import ClientSay from '../../components/ClientSay/ClientSay';
import Blogs from '../../components/Blogs/Blogs';
export const Home = () => {

  return (
    <div>
      <Headers />
      <div className="banner">
        <div className='py-5 container-fluid'>
          <div className="row">
            <div className="col-md-6">
              <div className="banner_left">
                <h1 className='text-capitalize text-left'>Your Digital Success Starts Here In Canada</h1>
                <p>
                  We Specialize In Creating Customized Solutions Tailored To Your Specific Goals. With Our Expert Team, You Can Expect Innovative Strategies And Cutting-Edge Tactics Designed To Deliver The Results You Need To Succeed In Today's Digital Landscape.
                </p>
                <form action="_blank" method="post">
                  <div class="form-group px-3 py-4 d-flex">
                    <input type="email" required
                      class="form-control w-50" style={{ borderColor: "#eee", borderWidth: 3, background: "none" }} name="" id="" aria-describedby="helpId" placeholder="Enter Your Email!" />
                    <button className='btn btn-outline-light text-uppercase text-center text-dark'>send proposal</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner_right">

                <div className='img-frame'>
                  {/* <img src="https://cdn-jbjfh.nitrocdn.com/boWpuCCjOwTupgUnssksVXaEltGJXWbG/assets/images/optimized/rev-c4c2da5/wp-content/uploads/2023/03/Group-2840.png" alt="" /> */}
                </div>
                <div className="">
                  {/* <img src={bannerimg} className='img-fuid' alt="" /> */}
                  <div className='img-frame'>
                    {/* <img src="https://cdn-jbjfh.nitrocdn.com/boWpuCCjOwTupgUnssksVXaEltGJXWbG/assets/images/optimized/rev-c4c2da5/wp-content/uploads/2023/03/Group-2840.png" alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Responsive />
      <TimeLine />
      <TeamSlider />
      <ClientSay />
      <Blogs />
    </div>
  )
}

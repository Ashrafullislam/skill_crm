import React from "react";
import { Link } from "react-router-dom";
import RegisterNav from "./RegisterNav";
import SignupAnimation from '../../../../src/signup-animation.json';
import Lottie from 'lottie-react'

const Signup = () => {
  return (
    <div className="w-full mx-auto ">
      <RegisterNav> </RegisterNav>

       <section className="flex w-4/5 mx-auto shadow-lg items-center justify-center px-3 "> 
       <div className="w-2/5  ">
        <Lottie  animationData={SignupAnimation}/>
      </div>
      <form class=" w-3/4 mx-auto px-4 py-6 mb-10  items-start  flex flex-col rounded-b-md font-semibold border">
        <h2 className="text-2xl font-smeibold mt-2 mb-4"> Please Sign up now </h2>

        <div className="flex gap-3">
          <h3 className="w-40 "> Your Name  </h3>
          <div class="relative mb-3" data-te-input-wrapper-init>
            <input
              type="text"
              name={"name"}
              class="w-80 py-2 border hover:bg-yellow-100 "
              placeholder=" Enter your name"
              required
            />
          </div>
        </div>
        
        <div className="flex gap-3">
          <h3 className="w-40 "> E-Mail Address </h3>
          <div class="relative mb-3" data-te-input-wrapper-init>
            <input
              type="email"
              name={"email"}
              class="w-80 py-2 border hover:bg-yellow-100 "
              placeholder=" Enter your email"
              required
            />
          </div>
        </div>

        <div className="flex gap-3">
          <h3 className="w-40 "> Your Company Name </h3>
          <div class="relative mb-3" data-te-input-wrapper-init>
            <input
              type="text"
              name={"company-name"}
              class="w-80 py-2 border hover:bg-yellow-100 "
              placeholder=" Your company name / optional"
              
            />
          </div>
        </div>

        <div className="flex gap-3">
          <h3 className="w-40 "> Password  </h3>
          <div class="relative mb-3" data-te-input-wrapper-init>
            <input
              type="password"
              name={"password"}
              class="w-80 py-2 border hover:bg-yellow-100 "
              placeholder=" Create a strong password"
              
            />
          </div>
        </div>
        
        <div className="flex gap-3">
          <h3 className="w-40 "> Confirm Password  </h3>
          <div class="relative mb-3" data-te-input-wrapper-init>
            <input
              type="password"
              name={"confirm-password"}
              class="w-80 py-2 border hover:bg-yellow-100 "
              placeholder=" Confirm password "
              
            />
          </div>
        </div>

       

        <div className="flex gap-3">
          <div>
           

            <div>
              <div className="float-left mt-3">
                <input
                  value={"Sign up"}
                  type="submit"
                  className="  bg-sky-600 border-none text-neutral-100 px-4 py-2 rounded-md hover:bg-sky-800 cursor-pointer"
                />
                <span> Already have an account ? <Link to={"/login"} className="text-blue-500">
                  {" "}
                  Log in {" "}
                </Link> </span>
              </div>
            </div>
           </div>
          </div>
        </form>
       </section>
    </div>
  );
};

export default Signup;

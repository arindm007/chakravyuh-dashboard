import BannerBackground from "../Landing Page Assets/home-banner-background.png";
import google from "../Landing Page Assets/google.png";
import differentCompanies from "../Landing Page Assets/different-companies.png";
import BusinessInterview from "../Landing Page Assets/business-interview.svg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import {SignedIn, SignedOut, SignInButton} from "@clerk/clerk-react";


const Home = () => {
  // const networkIP = "YOUR_NETWORK_IP_HERE"
  return (
    <div className="home-container" id="home-section">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Uplift your Technical Interviews with Precision & Innovation
          </h1>
          <div className="horizontal-container">
            <div>
              <b>Platform</b>
              <p>Full access to our platform, <br/>including all questions and <br/>solutions.</p><br/>
            </div>
            <div>
              <b>Community</b>
              <p>Join a community of like-minded <br/>individuals, and learn from each <br/>other.</p>
            </div>
          </div>
          
          {/* Clerk SignInButton */}
          
          <SignedOut>
            <SignInButton className="secondary-button" mode="modal" redirectUrl="/dashboard" >
            <button>Get Started</button>
            </SignInButton>
          </SignedOut>

          

        <SignedIn>
        {/* <a href={`http://${networkIP}:5173/`} className="secondary-button" style={{ textDecoration: 'none' }}> */}
        <a href={`http://localhost:5173/`} className="secondary-button" style={{ textDecoration: 'none' }}>
          Ready to Begin
        </a>
        </SignedIn>

      
        </div>
        <div className="home-image-section">
          <img src={BusinessInterview} alt="" />
        </div> 
      </div>
      <div className="rectangle">
        <h2> Interviews from</h2>
        {/* <img src={google} alt=""/><br/> */}
        <img src={differentCompanies} alt=""/>
      </div>

    </div>
  );
};

export default Home;
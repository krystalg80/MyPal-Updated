    import React from 'react';
    import video from './assets/dogs.mov';
    import './Home.css';
    import doggie from './assets/doggie.png'

    function Home() {
        return (
     <div className="home-container">   
        {/* <div className="shop-container">
            <div className="shop-info">
                <div className="shop-info-content">
                    <h1>MyPal</h1>
                    <h2>Keeping one pet safe at a time with MyPal!</h2>
                </div>
            </div>
        </div>    */}
        {/* <div className="container p-5 mx-auto">
            <div className="video-container shadow-lg "> 
                <div className="video-box"> 
                    <video autoPlay loop muted>
                        <source src={video} type="video/mp4" />   
                    </video>
                </div>  
                <div className="text-overlay">
                    <h1>Keeping one pet safe at a time with MyPal!</h1> 
                </div>
            </div>  
        </div>   */}
        <div className="col-md-10 mx-auto">
         <div className="company-container">
            <div className="company-info">
                    <div className="company-info-content">
                        <h1>Never Lose Your Best Friend Again</h1>
                        <h2>Peace of mind with advanced GPS tracking for your pets</h2>
                        <img src={doggie} alt="Dog" width="350px" />
                        {/* <h2>Did you know 10 million dogs are lost a year? From those missing dogs more than 80% are never found. Heartbreaking. MyPal was created to provide pet owners an affordable GPS Dog Collar that allows you to know your dog's whereabouts wherever and whenever! Help us prevent the grief of our lost pets!</h2> */}
                    </div>
                </div>      
            </div>
        </div>
        {/* <div className="col-md-10 mx-auto">
         <div className="partner-container shadow-lg p-5">
            <div className="partner-info">
                    <div className="partner-info-content">
                        <h1>Sponsorships</h1>
                    </div>
                </div>      
            </div>
        </div> */}
        </div>
        );  
    }

    export default Home;

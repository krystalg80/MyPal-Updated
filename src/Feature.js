import React from 'react';
import './Feature.css';
import img from './assets/prototype.png'; // Import the image using img variable
import app from './assets/app.png';
import screen from './assets/screen.png';
function Feature() {
    return (
        <div className="features-container">
          <div className="col-md-10 mx-auto">
            <div className="introduction">
                <div className="introduction-text">
                    <h1>Advanced Features for Complete Peace of Mind</h1>
                    <p>MyPal is a cutting-edge pet tracker designed to keep your furry friend safe and connected. With advanced GPS technology, our device provides real-time location tracking, ensuring you can always find your pet. Set up safe zones to receive alerts when your pet ventures outside designated areas, giving you peace of mind and control over your pet's whereabouts.</p>
                </div>
            </div>
        </div>
        <div className="col-md-10 mx-auto"> 
            <div className="feature-boxes">
                    <div className="feature-box">
                        <div className="feature-icon">🛰️</div>
                        <h3>Realtime GPS Tracking</h3>
                        <p>Track your pet's location instantly with precise GPS technology</p>
                    </div>
                    
                    <div className="feature-box">
                        <div className="feature-icon">🔋</div>
                        <h3>Long Battery Life</h3>
                        <p>5-day battery life for uninterrupted pet monitoring</p>
                    </div>
                    
                    <div className="feature-box">
                        <div className="feature-icon">🎯</div>
                        <h3>Smart Geofencing</h3>
                        <p>Set up safe zones and receive alerts when your pet leaves the area</p>
                    </div>
                    
                    <div className="feature-box">
                        <div className="feature-icon">📱</div>
                        <h3>Mobile App</h3>
                        <p>User-friendly app for iOS and Android devices</p>
                    </div>
                </div>
            </div>
             <div className="app-preview-container">
                <h2>Mobile Application Preview</h2>
                <p>COMING SOON</p>
                <div className="app-preview-content">
                    <div className="application">
                        <img src={app} alt="Application 1" className="application-image" />
                        <div className="application-description">
                            <h3>The App</h3>
                            <p>Via Apple Store and Google Play; Here's how our MyPal application looks like. With a user-friendly interface, you can easily track your pet's location, set up safe zones, and receive notifications when your pet goes outside the designated area.</p>
                        </div>
                    </div>
                    <div className="homescreen">
                        <img src={screen} alt="homescreen 1" className="homescreen-image" />
                        <div className="homescreen-description">
                            <h3>Home Screen</h3>
                            <p>Our homescreen provides quick access to important features of the MyPal app. You can see your pet's location in real-time, view historical location data, and customize settings to suit your preferences.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add more features as needed */}
        </div>
    );
}

export default Feature;

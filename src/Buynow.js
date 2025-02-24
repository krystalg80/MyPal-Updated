import React, { useState } from 'react';
import './Buynow.css';
import collar1 from './assets/collar1.png'; // Import images for collar options
import collar2 from './assets/collar2.png';
import collar3 from './assets/collar3.png';
import collar4 from './assets/collar4.png';


function BuyNow() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, such as sending data to a backend server
        console.log('Submitted:', { firstName, lastName, email });
        // Reset form fields
        setFirstName('');
        setLastName('');
        setEmail('');
    };

    return (
        <div className="buy-now-page">
            <h1>Our Products</h1>
            <div className="buy-now-container">
                <div className="product-wrapper">
                    <div className="collar-item">
                        <img src={collar1} alt="Collar 1" className="collar-image" />
                    </div>
                    <div className="collar-details">
                        <h2>Brown MyPal</h2>
                        <p>Price: $150.00</p>
                        <button>Coming Soon</button>
                    </div>
                </div>
                
                <div className="product-wrapper">
                    <div className="collar-item">
                        <img src={collar2} alt="Collar 2" className="collar-image" />
                    </div>
                    <div className="collar-details">
                        <h2>Grey MyPal</h2>
                        <p>Price: $150.00</p>
                        <button>Coming Soon</button>
                    </div>
                </div>
                
                <div className="product-wrapper">
                    <div className="collar-item">
                        <img src={collar3} alt="Collar 3" className="collar-image" />
                    </div>
                    <div className="collar-details">
                        <h2>Pink MyPal</h2>
                        <p>Price: $150.00</p>
                        <button>Coming Soon</button>
                    </div>
                </div>
                
                <div className="product-wrapper">
                    <div className="collar-item">
                        <img src={collar4} alt="Collar 4" className="collar-image" />
                    </div>
                    <div className="collar-details">
                        <h2>Red MyPal</h2>
                        <p>Price: $150.00</p>
                        <button>Coming Soon</button>
                    </div>
                </div>
            </div>
                <div className="why-us">
                    <h2>Why Choose MyPal?</h2>
                    <div className="why-us-container">
                        <div className="why-us-item">
                            <h4>Real-Time GPS</h4>
                        </div>
                        <div className="why-us-item">
                            <h4>5-day Battery</h4>
                        </div>
                        <div className="why-us-item">
                            <h4>Water Resistant</h4>
                        </div>
                        <div className='why-us-item'>
                            <h4>App Enabled</h4>
                        </div>
                     </div>
                </div>
            <div className="form-container">
             <form onSubmit={handleSubmit}>
                <h2>Sign up to be notified when in Stock!</h2>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
         </div>
        </div>
    );
}

export default BuyNow;

import React from 'react'

const Home = () => {
    return (
        <>
            <div className='container'>
                <i className="fa fa-map-marker" style={{fontSize:"48px",color:"red"}}>Math</i>
                <div className='row'>
                    <div className='col-lg-7'>
                        <h1>MENTAL MATHS</h1>
                        <p>Have Fun with Math! Get rid of your Math phobia. Become a Human Calculator yourself and be able to calculate 10-15 times faster than before!</p>
                        <div className='my-4'>
                            <i className="fa fa-calendar " style={{ "fontSize": "24px", color: "blue" }} > <span className='mx-2' style={{ "fontSize": "24px", color: "black" }}>2-4 Year</span></i>

                            <i className="fa fa-users second-word-formatting" style={{ "fontSize": "24px", color: "blue", marginLeft: "100px" }}> <span className='mx-2' style={{ "fontSize": "24px", color: "black" }}>7 - 8 Students</span></i><br />
                            <i className="fa fa-clock-o my-4" style={{ "fontSize": "24px", color: "blue" }} > <span className='mx-2' style={{ "fontSize": "24px", color: "black" }}>60 Mins Per className</span></i>
                            <i className="fa fa-calendar-week my-4" style={{ "fontSize": "24px", color: "blue", marginLeft: "100px" }}> <span className='mx-2' style={{ "fontSize": "24px", color: "black" }}>5 Weeks Duration</span></i>
                        </div>
                        <div className="card my-5" style={{ "width": "40rem" }}>
                            <div className="card-header text-center">
                                <h1>₹1499 INR For 10 Live Classes</h1>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <img height={400} width={500}
                            src="https://app.younglabs.in/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fyounglabs-8c353.appspot.com%2Fo%2Fcourse%2520cover%2520pictures%252Freading.webp%3Falt%3Dmedia%26token%3D34617f04-1c15-4bff-a75e-8a6668ad373a&w=640&q=75" alt="new" />
                    </div>

                </div>
            </div>

            {/* accordian */}
            <div className="container  my-3">

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Details </strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                <h5 style={{ wordSpacing: "5px" }}>
                                    CLASS 1- Criss-cross multiplication<br />

                                    CLASS 2- Subtraction with numbers near to 10 and multiples of 10 Cutoff method addition/ Vyavakalanam method Dot method addition/ Rekhanth method<br />

                                    CLASS 3- Multiplication upto 100 (Done mentally)<br />

                                    CLASS 4- Subtraction with Numbers near 10 and multiple of 10<br />

                                    CLASS 5- Digit sum method Multiplication using base method part 1/ Nikhilam method, Fractions<br />

                                    CLASS 6- Base method multiplication part 2 Division part 1<br />

                                    CLASS 7 - LCM and HCF<br />

                                    CLASS 8- Multiplication with series of 9 Division part 2<br />

                                    CLASS 9- Multiplication with series of 1 Multiplication with 21,31 41 91 Base complement method subtraction/ Nikhil am method ,Division of any number by 11<br />

                                    CLASS 10- Division with series of 9 Multiplication by digits 12 to 19 Multiplication with 5, 25, 125 Percentage<br />
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Homework</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                Comprehensive home assignments will be provided , which will be an extension of what is done is the class.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Learning Goals</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                Have Fun with Math! Get rid of your Math phobia. Become a Human Calculator yourself and be able to calculate 10-15 times faster than before!

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* footer */}
            <div id="footer" className='card' >
                <div className='card-body mx-2'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <h6>Your friend, your guide and your partner in the journey of parenting</h6>
                            <i class="fa fa-facebook mx-5 my-3" style={{"fontSize": "30px"}}></i>
                            <i class="fa fa-whatsapp mx-5" style={{"fontSize": "30px"}}></i>
                            <i class="fa fa-instagram mx-5" style={{"fontSize": "30px"}}></i>
                            <p>© 2022 All Rights Reserved. Younglabs</p>
                        </div>
                        <div className='col-lg-4 '>
                            <ul>
                            <h4>Quick Links</h4>
                                <li>About</li>
                                <li>Privacy Policy</li>
                                <li>Shipping & Delivery</li>
                                <li>Return, Refunds & Exchange Policy</li>
                                <li>  Terms & Conditions</li>
                            </ul>

                        </div>
                        <div className='col-lg-4'>
                            <ul>
                            <h4>Address</h4>
                                <li><i class="fa fa-map-marker my-2" style={{"fontSize": "20px"}}> &nbsp;A-39, Sector - 4, Noida -201301</i></li>
                                <li><i class="fa fa-phone  my-2" style={{"fontSize": "20px"}}>&nbsp; ( +91) 92890 29696</i></li>
                                <li><i class="fa fa-envelope  my-2" style={{"fontSize": "20px"}}>&nbsp; info@younglabs.in</i></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
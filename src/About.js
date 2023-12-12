import React from 'react';
import Footer from './Footer';

// Images
import Dennis from "../imgs/AboutPics/Dennis.png"
import Jay from "../imgs/AboutPics/Jay.jpg"
import Alykaa from "../imgs/AboutPics/Alykaa.jpeg"
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Style CSS
import '../style/style.css'




// About page

function About() {
    return (
        <div>
            {/* About Content */}
            <div className='content'>
                <h4 className='display-4'>About us</h4>
                <p className='title-content'>
                    <em><blockquote>"Success is best when it's shared" <br /> - Howard Schultz</blockquote></em>
                </p>
                <hr />

                {/* Info */}
                <div className="container mt-5">
                    <div className="card">
                            <img src={Dennis} className='card-img-side' alt="One of our Creators" />
                        <div className="card-body">
                            <h5 className="card-title">Dennis</h5>
                            <p className="card-text">
                                Content from Dennis About Page
                                <b><u> Contact: </u></b>
                                <br />
                                logos: GitHub Linkedin Social Media presences
                            </p>
                        </div>
                    </div>
                    {/* END */}

                    <div className="card">
                            <img src={Jay} className='card-img-side' alt="One of our Creators" />
                        <div className="card-body">
                            <h5 className="card-title">Jay</h5>
                            <p className="card-text">
                                Content from Jay About Page
                                <b><u> Contact: </u></b>
                                <br />
                                logos: GitHub Linkedin Social Media presences
                            </p>
                        </div>
                    </div>
                    {/* END */}

                     <div className="card">
                        <img src={Alykaa} className='card-img-side' alt="One of our Creators" />
                        <div className="card-body">
                            <h5 className="card-title">Alykaa</h5>
                            <p className="card-text">
                                Content from Alykaa About Page
                                <b><u> Contact: </u></b>
                                <br />
                                logos: GitHub Linkedin Social Media presences
                            </p>
                        </div>
                    </div>
                    {/* END */}

                </div>
            </div>
            <Footer />
               
            </div>
    );
};


export default About;
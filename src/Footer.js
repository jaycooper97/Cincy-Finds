// Footer.js
import React from 'react';
import './style.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
// Import the Font Awesome stylesheet
import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
import "https://code.jquery.com/jquery-3.5.1.slim.min.js";
import { faHome, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.7/dist/umd/popper.min.js";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css";

function Footer() {
    return (
        <footer>
         {/* <div className="container"> */}
            <div className="bg-light text-center text-lg-start text-muted mt-5">


            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                    <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href='' className='me-4 text-reset'>
                    <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href='' className='me-4 text-reset'>
                    <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href='' className='me-4 text-reset'>
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href='' className='me-4 text-reset'>
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href='' className='me-4 text-reset'>
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </section>

            <section className=''>
                <div className='text-center text-md-start mt-5'>
                    <div className='mt-3'>
                        <div md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <FontAwesomeIcon color='secondary' icon='gem' className='me-3' />
                                Cincy Finds
                            </h6>
                            <p>
                                Enjoy the Cinncinati lifestyle.
                            </p>
                        </div>

                        <div md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    About
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Categories
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Contact
                                </a>
                            </p>
                        </div>

                        <div md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <FontAwesomeIcon color='secondary' icon={faHome} className='me-2' />
                                Cinncinati, OH, 45341, US
                            </p>
                            <p>
                                <FontAwesomeIcon color='secondary' icon={faEnvelope} className='me-3' />
                                info@example.com
                            </p>
                            <p>
                                <FontAwesomeIcon color='secondary' icon={faPhone} className='me-3' /> + 01 513 567 88
                            </p>
                            <p>
                                <FontAwesomeIcon color='secondary' icon={faPrint} className='me-3' /> + 01 513 567 89
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            <p>&copy; 2023 Cincy Finds | Brought to you by The Web Development Students in Kable Academy</p>
                <a className='text-reset fw-bold' href='https://kableacademy.com/'>
                    KableAcademy.com
                </a>
            </div>
                        </div>
        {/* </div> */}
                            </footer>



    //     My Code
    //  <hr className='footer-line' />
    //         <p>&copy; 2023 Cincy Finds | Brought to you by The Web Development Students in Kable Academy</p>
    //          Needs to add an Icons to this
    //  <FontAwesomeIcon icon={faGithub} />

    );
}

export default Footer;

// import slide1 from '../assets/slideshow/medium-shot-business-women-high-five.jpg';
import Slider from "react-slick";
import slide1 from '../assets/slideshow/medium-shot-business-women-high-five.jpeg';
import slide2 from '../assets/slideshow/team-meeting-renewable-energy-project.jpeg';
import slide3 from '../assets/slideshow/two-business-partners-working-together-office-computer.jpeg';
import Footer from "./Footer";
import { Header } from "./Header/Header";
import SignIn from "./SignIn";

export const Main = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
        
            <section className="slick-slideshow">
                <Slider autoplay={true} {...settings}>
                    <div className="slick-custom">
                        <img src={slide1} className="img-fluid" alt="" />
                        <div className="slick-bottom">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-10">
                                        <h2 style={{ color: 'whitesmoke' }}>NOW<br />
                                            "Fulfilment of <br />your dreams"</h2>
                                        <h6 style={{ color: 'blanchedalmond' }}>has a new address</h6>
                                        <p style={{ color: 'black' }}>We're here to help MSMEs overcome
                                            <br />Accounting and Enforcement issues.</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="border-first-button scroll-to-section">
                                            <a href="contact.html" className="btn custom-btn">Get More Info</a>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slick-custom">
                        <img src={slide2} className="img-fluid" alt="" />
                        <div className="slick-bottom">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-10">
                                        <h2 style={{ color: 'whitesmoke' }}>NOW<br />
                                            "Fulfilment of <br />your dreams"</h2>
                                        <h6 style={{ color: 'blanchedalmond' }}>has a new address</h6>
                                        <p style={{ color: 'black' }}>We're here to help MSMEs overcome
                                            <br />Accounting and Enforcement issues.</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="border-first-button scroll-to-section">
                                            <a href="contact.html" className="btn custom-btn">Get More Info</a>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slick-custom">
                        <img src={slide3} className="img-fluid" alt="" />
                        <div className="slick-bottom">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-10">
                                        <h2 style={{ color: 'whitesmoke' }}>NOW<br />
                                            "Fulfilment of <br />your dreams"</h2>
                                        <h6 style={{ color: 'blanchedalmond' }}>has a new address</h6>
                                        <p style={{ color: 'black' }}>We're here to help MSMEs overcome
                                            <br />Accounting and Enforcement issues.</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="border-first-button scroll-to-section">
                                            <a href="contact.html" className="btn custom-btn">Get More Info</a>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
            <div id="about" className="about section">
                <header className="site-header section-padding-img site-header-image" style={{ height: '550px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12 header-info">
                                <h3 className="section-heading" style={{ marginTop: '-150px' }}>About Us</h3>
                                <p style={{ fontSize: 'medium' }}>The business is led by a group of professionals from different fields and backgrounds who have the functional and technological experience. We're here to help MSMEs overcome their accounting and enforcement issues under different laws of the country.</p>
                                <p style={{ fontSize: 'medium' }}>As per our Research, we found out that Large Number of MSMEs are incurring Huge Losses and are struggling daily to fulfill their accounting and enforcements needs due to Constraints with respect to their Location, Lack of Fully Trained People to execute their Accounting Works, Cost Overruns to Fulfill all enforcement needs, and Poor Quality of Services provided by existing lot. To solve these Problems, our team is committed to develop creative and cost-effective real-time customized solutions catering to your needs.</p>
                                <p style={{ fontSize: 'medium' }}>MBA from a world-famous B-School for Entrepreneurship, Chartered accountants with two and a half decades of experience in practice, Information Technology Specialist with ten years of experience in growth and solution design, Cost Accountant and foreign faculty for SAP ERP, make up the Board of Directors.</p>
                                <img src="images/header/businesspeople-meeting-office-working.jpg" className="header-image img-fluid" alt="" style={{ height: '550px' }} />
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <div id="services" class="services section">
                <section class="products section-padding">
                    <h3 style={{ marginLeft: '600px' }}>Our Services</h3>
                    <p style={{ marginLeft: '200px' }}>To make you stress free and comfortable to do your business and help you to maximize your returns</p>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-12 mb-3">
                                <div class="product-thumb">
                                    <table>
                                        <tr>
                                            <td>   <img src="images/key.png" alt="" style={{ height: '50px', width: '70px', marginTop: '-50px' }} /></td>
                                            <td>  <h4 style={{ fontSize: 'medium', marginTop: '50px' }}><a href="#">No Security Risk</a></h4>
                                                <p style={{ fontSize: 'medium' }}>Book Experts ensures that there will not be any risk to your financial data as the data is automatically saved and protected</p>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="col-lg-4 col-12 mb-3">
                                <div class="product-thumb">
                                    <table>
                                        <tr>
                                            <td>   <img src="images/account.png" alt="" style={{ height: '50px', width: '50px', marginTop: '-50px' }} /></td>
                                            <td>  <h4 style={{ fontSize: 'medium', marginTop: '50px' }}><a href="#">Account Management</a></h4>
                                                <p style={{ fontSize: 'medium' }}>Your Account Manager takes care of your Books updating & validation on daily basis and provides you the required info to you and your people within minutes

                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                            </div>
                            <div class="col-lg-4 col-12 mb-3" >
                                <div class="product-thumb">
                                    <table>
                                        <tr>
                                            <td>   <img src="images/stationory.png" alt="" style={{ height: '50px', width: '50px', marginTop: '-50px' }} /></td>
                                            <td>  <h4 style={{ fontSize: 'medium', marginTop: '50px' }}><a href="#">Statuory Compliance</a></h4>
                                                <p style={{ fontSize: 'medium' }}>Your chosen Experts will be provided the required data in full and in required format for statutory and other compliances in advance for filings/submissions.
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="col-lg-4 col-12 mb-3" style={{ marginTop: '-20px' }}>
                                <div class="product-thumb">
                                    <table>
                                        <tr>
                                            <td>   <img src="images/audit.png" alt="" style={{ height: '50px', width: '50px', marginTop: '-50px' }} /></td>
                                            <td>  <h4 style={{ fontSize: 'medium', marginTop: '50px' }}><a href="#">Audint & Filling Of Returns</a></h4>
                                                <p style={{ fontSize: 'medium' }}>Your CA will be provided with all the required data like books, Statements, schedules, reconciliations, info required for reporting etc., well in advance and in reusable shape
                                                    <br />



                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                            </div>

                            <div class="col-lg-4 col-12 mb-3" style={{ marginTop: '-250px', marginLeft: '380px' }}>
                                <div class="product-thumb">
                                    <table>
                                        <tr>
                                            <td>   <img src="images/data.png" alt="" style={{ height: '50px', width: '50px', marginTop: '-50px' }} /></td>
                                            <td>  <h4 style={{ fontSize: 'medium', marginTop: '50px' }}><a href="#">Data Management</a></h4>
                                                <p style={{ fontSize: 'medium' }}>In MSMEs capturing and organizing of data is a big task, we will handle the same with our advanced technologies and techniques by a least or no disturbance to the Business owners



                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
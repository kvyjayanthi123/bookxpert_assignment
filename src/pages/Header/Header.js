import Navigation from "../Navigation";
import "./Header.scss";
import logo from '../../assets/book.png'
import { useNavigate } from "react-router";

export const Header = (props) => {
    const navigate = useNavigate();
    const handleSignIn = () => {
        navigate('/sign-in')
    }
    return (
        <>
            {/* <section class="preloader">
            <div class="spinner">
                <span class="sk-inner-circle"></span>
            </div>
        </section> */}
    
        <main>

            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a className="navbar-brand" href="index.html">
                        <img src="book.png" alt="" height="80px" />
                        <img src={logo} alt="Bookxpert logo" height="80px" className="logo-img" />
                    </a>

                    <div className="d-lg-none">
                        <a href="sign-in.html" className="bi-person custom-icon me-3"></a>

                        <a href="product-detail.html" className="bi-bag custom-icon"></a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="index.html">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#about">Abount Us</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#services">services</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="faq.html">Blogs</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                            </li>
                        </ul>

                        <div className="d-none d-lg-block">
                            <a href="" className="bi-person custom-icon me-3"></a>

                            <a onClick={handleSignIn} className="btn custom-btn">Sign In</a>
                            <a href="sign-out.html" className="btn custom-btn">Sign out</a>
                        </div>
                    </div>
                </div>
            </nav>
            </main>
        </>
    )
}
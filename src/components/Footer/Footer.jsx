import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
    return (
        <>
            <footer  className="text-center text-lg-start bg-dark text-light  text-light">
                <Container>
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <div>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>

                    </section>
                </Container>
                <section className="">
                    <Container className="text-center text-md-start mt-5">
                        <Row className="mt-3">
                            <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>About Me
                                </h6>
                                <p>
                                    I am Sajjad Hossain. I working As a Full Stack Developer In Unicorn Software And Solutions,Khulna.
                                    I have 1 year experiences in Laravel
                                </p>
                            </Col>
                            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                Experience
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">React</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Html</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Css</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Laravel</a>
                                </p>
                            </Col>
                            <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </Col>
                            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i>Khulna, Bangladesh</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    sh8170468@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i>01684067842</p>
                                {/* <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p> */}
                            </Col>
                        </Row>
                    </Container>
                </section>

                <div className="text-center p-4" >
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="">Sajjad Hossain</a>
                </div>

            </footer>

        </>
    );
};

export default Footer;
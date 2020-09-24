import { Row, Col } from 'reactstrap';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import styles from '../styles/activity.module.scss';

export default function activity () {
    return (
        <>  
            <NavBar navBarClasses="py-3" />
            <Row className="activity-page">
                <Col className="p-5" md="5">
                        <Row className={`${styles.card_shadow} bg-white p-3`}>
                            <Col md="8">
                                <img className={`${styles.activity_profile_img} img-fluid rounded-circle mx-auto d-block`} src="./img/home/girl-with-chile.png" />
                                <div className={styles.activity_profile_head}> 
                                    <p className={styles.activity_profile_name}>
                                        Emma Fischer
                                    </p>
                                </div>
                                <a className={`${styles.activity_profile_contact_pill} badge badge-pill px-3 py-2 ml-2`}>
                                    Contact
                                </a>
                            </Col>
                            <Col className="d-flex flex-row-reverse" md="4">
                                <a className={`${styles.activity_profile_action_button} mr-2"`}>
                                    <img src="./img/icons/save.svg" />
                                </a>
                                <a className={`${styles.activity_profile_action_button} mr-4`}>
                                    <img src="./img/icons/share.svg" />
                                </a>
                                
                            </Col>
                            <Col  md={{size:11, offset:1}}>
                                <h6 className="mt-4">
                                    Sports & Fitness
                                </h6>
                                <h2 className="h2">
                                    Yoga for beginners
                                </h2>  
                            </Col>
                            <Col md={{size:11, offset:1}}>
                                <Row>
                                    <Col md="3">
                                        <img className="mt-3 d-inline" src="./img/icons/share.svg" />
                                        <p className="mt-3 d-inline">
                                            25 USD
                                        </p>
                                    </Col>
                                    <Col md="3">
                                        <img className="mt-3 d-inline" src="./img/icons/share.svg" />
                                        <p className="mt-3 d-inline">
                                            25 USD
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="3">
                                        <img className="d-inline" src="./img/icons/share.svg" />
                                        <p className="d-inline">
                                            25 USD
                                        </p>
                                    </Col>
                                    <Col md="3">
                                        <img className="d-inline" src="./img/icons/share.svg" />
                                        <p className="d-inline">
                                            25 USD
                                        </p>
                                    </Col>
                                    <Col md="3">
                                        <img cclassName="d-inline" src="./img/icons/share.svg" />
                                        <p className="d-inline">
                                            25 USD
                                        </p>
                                    </Col>
                                </Row>
                                
                            </Col>
                            <Col md={{size:10, offset:1}}>
                                <div class="p-4 bg-primary mt-5">
                                    <h5 className="h5 text-white">
                                        Next session
                                    </h5>
                                    <div class="card mb-3" style="max-width: 540px;">
                                        <div class="row no-gutters">
                                            <div class="col-md-1">
                                            </div>
                                            <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                            </Col>
                        </Row>
                </Col>        
                <Col  md="7">
                    <Slider/>
                </Col>
            </Row>
            <Footer />
        </>
    )
}